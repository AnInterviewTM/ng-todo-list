<template>
  <div>
    <div class="vm--modal-headers">CREATE TODO LIST</div>
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
              Enter an numbers value for the
              <strong class="c--red-2">userID</strong>
              field (at least three letters) and numbers
              and a symbol for
              <strong class="c--red-2">title</strong>.
            </h6>
          </b-col>
          <b-col cols="12" class="mb-4">
            <NgTodoListInputControl
              v-model="formData.userID"
              rules="required|min:1|numeric"
              label="UserID"
              name="UserId"
              type="text"
            ></NgTodoListInputControl>
          </b-col>
          <b-col cols="12">
            <NgTodoListInputControl
              v-model="formData.title"
              rules="required"
              label="Title"
              name="title"
              type="text"
            ></NgTodoListInputControl>
          </b-col>
        </b-row>
      </ValidationObserver>
    </div>
    <div class="vm--modal-actions">
      <NgTodoListButtonControl
        class="button button--style_green"
        @event="validateBeforeSubmit(formData)"
      >CREATE</NgTodoListButtonControl>
    </div>
  </div>
</template>

<script lang="js">
  import FormMixin from "../form-mixin";

  export default {
    name: "NgTodoListTodoForm",

    mixins: [ FormMixin ],

    data() {
      return {
        formData: {
          userID: null,
          title: null
        },

        error: [],
      };
    },

    methods: {
      request(data) {
        console.log("TODO DATA:", data);
        this.$emit("close");
      },
    },
  };
</script>
