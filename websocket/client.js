const ws = require('ws')

class WebsocketClient {
  constructor (wsConnection) {
    this.wsConnection = wsConnection

    this.wsConnection.on('close', event => {
      console.log('on-ws-connection-close', event)

      if (this.onClose) {
        this.onClose(event)
      }
    })

    this.wsConnection.on('message', message => {
      console.log('on-ws-connection-message', message)
      const data = this._decodeData(message)

      if (data.type && this.onMessage) {
        this.onMessage(data.type, data.data || {})
      }
    })

    this.wsConnection.on('error', err => {
      console.error('[ws.onConnection.error]', err)

      if (this.onError) {
        this.onError(err)
      }
    })
  }

  _encodeData (data) {
    return unescape(encodeURIComponent(JSON.stringify(data)))
  }

  _decodeData (data) {
    return JSON.parse(decodeURIComponent(escape(data)))
  }

  send (type, data) {
    if (this.wsConnection.readyState === ws.OPEN) {
      const message = this._encodeData({ type, data })
      this.wsConnection.send(message)
    } else {
      console.warn('ws not anymore open, could not send message')
    }
  }
}

module.exports = WebsocketClient
