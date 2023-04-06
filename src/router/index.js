import { createRouter, createWebHistory } from 'vue-router'
import MyPage from '@/views/MyPage.vue'

const routes = [
  {
    path: '/',
    name: 'MyPage',
    component: MyPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
