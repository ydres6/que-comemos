import Vue from 'vue'
import App from'./App.vue'
//import Vuetify from 'vuetify/lib'
//import 'vuetify/dist/vuetify.min.css'

import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
//Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(VueRouter) 
Vue.config.productionTip = false

 
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

import {routes} from './routes'
const router = new VueRouter({
  routes,
  linkActiveClass :'active'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
