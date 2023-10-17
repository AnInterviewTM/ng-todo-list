<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="js">
  import { mapActions } from "vuex";

  export default {
    mounted() {
      this.getUsersAPI();
    },
    methods: {
      ...mapActions("users", [
        "getUsersAPI"
      ])
    }
  };
</script>
