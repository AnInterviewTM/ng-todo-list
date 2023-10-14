export const COMMON_ROUTER = [
  {
    component: () => import("../pages/home-page/home-page.vue"),
    path: "/",
    name: "home-page",
    text: "HOME",
    role: ["user"],
    icon: null
  },
  {
    component: () => import("../pages/news-page/news-page.vue"),
    path: "/news-page",
    name: "news-page",
    text: "NEWS",
    role: ["user"],
    icon: null
  }
];
