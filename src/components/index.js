import modules from "./modules/index";
import forms from "./forms/index";

export default function iComponents(Vue) {
  Vue.use(modules);
  Vue.use(forms);
}
