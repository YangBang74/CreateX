import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue'),
    },
    {
      path: '/case-studios',
      name: 'Case-studios',
      component: () => import('../views/CaseStudios.vue'),
    },
    {
      path: '/about-us',
      name: 'About us',
      component: () => import('../views/About.vue'),
    },
  ],
})

export default router
