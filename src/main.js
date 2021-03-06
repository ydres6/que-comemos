import Vue from 'vue'
import App from'./App.vue'
import store from './store/store'

//Vue . use ( require ( ' vue-moment ' ) ) 



import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter) 
Vue.config.productionTip = false


 
import 'bootstrap/dist/css/bootstrap.css'


import {routes} from './routes'
const router = new VueRouter({
  routes,
  linkActiveClass :'active'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
