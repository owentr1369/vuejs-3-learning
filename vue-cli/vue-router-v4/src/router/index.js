import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/transactions",
    name: "transactions",
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "../views/TransactionView.vue"
      ),
  },
  {
    path: "/transactions/:id",
    name: "transactions-details",
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "../views/TransactionDetails.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
