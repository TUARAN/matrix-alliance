import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskMarket from '../views/TaskMarket.vue'
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
    component: GrowthEngine
  },
  {
    path: '/workshop',
    name: 'Workshop',
    component: Workshop
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/alliance',
    name: 'AllianceCore',
    component: AllianceCore
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

export default router



