import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Brazil from "../views/Brazil";
import Hawaii from "../views/Hawaii";
import Panama from "../views/Panama";
import Jamaica from "../views/Jamaica";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: Brazil,
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: Hawaii,
  },
  {
    path: "/panama",
    name: "panama",
    component: Panama,
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: Jamaica,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
