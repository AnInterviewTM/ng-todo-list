<template>
  <section>
    <NgTodoListHeaderModule />
    <slot />
  </section>
</template>

<script lang="js">
  export default {
    name: "NgTodoListDefaultLayout",

    data() {
      return {
        formData: {}
      };
    }
  };
</script>