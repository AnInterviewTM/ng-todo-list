<template>
  <div>
    <div class="todos-filt p-4">
      <b-row>
        <b-col cols="12" md="4" class="mb-2 mt-2">
          <h6 class="caption caption--fs_md mb-3">BY TITLE:</h6>
          <NgTodoListInputControl
            v-model="title"
            name="title"
            type="text"
          ></NgTodoListInputControl>
        </b-col>
        <b-col cols="12" md="4" class="mb-2 mt-2">
          <h6 class="caption caption--fs_md mb-3">FILTER:</h6>
          <b-form-select
            v-model="filter.selected"
            :options="filter.list"
          ></b-form-select>
        </b-col>
        <b-col cols="12" md="4" class="mb-2 mt-2">
          <h6 class="caption caption--fs_md mb-3">BY USER_ID:</h6>
          <b-form-select
            v-model="userId.selected"
            :options="userId.list"
          ></b-form-select>
        </b-col>
      </b-row>
    </div>
    <b-row class="todos-info">
      <b-col cols="12">
        <h4 class="todos-info__caption mt-3">{{ getStatusText }}</h4>
        <div class="todos-info__container p-4 mt-3">
          <div v-if="filteredByFavorite.length === 0">
            <h6 class="caption caption--size_sm">NO ANY ITEM BY FILTER</h6>
          </div>
          <NgTodoListTodosCard
            v-for="todo in filteredByFavorite"
            :key="todo.id"
            :objectItem="todo"
            @favorite-updated="updateFavorite"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { LIST_ENUM } from "../../../../utils/filters";

  export default {
    name: "NgTodosListTodoInfo",
    props: {
      objectList: {
        default: () => [],
        type: Array
      }
    },
    data() {
      return {
        filter: {
          selected: 0,
          list: []
        },
        userId: {
          selected: 0,
          list: []
        },
        favorites: [],
        title: null
      };
    },
    created() {
      this.setfavoritesList();
      this.setStarusIdOption();
      this.setUserIdOption();
    },
    computed: {
      filteredByFavorite() {
        if (this.filter.selected === 3)
          return this.filteredTodos.filter(todo => this.isFavoriteSelected(todo));
        return this.filteredTodos;
      },
      getStatusText() {
        return (
          Object.values(LIST_ENUM).find(
            status => status.value === this.filter.selected
          ).text?.text || "UNKNOWN"
        );
      },
      filteredTodos() {
        return this.objectList.filter(this.filterTodo);
      }
    },
    methods: {
      filterTodo(todo) {
        const isSelectedUser = this.isUserIdSelected(todo.userId);
        const isTitleMatch = this.isTitleMatch(todo.title);

        if (this.filter.selected === LIST_ENUM.UNCOMPLETED.value)
          return isSelectedUser && isTitleMatch && !todo.completed;
        if (this.filter.selected === LIST_ENUM.COMPLETED.value)
          return isSelectedUser && isTitleMatch && todo.completed;
        if (this.filter.selected === LIST_ENUM.FAVORITE.value)
          return isSelectedUser && isTitleMatch && this.isFavoriteSelected(todo);

        return isSelectedUser && isTitleMatch;
      },
      setUserIdOption() {
        const userIds = [...new Set(this.objectList.map(todo => todo.userId))];
        this.userId.list = [
          { value: 0, text: "ALL_USERS" },
          ...userIds.map(userId => ({
            value: userId,
            text: `USER_ID: ${userId}`
          }))
        ];
      },
      setStarusIdOption() {
        this.filter.list = Object.values(LIST_ENUM).map(status => status);
      },
      isUserIdSelected(selectedUserId) {
        return (
          this.userId.selected === 0 || this.userId.selected === selectedUserId
        );
      },
      isTitleMatch(title) {
        return (
          !this.title || title.toLowerCase().includes(this.title.toLowerCase())
        );
      },
      updateFavorite() {
        this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      },
      setfavoritesList() {
        const favorites = localStorage.getItem("favorites");
        this.favorites = favorites ? JSON.parse(favorites) : [];
      },
      isFavoriteSelected(todo) {
        return this.favorites.some(fav => fav.id === todo.id);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./todos-info";
</style>
