<template>
  <section>
    <HeaderModule></HeaderModule>
    <slot></slot>
  </section>
</template>

<script lang="js">
  export default {
    name: "DefaultLayout",

    data() {
      return {
        formData: {}
      };
    }
  };
</script>

<style lang="scss">
  @import "default-layout.scss";
</style>
