const pkg = require('./package.json')
const config = require('./config')
const initServer = require('./init')

initServer({
  release: pkg.name + '.' + pkg.version,
  config,
  modules: [
    // 'service/user',

    'server-web',
    'websocket',

    'controller/client'
  ]
})
