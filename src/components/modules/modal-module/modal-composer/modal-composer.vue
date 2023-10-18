<script>
  export default {
    name: "NgTodoListModalComposer",

    props: {
      componentName: {
        default: "NgTodoListEmpty",
        required: false,
        type: String
      }
    },

    render() {
      return this.$scopedSlots.default({
        handler: this.toggleModalHandler
      });
    },

    methods: {
      toggleModalHandler() {
        this.$modal.show(() => import("../modal-composer/sample-modal.vue"), {
          component: this.componentName
        });
      }
    }
  };
</script>
