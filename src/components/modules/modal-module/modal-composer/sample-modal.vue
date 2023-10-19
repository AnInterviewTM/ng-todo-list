<template>
  <component
    :object-item="objectItem"
    :is="component"
    @close="$emit('close')"
  ></component>
</template>

<script>
export default {
  name: "NgTodoListSampleModal",

  props: {
    component: {
      required: false
    },
    objectItem: {
      required: false
    }
  },

  created() {
    const esc_key = 27;
    document.addEventListener(
      "keyup",
      event => {
        if (esc_key === event.keyCode) {
          this.$emit("close");
        }
      },
      { passive: true }
    );
  }
};
</script>
