<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules">
    <input v-model="model" :name="name" :type="type" />
    <div>{{ errors[0] }}</div>
  </ValidationProvider>
</template>

<script>
  export default {
    name: "NgTodoListInputControl",

    props: {
      rules: {
        required: false,
        type: String
      },
      name: {
        required: false,
        type: String
      },
      type: {
        required: false,
        type: String
      },
      value: {}
    },

    data() {
      return {
        input: null
      };
    },

    watch: {
      value: {
        immediate: true,
        deep: true,
        handler() {
          this.input = this.value;
        }
      }
    },

    computed: {
      model: {
        get() {
          return this.input
        },
        set(e) {
          this.input = e
        },
      },
    },
  };
</script>
