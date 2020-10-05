import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import UUID from 'vue-uuid'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/index.scss'

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId:
    '1007298745712-cjugfj7206jajdmj811ods8rrosf5ff5.apps.googleusercontent.com',
  scope: 'profile email',
}
Vue.use(GAuth, gauthOption)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(UUID)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
