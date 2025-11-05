<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">结算中心</h1>
        <p class="text-gray-600">自动化结算，透明分成，风控保障</p>
      </div>

      <!-- Balance Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="card bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div class="text-sm opacity-90 mb-2">账户余额</div>
          <div class="text-3xl font-bold mb-2">¥12,580.00</div>
          <div class="text-sm opacity-75">可提现金额</div>
        </div>
        
        <div class="card bg-gradient-to-r from-matrix-600 to-matrix-700 text-white">
          <div class="text-sm opacity-90 mb-2">本月收益</div>
          <div class="text-3xl font-bold mb-2">¥8,920.00</div>
          <div class="text-sm opacity-75">+23.5% ↗</div>
        </div>
        
        <div class="card bg-gradient-to-r from-gray-600 to-gray-700 text-white">
          <div class="text-sm opacity-90 mb-2">待结算</div>
          <div class="text-3xl font-bold mb-2">¥3,450.00</div>
          <div class="text-sm opacity-75">3笔待处理</div>
        </div>
      </div>

      <!-- Revenue Breakdown -->
      <div class="card mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">收益构成</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary-600 mb-2">¥6,200</div>
            <div class="text-sm text-gray-600 mb-1">任务费用</div>
            <div class="text-xs text-gray-500">12笔任务</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-matrix-600 mb-2">¥1,880</div>
            <div class="text-sm text-gray-600 mb-1">复用分成</div>
            <div class="text-xs text-gray-500">38次复用</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600 mb-2">¥840</div>
            <div class="text-sm text-gray-600 mb-1">KPI奖金</div>
            <div class="text-xs text-gray-500">超额完成</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-red-600 mb-2">-¥140</div>
            <div class="text-sm text-gray-600 mb-1">风控扣减</div>
            <div class="text-xs text-gray-500">1次违规</div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="card mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">快捷操作</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button class="btn-primary py-4">
            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            申请提现
          </button>
          <button class="btn-secondary py-4">
            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            下载发票
          </button>
          <button class="btn-secondary py-4">
            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            对账记录
          </button>
        </div>
      </div>

      <!-- Settlement History -->
      <div class="card mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold text-gray-900">结算记录</h2>
          <div class="flex space-x-4">
            <select class="input-field text-sm">
              <option>全部状态</option>
              <option>已结算</option>
              <option>待结算</option>
              <option>冻结中</option>
            </select>
            <select class="input-field text-sm">
              <option>全部类型</option>
              <option>任务费用</option>
              <option>复用分成</option>
              <option>KPI奖金</option>
            </select>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">结算时间</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">任务/内容</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金额</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="settlement in settlements" :key="settlement.id">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ settlement.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getTypeBadgeClass(settlement.type)">
                    {{ settlement.type }}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ settlement.task }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">¥{{ settlement.amount }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getStatusBadgeClass(settlement.status)">
                    {{ settlement.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button class="text-primary-600 hover:text-primary-900">详情</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Reuse Earnings -->
      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">复用收益明细</h2>
        <div class="space-y-4">
          <div v-for="reuse in reuseEarnings" :key="reuse.id" class="border border-gray-200 rounded-lg p-4">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-medium text-gray-900">{{ reuse.title }}</h3>
                <p class="text-sm text-gray-500 mt-1">{{ reuse.component }} · {{ reuse.platforms }}</p>
              </div>
              <div class="text-right">
                <div class="text-lg font-bold text-primary-600">¥{{ reuse.earnings }}</div>
                <div class="text-sm text-gray-500">{{ reuse.count }}次复用</div>
              </div>
            </div>
            <div class="flex items-center text-sm text-gray-500">
              <span>单价: ¥{{ reuse.unitPrice }}</span>
              <span class="mx-2">·</span>
              <span>平台分成: {{ reuse.platformCut }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const settlements = ref([
  {
    id: 1,
    date: '2024-01-15 14:30',
    type: '任务费用',
    task: 'AI工具测评文章',
    amount: 800,
    status: '已结算'
  },
  {
    id: 2,
    date: '2024-01-14 10:20',
    type: '复用分成',
    task: '标题库 - 科技资讯',
    amount: 120,
    status: '已结算'
  },
  {
    id: 3,
    date: '2024-01-13 16:45',
    type: 'KPI奖金',
    task: '超额完成月度目标',
    amount: 500,
    status: '已结算'
  },
  {
    id: 4,
    date: '2024-01-12 09:15',
    type: '任务费用',
    task: '新能源汽车深度测评',
    amount: 2000,
    status: '待结算'
  },
  {
    id: 5,
    date: '2024-01-11 11:30',
    type: '复用分成',
    task: '图表库 - 数据可视化',
    amount: 80,
    status: '已结算'
  }
])

const reuseEarnings = ref([
  {
    id: 1,
    title: 'AI工具测评标题',
    component: '标题库',
    platforms: '微信公众号, 知乎, 掘金',
    count: 15,
    unitPrice: 8,
    platformCut: 20,
    earnings: 96
  },
  {
    id: 2,
    title: '科技资讯导语',
    component: '导语库',
    platforms: 'CSDN, 小红书',
    count: 23,
    unitPrice: 5,
    platformCut: 15,
    earnings: 97.75
  },
  {
    id: 3,
    title: '数据对比图表',
    component: '图表库',
    platforms: '微信公众号, 知乎',
    count: 8,
    unitPrice: 15,
    platformCut: 25,
    earnings: 90
  }
])

const getTypeBadgeClass = (type) => {
  const classes = {
    '任务费用': 'badge-primary',
    '复用分成': 'badge-matrix',
    'KPI奖金': 'badge bg-green-100 text-green-800',
    '风控扣减': 'badge bg-red-100 text-red-800'
  }
  return classes[type] || 'badge-gray'
}

const getStatusBadgeClass = (status) => {
  const classes = {
    '已结算': 'badge-matrix',
    '待结算': 'badge bg-yellow-100 text-yellow-800',
    '冻结中': 'badge bg-red-100 text-red-800'
  }
  return classes[status] || 'badge-gray'
}
</script>



