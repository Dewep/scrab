import Vue from 'vue'

const state = {
  user: null
}

const getters = {
  user: state => state.user || null
}

const actions = {
  // auth ({ commit }, { email, password }) {
  //   commit('AUTH_REQUEST', {})
  //   return authApi.auth(email, password).then(data => {
  //     commit('AUTH_REQUEST_SUCCESS', data)
  //   }).catch(error => {
  //     commit('AUTH_REQUEST_ERROR', { error })
  //   })
  // },
}

const mutations = {
  LOGOUT (state) {
    Vue.set(state, 'user', null)
  }
}

export default { state, getters, actions, mutations }
