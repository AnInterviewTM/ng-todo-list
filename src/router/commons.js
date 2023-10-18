const PROFILE_ROUTER = [
  {
    component: () => import("../pages/cabinet-page/profile-page/profile-page"),
    path: "/cabinet/profile-page",
    name: "profile-page",
    text: "PROFILE PAGE",
    role: ["user"],
    icon: null
  }
];

const COMMON_ROUTER = [
  {
    component: () => import("../pages/home-page/home-page"),
    path: "/",
    name: "home-page",
    text: "HOME",
    role: ["user"],
    icon: null
  },
  {
    component: () => import("../pages/news-page/news-page"),
    path: "/news-page",
    name: "news-page",
    text: "NEWS",
    role: ["user"],
    icon: null
  }
];

export const ROUTERS = [
  ...PROFILE_ROUTER, ...COMMON_ROUTER
];

export const MENU = [...COMMON_ROUTER];
