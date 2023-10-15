import install from "./install";

import router from "./router";
import store from "./store";
import App from "./App.vue";

import Vue from "vue";

import "../styles/index.scss";

Vue.config.productionTip = false;
Vue.use(install);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
