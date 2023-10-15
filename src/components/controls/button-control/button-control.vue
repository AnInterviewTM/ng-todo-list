<template>
  <component
    @click.prevent="$emit('event', $event)"
    :disabled="disabled"
    :is="tag"
  >
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: "NgTodoListButtonControl",

    props: {
      block: {
        default: () => "button",
        type: String
      },
      tag: {
        default: () => "button",
        type: String
      },
      disabled: {
        default: () => false,
        type: Boolean
      },
    },

    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  @import "button-control.scss";
</style>
