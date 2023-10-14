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
          <b-col cols="auto">
            <button>LOGIN</button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </header>
</template>

<script lang="js">
  import { COMMON_ROUTER } from "../../../router/commons";

  export default {
    name: "HeaderModule",

    data() {
      return {
        menu: COMMON_ROUTER,
      };
    }
  };
</script>

<style lang="scss">
  @import "header-module.scss";
</style>
