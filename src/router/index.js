import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Home from '../views/Home.vue'
import TaskMarket from '../views/TaskMarket.vue'
import ClaimTasks from '../views/ClaimTasks.vue'
import PublishTasks from '../views/PublishTasks.vue'
import ContentFactory from '../views/ContentFactory.vue'
import DistributionCenter from '../views/DistributionCenter.vue'
import Analytics from '../views/Analytics.vue'
import Wallet from '../views/Wallet.vue'
import AllianceCore from '../views/AllianceCore.vue'
import GrowthEngine from '../views/GrowthEngine.vue'
import Workshop from '../views/Workshop.vue'
import BrandCooperation from '../views/BrandCooperation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'TaskMarket',
    component: TaskMarket
  },
  {
    path: '/tasks/claim',
    name: 'ClaimTasks',
    component: ClaimTasks,
    meta: { requiresAuth: true }
  },
  {
    path: '/tasks/publish',
    name: 'PublishTasks',
    component: PublishTasks
  },
  {
    path: '/content',
    name: 'ContentFactory',
    component: ContentFactory
  },
  {
    path: '/distribution',
    name: 'DistributionCenter',
    component: DistributionCenter
  },
  {
    path: '/growth-engine',
    name: 'GrowthEngine',
    component: GrowthEngine,
    meta: { requiresAuth: true }
  },
  {
    path: '/workshop',
    name: 'Workshop',
    component: Workshop
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics,
    meta: { requiresAuth: true }
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    meta: { requiresAuth: true }
  },
  {
    path: '/alliance',
    name: 'AllianceCore',
    component: AllianceCore,
    meta: { requiresAuth: true }
  },
  {
    path: '/brand',
    name: 'BrandCooperation',
    component: BrandCooperation
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global auth guard for protected routes
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  // initialize auth from localStorage once
  if (!auth.isAuthenticated) {
    auth.init()
  }
  if (to.meta && to.meta.requiresAuth && !auth.isAuthenticated) {
    // redirect to home and optionally show login prompt via query
    return next({ path: '/', query: { login: '1' } })
  }
  next()
})

export default router



