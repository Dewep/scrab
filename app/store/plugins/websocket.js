function encodeData (data) {
  return unescape(encodeURIComponent(JSON.stringify(data)))
}

function decodeData (data) {
  return JSON.parse(decodeURIComponent(escape(data)))
}

export default function (store) {
  let socket = null

  function handleMessage (type, payload) {
    if (type === 'connect') {
      store.dispatch('connected', { gameId: payload.gameId || null })
    }
  }

  function connect () {
    const loc = window.location
    const protocol = 'ws' + (loc.protocol === 'https:' ? 's' : '') + '://'
    socket = new WebSocket(protocol + loc.host + '/scrab')
    let error = null

    socket.sendPayload = function (type, payload) {
      socket.send(encodeData({ type, data }))
    }

    socket.onclose = function (event) {
      socket = null
      store.dispatch('disconnected', { error: event.reason || error || 'Aucune connexion internet' })
    }

    socket.onerror = function (err) {
      error = err.reason
      console.error('ws.error', err)
    }

    socket.onmessage = function (event) {
      const data = decodeData(event.data)

      console.info('ws.data', data.type, data.data)
      if (data.type) {
        handleMessage(data.type, data.data || {})
      }
    }

    socket.onopen = function (event) {
      // store.dispatch('connected')
    }
  }

  store.subscribe(function ({ type, payload }, state) {
    if (type === 'CONNECT') {
      connect()
    } else if (socket) {
      // socket.sendPayload()
    }
  })
}
