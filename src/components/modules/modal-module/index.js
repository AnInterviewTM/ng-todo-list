import ModalComposer from "./modal-composer/modal-composer.vue";
import SampleModal from "./modal-composer/sample-modal.vue";

export default function install(Vue) {
  Vue.component(ModalComposer.name, ModalComposer);
  Vue.component(SampleModal.name, SampleModal);
}
