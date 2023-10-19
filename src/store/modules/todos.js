import { getTodosListAPI } from "../../request/services/todos";

export const todosModule = {
  namespaced: true,

  actions: {
    getTodosListAPI({ commit }) {
      getTodosListAPI().then(response => {
        commit("setTodosList", response);
      });
    }
  },

  mutations: {
    setTodosList: (state, response) => {
      state.todosList = response;
    }
  },

  state: {
    todosList: [],
  },

  getters: {
    getTodosList: state => state.todosList
  }
};
