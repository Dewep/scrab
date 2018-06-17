const _ = require('lodash')
const path = require('path')

module.exports = async function initServer (app, rootPath) {
  try {
    // Init modules
    const modules = app.modules.map(identifier => {
      let directory
      if (identifier.length && identifier[0] === '@') {
        identifier = identifier.substr(1)
        directory = path.join(__dirname, identifier)
      } else {
        directory = path.join(rootPath || process.cwd(), identifier)
      }

      const nameParts = identifier.split('/').map(part => _.camelCase(part))

      let parent = app
      for (let i = 0; i < nameParts.length - 1; i++) {
        parent[nameParts[i]] = {}
        parent = parent[nameParts[i]]
      }

      return {
        identifier,
        parent,
        key: nameParts[nameParts.length - 1],
        directory
      }
    })

    app.modules = modules

    // Load modules
    for (let index = 0; index < modules.length; index++) {
      const ComponentClass = require(modules[index].directory)
      modules[index].parent[modules[index].key] = new ComponentClass(app)
      modules[index].instance = modules[index].parent[modules[index].key]
    }

    // Run modules
    for (let index = 0; index < modules.length; index++) {
      if (modules[index].instance.run) {
        await modules[index].instance.run()
      }
    }
  } catch (err) {
    console.error('[run-error]', err)
    process.exit(1)
  }
}
