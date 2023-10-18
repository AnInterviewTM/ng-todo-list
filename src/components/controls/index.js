import ButtonControl from "./button-control/button-control";
import InputControl from "./input-control/input-control";

export default function install(Vue) {
  Vue.component(ButtonControl.name, ButtonControl);
  Vue.component(InputControl.name, InputControl);
}
