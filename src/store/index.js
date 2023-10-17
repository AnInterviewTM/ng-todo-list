import { usersModule } from "./modules/users";

import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: usersModule
  }
});
