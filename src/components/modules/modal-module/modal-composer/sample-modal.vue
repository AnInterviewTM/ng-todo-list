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
    document.addEventListener(
      "keyup",
      event => {
        if (27 === event.keyCode) {
          this.$emit("close");
        }
      },
      { passive: true }
    );
  }
};
</script>
