import install from "./install.js";

import router from "./router";
import store from "./store";
import App from "./App.vue";

import Vue from "vue";

import "../src/validates/index.js";
import "../styles/index.scss";

Vue.config.productionTip = false;
Vue.use(install);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
