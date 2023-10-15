import controls from "./controls/index";
import forms from "./forms/index";
import modules from "./modules/index";
import Empty from "./empty.vue";

export default function iComponents(Vue) {
  Vue.use(controls);
  Vue.use(forms);
  Vue.use(modules);
  Vue.component(Empty.name, Empty);
}
