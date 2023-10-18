import ModalComposer from "./modal-composer/modal-composer";
import SampleModal from "./modal-composer/sample-modal";

export default function install(Vue) {
  Vue.component(ModalComposer.name, ModalComposer);
  Vue.component(SampleModal.name, SampleModal);
}
