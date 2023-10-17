<template>
  <div>
    <div class="vm--modal-headers">AUTH COMPONENT</div>
    <div class="vm--modal-content">
      <ValidationObserver
        ref="observer" tag="form"
      >
        <b-row>
          <b-col cols="12">
            <NgTodoListInputControl
              v-model="formData.username"
              rules="required|min:3"
              name="username"
              type="text"
            ></NgTodoListInputControl>
          </b-col>
          <b-col cols="12">
            <NgTodoListInputControl
              v-model="formData.password"
              rules="required"
              name="password"
              type="password"
            ></NgTodoListInputControl>
          </b-col>
        </b-row>
      </ValidationObserver>
    </div>
    <div class="vm--modal-actions">
      <NgTodoListButtonControl
        class="button button--style_green"
        @event="validateBeforeSubmit(formData)"
      >LOGIN</NgTodoListButtonControl>
    </div>
  </div>
</template>

<script lang="js">
  import FormMixin from "../form-mixin";

  export default {
    name: "NgTodoListAuthForm",

    mixins: [ FormMixin ],

    data() {
      return {
        formData: {
          username: null,
          password: null
        }
      };
    },

    methods: {
      request(data) {
        console.log("SEND", data);
      }
    }
  };
</script>

<style lang="scss">
  @import "auth-form.scss";
</style>
