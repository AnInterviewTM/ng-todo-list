import { User } from "./modules/user/index";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

new Vuex.Store({
  modules: { User },
  deep: true
});
