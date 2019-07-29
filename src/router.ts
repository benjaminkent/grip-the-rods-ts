import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TwoOnTwo from './views/TwoOnTwo.vue'
import OneOnOne from './views/OneOnOne.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/two-v-two',
      name: 'twoOnTwo',
      component: TwoOnTwo
    },
    {
      path: '/one-v-one',
      name: 'oneOnOne',
      component: OneOnOne
    }
  ],
})
