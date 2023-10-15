<template>
  <div>
    <div class="vm--modal-headers">AUTH COMPONENT</div>
    <div class="vm--modal-content">c</div>
    <div class="vm--modal-actions">
      <NgTodoListButtonControl
        class="button button--style_green"
        @event="api()"
      >LOGIN</NgTodoListButtonControl>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "NgTodoListAuthForm",

    data() {
      return {
        formData: {}
      };
    },

    methods: {
      api() {
        console.log("api");
      }
    }
  };
</script>

<style lang="scss">
  @import "auth-form.scss";
</style>
