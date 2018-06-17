import store from '../store'

export default {
  notConnected (to, from, next) {
    if (store.getters.isConnected) {
      next({ name: 'home' })
    } else {
      next()
    }
  },

  connected (to, from, next) {
    if (store.getters.isConnected) {
      next()
    } else {
      window.wantedConnectedRoute = { path: to.path }
      next({ name: 'auth' })
    }
  }
}
