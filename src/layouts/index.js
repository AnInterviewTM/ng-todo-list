import CabinetLayout from "./cabinet-layout/cabinet-layout";
import DefaultLayout from "./default-layout/default-layout";

export default function iLayouts(Vue) {
  Vue.component(CabinetLayout.name, CabinetLayout);
  Vue.component(DefaultLayout.name, DefaultLayout);
}
