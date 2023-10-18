<template>
  <b-container fluid="sm">
    <section class="personal-info bg--white-1 mt-4 p-4">
      <b-row align-h="between" align-v="center">
        <b-col cols="auto">
          <h1 class="caption caption--fs_xl">{{ getCurrentUser.name }}</h1>
        </b-col>
        <b-col cols="auto">
          <h1 class="caption caption--fs_sm">
            <NgTodoListModalComposer component-name="NgTodoListTodoForm">
              <template #default="{ handler }">
                <NgTodoListButtonControl
                  class="button button--style_darks"
                  @event="handler"
                >CREATE</NgTodoListButtonControl>
              </template>
            </NgTodoListModalComposer>
          </h1>
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

<style lang="scss" scoped>
  @import "./personal-info";
</style>
