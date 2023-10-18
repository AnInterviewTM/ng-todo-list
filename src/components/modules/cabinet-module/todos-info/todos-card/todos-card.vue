<template>
  <b-col cols="12" class="mt-2">
    <div class="todos-card">
      <b-row>
        <b-col cols="12">
          <b-row align-h="between" align-v="center">
            <b-col>
              <h6 class="caption caption--fs_sm">
                <strong>ID: {{ objectItem.id }} USER_ID: {{ objectItem.userId }}</strong>
              </h6>
            </b-col>
            <b-col cols="auto">
              <div @click.prevent="toggleFavorite" class="pointer">
                <b-icon :icon="favoriteIcon"></b-icon>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12 mt-2">
          <p class="caption">{{ objectItem.title }}</p>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>

<script>
  export default {
    name: "NgTodoListTodosCard",

    props: {
      objectItem: {
        required: false,
        type: Object
      }
    },

    data() {
      return {
        isObjectItemFavorite: false
      };
    },

    mounted() {
      this.isObjectItemFavorite = this.isFavorite(this.objectItem);
    },

    computed: {
      favoriteIcon() {
        return this.isObjectItemFavorite ? "star-fill" : "star";
      }
    },

    methods: {
      toggleFavorite() {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const index = favorites.findIndex(fav => fav.id === this.objectItem.id);

        if (index !== -1) {
          favorites.splice(index, 1);
          this.isObjectItemFavorite = false;
        } else {
          favorites.push(this.objectItem);
          this.isObjectItemFavorite = true;
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
        this.$emit("favorite-updated");
      },

      isFavorite(item) {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        return favorites.some(fav => fav.id === item.id);
      }
    }
  };
</script>

<style lang="scss">
  @import "./todos-card";
</style>
