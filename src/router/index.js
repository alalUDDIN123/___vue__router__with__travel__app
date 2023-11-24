import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import destinationShow from '../views/destinationShow.vue'


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
      component: destinationShow
    },
  ]
})

export default router
