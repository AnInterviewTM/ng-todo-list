import HeaderModule from "./header-module/header-module.vue";
import ModalsModule from "./modal-module/index";

export default function install(Vue) {
  Vue.component(HeaderModule.name, HeaderModule);
  Vue.use(ModalsModule);
}
