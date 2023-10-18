// import { getUsersAPI } from "../../request/services/users";

export const usersModule = {
  namespaced: true,

  actions: {
    setCurrentUser({ commit }, data) {
      commit("setCurrentUser", data);
    }
  },

  mutations: {
    setCurrentUser: (state, response) => {
      state.currentUser = response;
    }
  },

  state: {
    currentUser: {},
  },

  getters: {
    getCurrentUser: state => state.currentUser
  }
};
