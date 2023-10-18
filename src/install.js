import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import iComponents from "./components/index";
import iLayouts from "./layouts/index";

import vModal from "vue-js-modal";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "vue-js-modal/dist/styles.css";

export default function install(Vue) {
  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
  Vue.use(iComponents);
  Vue.use(iLayouts);

  Vue.use(vModal, {
    dynamic: true,
    dynamicDefaults: {
      transition: "nice-modal-fade",
      height: "auto",
      clickToClose: true,
      scrollable: false
    }
  });
}
