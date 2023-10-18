<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="js">
  import "./router/middleware/is-user-auth-middleware";
  import { mapActions } from "vuex";

  export default {
    mounted() {
      const user = sessionStorage.getItem("user");
      if (user) this.setCurrentUser(
        JSON.parse(user)
      );
    },
    methods: {
      ...mapActions("users", ["setCurrentUser"])
    }
  };
</script>
