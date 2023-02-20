import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '../views/ChartView.vue'
// import AppLayoutDefault from '@/components/layouts/AppLayoutDefault.vue'
import AppAdminLayout from '@/components/layouts/AppAdminLayout.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: AppAdminLayout
    }
  },
  {
    path: '/charts',
    name: 'chart',
    component: ChartView,
    meta: {
      layout: AppAdminLayout
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
