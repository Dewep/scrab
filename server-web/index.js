const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')

class ServerWeb {
  constructor (app) {
    this.app = app

    this.config = app.config.serverWeb

    this.express = express()
    this.server = http.createServer(this.express)
    this.controllers = []
  }

  async run () {
    // Register controllers
    for (const mod of this.app.modules) {
      if (mod.identifier.startsWith('controller/') || mod.identifier.startsWith('@controller/')) {
        this.controllers.push(mod.instance)
      }
    }

    // Middlewares (cors, logger, json, etc.)
    this.express.set('etag', false)
    this.express.set('trust proxy', true)

    this.express.head('/', (req, res, next) => { // HAProxy checks
      res.json({})
    })

    if (this.config.cors) {
      const cors = require('cors')
      this.express.use(cors(this.config.cors))
    }

    if (this.app.analytic && this.app.analytic.middleware) {
      this.express.use(this.app.analytic.middleware())
    }

    this.express.use(bodyParser.json({ limit: this.config.jsonLimit || '100kb' })) // @TODO: express.json is now available

    if (this.config.consoleLogger !== false) {
      this.express.use(this.logger)
    }

    // Get controller routes
    const routingSteps = ['routingPublic', 'routingAuth', 'routing']

    for (let r = 0; r < routingSteps.length; r++) {
      const routingStep = routingSteps[r]

      for (let c = 0; c < this.controllers.length; c++) {
        const controller = this.controllers[c]

        if (controller[routingStep]) {
          controller[routingStep](this._registerControllerRoute(this.express, controller))
        }
      }
    }

    // Static routes
    if (this.config.static) {
      for (const directory of this.config.static) {
        this.express.use(express.static(directory))
      }
    }

    // Error handling
    this.express.use(this.errorHandling.bind(this))

    // Listen
    this.server.listen(this.config.port, this.config.host, () => {
      console.info('[server-web] running on', `${this.config.host}:${this.config.port}`)
    })
  }

  _registerControllerRoute (server, controller) {
    return function (method, route, handler, params) {
      const promiseAction = handler.bind(controller)
      server[method](
        route,
        async function (req, res, next) {
          try {
            let callNext = false
            let paramNext
            const nextHandler = function (param) {
              callNext = true
              paramNext = param
            }

            const boundParams = params ? params(req, res, nextHandler) : []
            const result = await promiseAction(...boundParams)

            if (callNext) {
              next(paramNext)
            } else {
              return res.json(result || {})
            }
          } catch (error) {
            return next(error)
          }
        }
      )
    }
  }

  logger (req, res, next) {
    console.info('[server-web]', req.method, req.originalUrl, 'from', req.ip)
    next()
  }

  errorHandling (err, req, res, next) {
    let message = err.message
    if (err.code === 'LIMIT_FILE_SIZE') {
      err.status = 413
      message = 'Votre fichier a une taille trop importante'
    }

    if (!err.status) {
      err.status = 400
    }

    console.error(err.stack)

    res.errorMessage = message
    res.status(err.status)
    res.json({ error: message })
  }
}

module.exports = ServerWeb
