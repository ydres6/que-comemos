import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueRouter from 'vue-router'
import Login from './components/Login.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

import {routes} from './routes'
const router = new VueRouter({
  routes,
  linkActiveClass :'active'
})

new Vue({
  router,
  render: h => h(Login),
}).$mount('#login')
