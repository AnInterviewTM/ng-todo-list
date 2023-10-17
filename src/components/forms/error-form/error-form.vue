<template>
  <ul class="error-form">
    <li
      v-for="item in listItems" :key="item"
      class="error-form__item"
    >{{ item }}</li>
  </ul>
</template>

<script>
  export default {
    name: "NgTodoListErrorForm",

    props: {
      listItems: {
        type: [Array, String],
        require: false
      }
    },

    data() {
      return {};
    }
  };
</script>

<style lang="scss">
  @import "./error-form";
</style>
