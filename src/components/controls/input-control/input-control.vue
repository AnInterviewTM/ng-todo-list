<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules">
    <div class="input-control">
      <div class="input-control__field">
        <input
          class="input-control__input"
          v-model="formData.input" :name="name" :type="type"
        />
      </div>
      <div class="input-control__label" v-if="label">{{ label }}</div>
      <div class="input-control__error" v-if="errors.length > 0">{{ errors[0] }}</div>
    </div>
  </ValidationProvider>
</template>

<script>
  export default {
    name: "NgTodoListInputControl",

    props: {
      rules: {
        required: false,
        type: [String, Array],
      },
      label: {
        required: false,
        type: String,
      },
      name: {
        required: false,
        type: String,
      },
      type: {
        required: false,
        type: String,
      },
      value: {
        required: true,
      },
    },

    data() {
      return {
        formData: {
          input: this.value
        }
      };
    },

    watch: {
      "formData.input"(newValue) {
        this.$emit('input', newValue);
      },

      value(newValue) {
        this.formData.input = newValue;
      },
    },
  };
</script>

<style lang="scss">
  @import "./input-control";
</style>