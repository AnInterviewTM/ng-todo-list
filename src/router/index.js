import { COMMON_ROUTER } from "./commons";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [...COMMON_ROUTER],
  base: process.env.BASE_URL
});

export default router;
