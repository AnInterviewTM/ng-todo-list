import { ROUTERS } from "./commons";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [...ROUTERS],
  base: process.env.BASE_URL
});

export default router;
