<template>
  <NgTodoListCabinetLayout>
    <b-container fluid="sm">
      <section class="section mt-4 mb-4 p-4">
        <NgTodosListTodoInfo
          v-if="getTodosList.length"
          :object-list="getTodosList"
        ></NgTodosListTodoInfo>
      </section>
    </b-container>
  </NgTodoListCabinetLayout>
</template>

<script lang="js">
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "NgTodoListPersonalInfo",

    mounted() {
      this.getTodosListAPI();
    },

    methods: {
      ...mapActions("todos", [
        "getTodosListAPI"
      ])
    },

    computed: {
      ...mapGetters("todos", [
        "getTodosList"
      ])
    },
  };
</script>
