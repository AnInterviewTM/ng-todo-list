<template>
  <section>
    <NgTodoListHeaderModule />

    <NgTodoListPersonalInfo />
    <slot />
  </section>
</template>

<script>
  export default {
    name: "NgTodoListCabinetLayout",

    data() {
      return {};
    },

    mounted() {},

    methods: {}
  };
</script>
