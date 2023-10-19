<template>
  <div>
    <div class="vm--modal-headers">AUTH COMPONENT</div>
    <div class="vm--modal-content">
      <NgTodoListErrorForm
        v-if="error.length" :list-items="error"
      ></NgTodoListErrorForm>
      <ValidationObserver
        ref="observer" tag="form"
      >
        <b-row class="bv-example-row">
          <b-col cols="12" class="mb-4">
            <h6 class="caption caption--fs_sm">
              Enter an alphabetic value for the
              <strong class="c--red-2">username</strong>
              field (at least three letters) and numbers
              and a symbol for
              <strong class="c--red-2">phone</strong>.
            </h6>
          </b-col>
          <b-col cols="12" class="mb-4">
            <NgTodoListInputControl
              v-model="formData.username"
              rules="required|min:3"
              label="Username"
              name="username"
              type="text"
            ></NgTodoListInputControl>
          </b-col>
          <b-col cols="12">
            <NgTodoListInputControl
              v-model="formData.phone"
              rules="required"
              label="Phone"
              name="phone"
              type="text"
            ></NgTodoListInputControl>
          </b-col>
        </b-row>
      </ValidationObserver>
    </div>
    <div class="vm--modal-actions">
      <NgTodoListButtonControl
        class="button button--style_darks"
        @event="validateBeforeSubmit(formData)"
      >LOGIN</NgTodoListButtonControl>
    </div>
  </div>
</template>

<script lang="js">
  import { getUsersListAPI } from "../../../request/services/users";
  import { mapActions } from "vuex";
  import FormMixin from "../form-mixin";

  export default {
    name: "NgTodoListAuthForm",

    mixins: [ FormMixin ],

    data() {
      return {
        formData: {
          username: null,
          phone: null
        },

        error: [],
      };
    },

    methods: {
      request(data) {
        getUsersListAPI().then(response => {
          const user = response.find(user =>
            user.username === data.username && user.phone === data.phone
          );

          if (user) {
            sessionStorage.setItem("user", JSON.stringify(user));
            this.setCurrentUser(user);

            this.$router.push("/cabinet/profile-page");
            this.$emit("close"); // {emit} close modal.
          } else {
            this.error.push("User not found.");
          }
        });
      },
      ...mapActions("users", ["setCurrentUser"])
    },
  };
</script>
