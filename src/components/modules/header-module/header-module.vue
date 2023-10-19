<template>
  <header class="header-module">
    <div class="header-module__container">
      <b-container fluid="sm">
        <b-row align-h="between" align-v="center">
          <b-col cols="auto">
            <b-row>
              <b-col v-for="item in menu" :key="item.id" cols="auto">
                <router-link :to="item.path" exact>{{ item.text }}</router-link>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="auto" v-if="!Object.keys(getCurrentUser).length">
            <NgTodoListModalComposer component-name="NgTodoListAuthForm">
              <template #default="{ handler }">
                <NgTodoListButtonControl
                  class="button button--style_darks"
                  @event="handler"
                  >SIGN IN</NgTodoListButtonControl
                >
              </template>
            </NgTodoListModalComposer>
          </b-col>
          <b-col cols="auto" v-if="Object.keys(getCurrentUser).length">
            <b-row>
              <b-col cols="auto">
                <router-link
                  class="button button--style_darks cabinet"
                  to="/cabinet/profile-page"
                  exact
                  >PROFILE</router-link
                >
              </b-col>
              <b-col cols="auto">
                <NgTodoListButtonControl
                  class="button button--style_grays"
                  @event="signOut"
                  ><i class="fa fa-sign-out"></i
                ></NgTodoListButtonControl>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </header>
</template>

<script lang="js">
  import { MENU } from "../../../router/commons";
  import { mapGetters } from "vuex";

  export default {
    name: "NgTodoListHeaderModule",

    data() {
      return {
        menu: MENU,
      };
    },

    methods: {
      signOut() {
        sessionStorage.removeItem("user");
        location.reload();
      }
    },

    computed: {
      ...mapGetters("users", ["getCurrentUser"])
    }
  };
</script>

<style lang="scss" scoped>
  @import "header-module";
</style>
