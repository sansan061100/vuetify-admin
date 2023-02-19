import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '../views/ChartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/charts',
    name: 'chart',
    component: ChartView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
