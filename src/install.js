import iComponents from "./components/index";
import iLayouts from "./layouts/index";

export default function install(Vue) {
    Vue.use(iComponents);
    Vue.use(iLayouts);
}
