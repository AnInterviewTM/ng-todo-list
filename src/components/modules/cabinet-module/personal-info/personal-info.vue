<template>
  <b-container fluid="sm">
    <section class="personal-info bg--white-1 mt-4 p-4">
      <b-row align-h="between" align-v="center">
        <b-col cols="auto">
          <h1 class="caption caption--fs_sm">{{ getCurrentUser }}</h1>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "NgTodoListPersonalInfo",

    computed: {
      ...mapGetters("users", ["getCurrentUser"])
    }
  };
</script>

<style lang="scss">
  @import "./personal-info";
</style>
