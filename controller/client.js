class Client {
  onWebsocketConnection (ws) {
    ws.on('close', () => {
      // ...
    })

    ws.on('message', message => {
      // ...
    })

    ws.on('error', e => {
      // console.error('[ws.onConnection.error]', e)
    })
  }
}

module.exports = Client
