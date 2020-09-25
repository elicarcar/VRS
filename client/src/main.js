import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import UUID from "vue-uuid";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/scss/index.scss";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(UUID);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
