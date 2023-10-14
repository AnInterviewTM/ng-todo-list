import HeaderModule from "./header-module/header-module.vue";

export default function install(Vue) {
  Vue.component(HeaderModule.name, HeaderModule);
}
