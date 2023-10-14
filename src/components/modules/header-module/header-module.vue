<template>
  <header class="header-module">
    <div class="header-module__container">
      <b-container fluid="sm">
        <b-row align-h="between" align-v="center">
          <b-col cols="auto">
            <b-row>
              <b-col cols="auto">
                <ul class="header-ul">
                  <li class="header-ul__li">
                    <router-link to="/" exact>HOME</router-link>
                  </li>
                  <li class="header-ul__li">
                    <router-link to="/news-page" exact>NEWS</router-link>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="auto">
            <b-button>LOGIN</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </header>
</template>

<script lang="js">
  export default {
    name: "HeaderModule",

    data() {
      return {
        formData: {
          logo: {
            blankColor: "#777",
            blank: true,
            width: 150,
            height: 38,
          }
        }
      };
    }
  };
</script>

<style lang="scss">
  @import "header-module.scss";
</style>
