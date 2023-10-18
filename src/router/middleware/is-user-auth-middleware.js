import stores from "../../store/index";
import router from "../index";

router.beforeEach((to, from, next) => {
  const currentUser = stores.getters["users/getCurrentUser"];

  if (
    (to.matched.some(record => record.meta.requiresAuth) && !currentUser) ||
    (Object.keys(currentUser).length === 0 && to.name !== "home-page")
  ) {
    next({ name: "home-page" });
  } else {
    next();
  }
});
