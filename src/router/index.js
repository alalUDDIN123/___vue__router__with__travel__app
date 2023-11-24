import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import destinationShow from '../views/destinationShow.vue'
import ExperienceDetails from "../views/ExperienceDetails.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination-details',
      component: destinationShow,
      props: route => ({ id: parseInt(route.params.id) }),
      children: [
        {
          path: ":experienceSlug",
          name: "ExperienceDetails",
          component: ExperienceDetails,
          props: route => ({ ...route.params, id: parseInt(route.params.id) }),
        }
      ]
    },
    {
      path: "/user",
      name: "User",
      component: () => import("../views/User.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/invoices",
      name: "Invoices",
      component: () => import("../views/Invoices.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
  ],

})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "Login", query: { redirect: to.fullPath } };
  }
});


export default router
