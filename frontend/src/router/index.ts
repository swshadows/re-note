import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/notes",
    name: "notes",
    component: () => import("@/views/NoteView.vue"),
  },
  {
    path: "/create",
    name: "create",
    component: () => import("@/views/CreateView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
