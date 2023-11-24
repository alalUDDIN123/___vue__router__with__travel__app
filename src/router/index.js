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
  ]
})

export default router
