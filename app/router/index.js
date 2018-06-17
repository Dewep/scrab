import Vue from 'vue'
import Router from 'vue-router'

import AuthComponent from '../views/auth.vue'

import MainComponent from '../views/main.vue'

import LobbyComponent from '../views/lobby.vue'
import GameComponent from '../views/game.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { name: 'auth', path: '/auth', component: AuthComponent },
    {
      path: '',
      component: MainComponent,
      children: [
        { name: 'home', path: '', redirect: { name: 'lobby' }},
        { name: 'lobby', path: 'lobby', component: LobbyComponent },
        { name: 'game', path: 'game', component: GameComponent }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
