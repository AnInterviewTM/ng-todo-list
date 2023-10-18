<template>
  <div>
    <div class="todos-filt p-4">
      <b-row>
        <b-col cols="12" md="4" class="mb-2 mt-2">
          <h6 class="caption caption--fs_md mb-3">BY TITLE:</h6>
          <NgTodoListInputControl v-model="title" name="title" type="text"></NgTodoListInputControl>
        </b-col>
        <b-col cols="12" md="4" class="mb-2 mt-2">
          <h6 class="caption caption--fs_md mb-3">FILTER:</h6>
          <b-form-select v-model="filter.selected" :options="filter.list"></b-form-select>
        </b-col>
        <b-col cols="12" md="4" class="mb-2 mt-2">
          <h6 class="caption caption--fs_md mb-3">BY USER_ID:</h6>
          <b-form-select v-model="userId.selected" :options="userId.list"></b-form-select>
        </b-col>
      </b-row>
    </div>
    <b-row class="todos-info">
      <b-col cols="12" v-if="showCols">
        <h4 class="todos-info__caption mt-3">{{ getStatusText() }}</h4>
        <div class="todos-info__container p-4 mt-3">
          <div v-if="filteredTodos.length === 0">
            <h6 class="caption caption--size_sm">NO ANY ITEM BY FILTER</h6>
          </div>
          <NgTodoListTodosCard v-for="todo in filteredTodos" :key="todo.id" :object-item="todo"></NgTodoListTodosCard>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "NgTodosListTodoInfo",
    props: {
      objectList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      const userIds = [...new Set(this.objectList.map(todo => todo.userId))];
      const favoriteData = localStorage.getItem("favorites");
      const favorites = favoriteData ? JSON.parse(favoriteData) : [];

      return {
        filter: {
          selected: 0,
          list: [
            { value: 0, text: "ALL_STATUS" },
            { value: 1, text: "UNCOMPLETED" },
            { value: 2, text: "COMPLETED" },
            { value: 3, text: "FAVORITE" }
          ]
        },
        userId: {
          selected: 0,
          list: [
            { value: 0, text: "ALL_USERS" },
            ...userIds.map(userId => ({
              value: userId,
              text: `USER_ID: ${userId}`
            }))
          ],
        },
        title: null,
        favorites: favorites
      };
    },
    computed: {
      filteredTodos() {
        return this.objectList.filter(this.filterTodo);
      },
      showCols() {
        return [0, 1, 2, 3].includes(this.filter.selected);
      }
    },
    methods: {
      filterTodo(todo) {
        const isSelectedUser = this.isUserIdSelected(todo.userId);
        const isTitleMatch = this.isTitleMatch(todo.title);

        if (this.filter.selected === 1) return isSelectedUser && isTitleMatch && !todo.completed;
        if (this.filter.selected === 2) return isSelectedUser && isTitleMatch && todo.completed;
        if (this.filter.selected === 3) return isSelectedUser && isTitleMatch && this.isFavoriteSelected(todo);

        return isSelectedUser && isTitleMatch;
      },
      getStatusText() {
        const statusTexts = ["ALL_STATUS", "UNCOMPLETED", "COMPLETED", "FAVORITE"];
        return statusTexts[this.filter.selected];
      },
      isUserIdSelected(selectedUserId) {
        return this.userId.selected === 0 || this.userId.selected === selectedUserId;
      },
      isTitleMatch(title) {
        return !this.title || title.toLowerCase().includes(this.title.toLowerCase());
      },
      isFavoriteSelected(todo) {
        return this.favorites.some(fav => fav.id === todo.id);
      },
    }
  };
</script>

<style lang="scss">
  @import "./todos-info";
</style>
