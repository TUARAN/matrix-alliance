<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">联盟中枢</h1>
        <p class="text-gray-600">创作者档案，账号资产，信用体系</p>
      </div>

      <!-- Profile Overview -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <!-- Profile Card -->
        <div class="card">
          <div class="text-center mb-6">
            <div class="w-24 h-24 bg-gradient-to-r from-primary-600 to-matrix-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-3xl font-bold">创</span>
            </div>
            <h2 class="text-xl font-semibold text-gray-900 mb-2">创作者名称</h2>
            <p class="text-gray-600 mb-4">ID: CRE123456</p>
            <div class="flex items-center justify-center space-x-2">
              <span class="badge-matrix">认证创作者</span>
              <span class="badge-primary">VIP</span>
            </div>
          </div>
          
          <div class="space-y-4 border-t border-gray-200 pt-6">
            <div class="flex justify-between">
              <span class="text-gray-600">信用分</span>
              <span class="font-bold text-gray-900">95分</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">总任务数</span>
              <span class="font-bold text-gray-900">128</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">通过率</span>
              <span class="font-bold text-green-600">98%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">部件复用</span>
              <span class="font-bold text-gray-900">256次</span>
            </div>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="lg:col-span-2 space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="card">
              <div class="text-sm text-gray-600 mb-2">本月收益</div>
              <div class="text-2xl font-bold text-gray-900">¥12,580</div>
              <div class="text-sm text-green-600 mt-2">+23.5% ↗</div>
            </div>
            <div class="card">
              <div class="text-sm text-gray-600 mb-2">部件库存</div>
              <div class="text-2xl font-bold text-gray-900">156</div>
              <div class="text-sm text-gray-500 mt-2">可售部件</div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="card">
              <div class="text-sm text-gray-600 mb-2">评级</div>
              <div class="text-2xl font-bold text-gray-900">S级</div>
              <div class="text-sm text-gray-500 mt-2">顶级创作者</div>
            </div>
            <div class="card">
              <div class="text-sm text-gray-600 mb-2">争议率</div>
              <div class="text-2xl font-bold text-green-600">1.2%</div>
              <div class="text-sm text-gray-500 mt-2">低于行业平均</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Account Assets -->
      <div class="card mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold text-gray-900">账号资产</h2>
          <button class="btn-primary">绑定账号</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="account in accounts" :key="account.id" class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <span class="text-sm font-medium">{{ account.platform.charAt(0) }}</span>
                </div>
                <div>
                  <div class="font-medium text-gray-900">{{ account.platform }}</div>
                  <div class="text-sm text-gray-500">{{ account.handle }}</div>
                </div>
              </div>
              <span :class="account.status === '正常' ? 'badge-matrix' : 'badge-gray'">
                {{ account.status }}
              </span>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">粉丝数</span>
                <span class="text-gray-900 font-medium">{{ account.followers }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">账号权重</span>
                <span class="text-gray-900 font-medium">{{ account.weight }}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">健康度</span>
                <span class="text-green-600 font-medium">{{ account.health }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Assets -->
      <div class="card mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold text-gray-900">内容部件目录</h2>
          <button class="btn-primary">上传部件</button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">部件名称</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">主题</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">复用次数</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">收入</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="asset in contentAssets" :key="asset.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ asset.name }}</div>
                  <div class="text-sm text-gray-500">{{ asset.description }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="badge-gray">{{ asset.type }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ asset.topic }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ asset.reuseCount }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">¥{{ asset.revenue }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="asset.status === '上架' ? 'badge-matrix' : 'badge-gray'">
                    {{ asset.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button class="text-primary-600 hover:text-primary-900 mr-4">编辑</button>
                  <button class="text-red-600 hover:text-red-900">下架</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Compliance & Agreements -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">资质证明</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-gray-900">身份认证</div>
                  <div class="text-sm text-gray-500">已认证</div>
                </div>
              </div>
            </div>
            
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-gray-900">原创认证</div>
                  <div class="text-sm text-gray-500">已认证</div>
                </div>
              </div>
            </div>
            
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-gray-900">版权认证</div>
                  <div class="text-sm text-gray-500">审核中</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">协议与合规</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <div class="font-medium text-gray-900 mb-1">创作者服务协议</div>
                <div class="text-sm text-gray-500">已签署 · 2024-01-01</div>
              </div>
              <button class="text-primary-600 hover:text-primary-700 text-sm">查看</button>
            </div>
            
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <div class="font-medium text-gray-900 mb-1">内容授权协议</div>
                <div class="text-sm text-gray-500">已签署 · 2024-01-01</div>
              </div>
              <button class="text-primary-600 hover:text-primary-700 text-sm">查看</button>
            </div>
            
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <div class="font-medium text-gray-900 mb-1">隐私保护协议</div>
                <div class="text-sm text-gray-500">已签署 · 2024-01-01</div>
              </div>
              <button class="text-primary-600 hover:text-primary-700 text-sm">查看</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const accounts = ref([
  {
    id: 1,
    platform: '微信公众号',
    handle: '科技前沿观察',
    followers: '12.5K',
    weight: 85,
    health: 95,
    status: '正常'
  },
  {
    id: 2,
    platform: '知乎',
    handle: 'AI技术专家',
    followers: '8.3K',
    weight: 92,
    health: 98,
    status: '正常'
  },
  {
    id: 3,
    platform: '掘金',
    handle: '前端开发',
    followers: '5.2K',
    weight: 78,
    health: 88,
    status: '正常'
  }
])

const contentAssets = ref([
  {
    id: 1,
    name: 'AI工具测评标题',
    description: '吸引眼球的科技类标题模板',
    type: '标题',
    topic: '科技/AI',
    reuseCount: 45,
    revenue: 360,
    status: '上架'
  },
  {
    id: 2,
    name: '产品对比导语',
    description: '产品测评类文章开篇导语',
    type: '导语',
    topic: '产品/测评',
    reuseCount: 32,
    revenue: 192,
    status: '上架'
  },
  {
    id: 3,
    name: '数据可视化图表',
    description: '性能对比数据图表模板',
    type: '图表',
    topic: '数据分析',
    reuseCount: 18,
    revenue: 270,
    status: '上架'
  },
  {
    id: 4,
    name: '技术教程结论段',
    description: '编程教程类文章结尾总结',
    type: '结论',
    topic: '技术/编程',
    reuseCount: 28,
    revenue: 168,
    status: '上架'
  }
])
</script>



