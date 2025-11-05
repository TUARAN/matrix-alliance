<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">数据分析</h1>
        <p class="text-gray-600">全链路归因，ROI分析，智能洞察</p>
      </div>

      <!-- Date Range Selector -->
      <div class="card mb-8">
        <div class="flex items-center space-x-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">时间范围</label>
            <select class="input-field">
              <option>最近7天</option>
              <option>最近30天</option>
              <option>最近90天</option>
              <option>自定义</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">平台筛选</label>
            <select class="input-field">
              <option>全部平台</option>
              <option>微信公众号</option>
              <option>知乎</option>
              <option>掘金</option>
              <option>CSDN</option>
            </select>
          </div>
          <div class="flex items-end">
            <button class="btn-primary">更新数据</button>
          </div>
        </div>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="card">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900">2.3M</div>
              <div class="text-sm text-gray-600">总曝光量</div>
              <div class="text-sm text-green-600">+12.5% ↗</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900">45.2K</div>
              <div class="text-sm text-gray-600">总点赞数</div>
              <div class="text-sm text-green-600">+8.3% ↗</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900">3.8K</div>
              <div class="text-sm text-gray-600">总评论数</div>
              <div class="text-sm text-green-600">+15.2% ↗</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900">156</div>
              <div class="text-sm text-gray-600">分发次数</div>
              <div class="text-sm text-green-600">+22.1% ↗</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- Performance Chart -->
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">性能趋势</h2>
          <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div class="text-center text-gray-500">
              <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p>图表组件</p>
              <p class="text-sm">Chart.js 集成</p>
            </div>
          </div>
        </div>

        <!-- Platform Distribution -->
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">平台分布</h2>
          <div class="space-y-4">
            <div v-for="platform in platformData" :key="platform.name" class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full mr-3" :style="{backgroundColor: platform.color}"></div>
                <span class="text-gray-700">{{ platform.name }}</span>
              </div>
              <div class="flex items-center">
                <div class="w-24 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="h-2 rounded-full" :style="{width: platform.percentage + '%', backgroundColor: platform.color}"></div>
                </div>
                <span class="text-sm text-gray-600">{{ platform.percentage }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Performance Table -->
      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">内容表现排行</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">内容标题</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">平台</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">曝光量</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">互动率</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">复用次数</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="content in contentPerformance" :key="content.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ content.title }}</div>
                  <div class="text-sm text-gray-500">{{ content.date }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="badge-gray">{{ content.platform }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ content.views.toLocaleString() }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ content.engagement }}%</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ content.roi }}%</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ content.reuse }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const platformData = ref([
  { name: '微信公众号', percentage: 35, color: '#3B82F6' },
  { name: '知乎', percentage: 28, color: '#10B981' },
  { name: '掘金', percentage: 20, color: '#F59E0B' },
  { name: 'CSDN', percentage: 12, color: '#EF4444' },
  { name: '其他', percentage: 5, color: '#6B7280' }
])

const contentPerformance = ref([
  {
    id: 1,
    title: 'AI工具测评：ChatGPT vs Claude',
    platform: '微信公众号',
    date: '2024-01-15',
    views: 125000,
    engagement: 8.5,
    roi: 320,
    reuse: 15
  },
  {
    id: 2,
    title: '新能源汽车深度测评报告',
    platform: '知乎',
    date: '2024-01-14',
    views: 89000,
    engagement: 12.3,
    roi: 280,
    reuse: 8
  },
  {
    id: 3,
    title: '区块链技术发展现状分析',
    platform: '掘金',
    date: '2024-01-13',
    views: 67000,
    engagement: 6.8,
    roi: 195,
    reuse: 12
  },
  {
    id: 4,
    title: '前端开发最佳实践指南',
    platform: 'CSDN',
    date: '2024-01-12',
    views: 45000,
    engagement: 9.2,
    roi: 150,
    reuse: 6
  }
])
</script>



