import Vue from 'vue'
import storage from '../storage'

let deviceId = storage.getString('deviceId')

if (!deviceId) {
  deviceId = Math.random().toString(36).substr(2, 10)
  storage.setString('deviceId', deviceId)
}

const state = {
  deviceId,
  loading: false,
  error: null,
  isConnected: false,
  gameId: null
}

const getters = {
  deviceId: state => state.deviceId,
  connectStatus: state => ({ loading: state.loading, error: state.error }),
  isConnected: state => state.isConnected,
  gameId: state => state.gameId
}

const actions = {
  connect ({ commit }) {
    commit('CONNECT', {})
  },
  connected ({ commit }, { gameId }) {
    commit('AUTH', { isConnected: true })
  },
  disconnected ({ commit }, { error }) {
    commit('AUTH', { isConnected: false, gameId: null, error })
  }
}

const mutations = {
  CONNECT (state) {
    Vue.set(state, 'loading', true)
    Vue.set(state, 'error', null)
  },
  AUTH (state, { isConnected, error }) {
    Vue.set(state, 'loading', false)
    Vue.set(state, 'error', error || null)
    Vue.set(state, 'isConnected', isConnected)
    Vue.set(state, 'gameId', gameId || null)
  }
}

export default { state, getters, actions, mutations }
