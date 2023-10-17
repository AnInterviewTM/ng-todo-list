import { getUsersAPI } from "../../request/services/users";

export const usersModule = {
  namespaced: true,

  actions: {
    async getUsersAPI({ commit }) {
      return getUsersAPI()
        .then(responce => {
          commit("setUsers", responce);
        })
    }
  },

  mutations: {
    setUsers: (state, response) => {
      state.users = response;
    }
  },

  state: { users: [] },

  getters: {
    getUsers: state => state.users
  }
};
