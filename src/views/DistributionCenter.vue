<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-12 h-12 bg-gradient-to-r from-primary-600 to-matrix-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-900">分发中心</h1>
            <p class="text-gray-600 mt-1">多平台矩阵，智能编排，数据追踪</p>
          </div>
        </div>
      </div>

      <!-- Matrix Strategy Highlight -->
      <div class="card mb-8 bg-gradient-to-r from-primary-50 via-matrix-50 to-green-50 border-2 border-primary-200">
        <div class="text-center mb-6">
          <div class="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            💡 多号矩阵策略
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">
            1套内容 = N份收益机会
          </h2>
          <p class="text-lg text-gray-700 mb-2">
            垂直领域账号 × 多平台分发 = 无限收益可能
          </p>
          <p class="text-sm text-gray-600">
            不限于平台数量，每个垂直号都可以在多个平台分发，形成1对N的关系
          </p>
        </div>

        <!-- 矩阵逻辑说明 -->
        <div class="bg-white rounded-lg p-6 mb-6 border-2 border-primary-300">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="text-3xl font-bold text-primary-600 mb-2">垂直领域</div>
              <div class="text-sm text-gray-600 mb-4">一个垂直领域一个账号</div>
              <div class="text-xs text-gray-500">
                科技、生活、财经、教育...<br>每个人可以建立多个垂直号
              </div>
            </div>
            <div>
              <div class="text-3xl font-bold text-primary-600 mb-2">×</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-primary-600 mb-2">多平台</div>
              <div class="text-sm text-gray-600 mb-4">每个垂直号可在多个平台分发</div>
              <div class="text-xs text-gray-500">
                掘金、CSDN、知乎、公众号<br>小红书、B站、抖音、X...<br>不限于平台数量
              </div>
            </div>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-200 text-center">
            <div class="text-4xl font-bold text-green-600 mb-2">= N份收益</div>
            <div class="text-sm text-gray-600">1套内容 → N个平台 → 收益倍数放大</div>
          </div>
        </div>

        <!-- Platform Grid (示例) -->
        <div class="mb-6">
          <p class="text-sm font-medium text-gray-700 mb-4">支持平台（示例，不限于此）：</p>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div v-for="(platform, index) in platformList" :key="platform.name" 
                 class="bg-white rounded-lg p-4 text-center border-2 border-gray-200 hover:border-primary-400 transition-all hover:shadow-lg hover:scale-105">
              <div class="text-3xl mb-2">{{ platform.icon }}</div>
              <div class="font-semibold text-gray-900 mb-1 text-sm">{{ platform.name }}</div>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-4 text-center">+ 更多平台持续接入中...</p>
        </div>

        <!-- Strategy Tips -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg p-4 border border-gray-200">
            <div class="text-2xl mb-2">🎯</div>
            <div class="font-semibold text-gray-900 mb-1">垂直领域账号</div>
            <div class="text-sm text-gray-600">一个垂直领域一个账号，专注特定主题，每个人可以建立多个垂直号</div>
          </div>
          <div class="bg-white rounded-lg p-4 border border-gray-200">
            <div class="text-2xl mb-2">📱</div>
            <div class="font-semibold text-gray-900 mb-1">1对N平台分发</div>
            <div class="text-sm text-gray-600">每个垂直号可以在多个平台分发，不限于平台数量</div>
          </div>
          <div class="bg-white rounded-lg p-4 border border-gray-200">
            <div class="text-2xl mb-2">⚡</div>
            <div class="font-semibold text-gray-900 mb-1">矩阵效应放大</div>
            <div class="text-sm text-gray-600">多垂直号 × 多平台 = 矩阵效应，收益倍数放大</div>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card text-center">
          <div class="text-2xl font-bold text-primary-600 mb-2">24</div>
          <div class="text-gray-600">绑定账号</div>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold text-matrix-600 mb-2">156</div>
          <div class="text-gray-600">本月分发</div>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold text-gray-600 mb-2">2.3M</div>
          <div class="text-gray-600">总曝光量</div>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold text-green-600 mb-2">95%</div>
          <div class="text-gray-600">成功率</div>
        </div>
      </div>

      <!-- Account Pool -->
      <div class="card mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold text-gray-900">账号池管理</h2>
          <button class="btn-primary">添加账号</button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">平台</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">账号</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">权重</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="account in accounts" :key="account.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <span class="text-sm font-medium">{{ account.platform.charAt(0) }}</span>
                    </div>
                    {{ account.platform }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ account.handle }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div class="bg-primary-600 h-2 rounded-full" :style="{width: account.weight + '%'}"></div>
                    </div>
                    <span class="text-sm text-gray-600">{{ account.weight }}%</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="account.status === '正常' ? 'badge-matrix' : 'badge-gray'">
                    {{ account.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button class="text-primary-600 hover:text-primary-900 mr-4">编辑</button>
                  <button class="text-red-600 hover:text-red-900">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Distribution Plans -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Create Plan -->
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">创建分发计划</h2>
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">选择内容</label>
              <select class="input-field">
                <option>选择要分发的内容...</option>
                <option>科技资讯 - AI工具测评</option>
                <option>产品测评 - 新能源汽车</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">目标平台</label>
              <div class="grid grid-cols-2 gap-2">
                <label v-for="platform in platforms" :key="platform" class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary-600 focus:ring-primary-500">
                  <span class="ml-2 text-sm text-gray-700">{{ platform }}</span>
                </label>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">发布时间</label>
              <input type="datetime-local" class="input-field">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">AB测试</label>
              <div class="flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-primary-600 focus:ring-primary-500">
                <span class="ml-2 text-sm text-gray-700">启用AB测试</span>
              </div>
            </div>
            
            <button class="btn-primary w-full">创建计划</button>
          </form>
        </div>

        <!-- Recent Plans -->
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">最近计划</h2>
          <div class="space-y-4">
            <div v-for="plan in recentPlans" :key="plan.id" class="border border-gray-200 rounded-lg p-4">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-medium text-gray-900">{{ plan.title }}</h3>
                <span :class="plan.status === '进行中' ? 'badge-matrix' : 'badge-gray'">
                  {{ plan.status }}
                </span>
              </div>
              <p class="text-sm text-gray-600 mb-2">{{ plan.platforms }}</p>
              <div class="flex justify-between items-center text-sm text-gray-500">
                <span>{{ plan.schedule }}</span>
                <span>{{ plan.views }} 次浏览</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const platforms = ['微信公众号', '知乎', '掘金', 'CSDN', '小红书', 'B站', '抖音']

const platformList = ref([
  { name: '掘金', icon: '📝', followers: '5.2K', revenue: 600 },
  { name: 'CSDN', icon: '💻', followers: '3.8K', revenue: 500 },
  { name: '小红书', icon: '📕', followers: '15.6K', revenue: 1000 },
  { name: '知乎', icon: '❓', followers: '8.3K', revenue: 1200 },
  { name: '头条', icon: '📰', followers: '12.5K', revenue: 800 },
  { name: 'B站', icon: '🎬', followers: '6.7K', revenue: 900 },
  { name: 'X', icon: '🐦', followers: '4.9K', revenue: 700 },
  { name: '抖音', icon: '🎵', followers: '10.1K', revenue: 1100 },
  { name: '快手', icon: '⚡', followers: '7.3K', revenue: 850 }
])

const accounts = ref([
  {
    id: 1,
    platform: '微信公众号',
    handle: '科技前沿观察',
    weight: 85,
    status: '正常'
  },
  {
    id: 2,
    platform: '知乎',
    handle: 'AI技术专家',
    weight: 92,
    status: '正常'
  },
  {
    id: 3,
    platform: '掘金',
    handle: '前端开发',
    weight: 78,
    status: '正常'
  },
  {
    id: 4,
    platform: 'CSDN',
    handle: '技术博客',
    weight: 65,
    status: '限流'
  }
])

const recentPlans = ref([
  {
    id: 1,
    title: 'AI工具测评文章',
    platforms: '微信公众号, 知乎, 掘金',
    schedule: '2024-01-15 10:00',
    status: '进行中',
    views: 1250
  },
  {
    id: 2,
    title: '新能源汽车深度测评',
    platforms: 'CSDN, 小红书',
    schedule: '2024-01-14 15:30',
    status: '已完成',
    views: 890
  },
  {
    id: 3,
    title: '区块链技术报告',
    platforms: '知乎, 掘金, B站',
    schedule: '2024-01-13 09:00',
    status: '已完成',
    views: 2100
  }
])
</script>



