import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Brazil from '../views/Brazil.vue'
import Hawaii from '../views/Hawaii.vue'
import HomeView from '../views/Home.vue'
import Jamaica from '../views/Jamaica.vue'
import Panama from '../views/Panama.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/brazil',
      name: 'brazil',
      component: Brazil
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: Hawaii
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: Jamaica
    },
    {
      path: '/panama',
      name: 'panama',
      component: Panama
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import("../views/Dashboard.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/login.vue")
    },
  ]
})

// Navigation guard to check if the user is authenticated before navigating to a route
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    if (!isAuthenticated()) {
      // Redirect to the login page if not authenticated
      next('/login');
    } else {
      // Continue to the requested route if authenticated
      next();
    }
  } else {
    // Continue to the requested route
    next();
  }
});

export default router

function isAuthenticated() {
  // Check if the user has a valid authentication token
  const authToken = localStorage.getItem('authToken'); // Assuming you store the token in localStorage

  // Return true if the token is present and valid; otherwise, return false
  return authToken !== null && authToken !== undefined;
}
