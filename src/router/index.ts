import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },    
    {
      path: '/createPost',
      name: 'createPost',
      component: () => import('../views/CreatePostView.vue')
    },        
  ]
})

export default router
