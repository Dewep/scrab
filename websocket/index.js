const ws = require('ws')

class Websocket {
  constructor (app) {
    this.app = app

    this.config = app.config.websocket

    this.controllers = []
    this.clients = []

    this.ws = new ws.Server({
      server: this.app.serverWeb.server,
      path: '/scrab'
    })
  }

  async run () {
    // Register controllers
    for (const mod of this.app.modules) {
      if (mod.identifier.startsWith('controller/') || mod.identifier.startsWith('@controller/')) {
        this.controllers.push(mod.instance)
      }
    }

    // Get controller on-connection
    for (let c = 0; c < this.controllers.length; c++) {
      const controller = this.controllers[c]

      if (controller.onWebsocketConnection) {
        this.ws.on('connection', controller.onWebsocketConnection.bind(controller))
      }
    }
  }
}

module.exports = Websocket
