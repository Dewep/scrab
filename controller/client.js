class Client {
  wsMethods (register) {
    register('message', this.messageResponse)
    register('error', this.errorResponse)
    register('connect', this.connectResponse)
  }

  wsRoutingPublic (register) {
    register('connect', this.connect, (ws, data) => [ws, data.deviceId])
  }

  wsRoutingAuth (register) {
    register(null, this.mustBeConnected, (ws) => [ws])
  }

  wsRouting (register) {
    register('lobby', this.lobby, (ws, data) => [ws, data.online, data.players, data.duration, data.dict])
  }

  async messageResponse (ws, message, error = false, gameId = null, sound = null) {
    return ws.send('message', { message, error, gameId, sound })
  }

  async errorResponse (ws, message, gameId = null, sound = null) {
    return ws.message(message, true, gameId, sound)
  }

  async connectResponse (ws, gameId = null) {
    return ws.send('connect', { gameId })
  }

  async connect (ws, deviceId) {
    if (deviceId) {
      ws.deviceId = deviceId
      return ws.connectResponse(null)
    }
    return ws.error('Un identifiant est nécessaire pour se connecter')
  }

  async mustBeConnected (ws) {
    return !!ws.deviceId
  }

  async lobby (ws, online, players, duration, dict) {
    console.info('lobby!', online, players, duration, dict)
  }
}

module.exports = Client
