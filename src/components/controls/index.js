import ButtonControl from "./button-control/button-control.vue";
import InputControl from "./input-control/input-control.vue";

export default function install(Vue) {
  Vue.component(ButtonControl.name, ButtonControl);
  Vue.component(InputControl.name, InputControl);
}
