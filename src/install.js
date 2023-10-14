import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import iComponents from "./components/index";
import iLayouts from "./layouts/index";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

export default function install(Vue) {
  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
  Vue.use(iComponents);
  Vue.use(iLayouts);
}
