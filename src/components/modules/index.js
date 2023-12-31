import HeaderModule from "./header-module/header-module";
import CabintModule from "./cabinet-module/index";
import ModalsModule from "./modal-module/index";

export default function install(Vue) {
  Vue.component(HeaderModule.name, HeaderModule);
  Vue.use(CabintModule);
  Vue.use(ModalsModule);
}
