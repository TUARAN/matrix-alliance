<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">认领任务</h1>
        <p class="text-gray-600">选择适合您的任务，认领后开始创作</p>
      </div>

      <!-- Filters -->
      <div class="card mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select v-model="filters.type" class="input-field">
            <option value="">全部类型</option>
            <option value="品牌广告">品牌广告</option>
            <option value="产品测评">产品测评</option>
            <option value="内容分发">内容分发</option>
            <option value="资讯快写">资讯快写</option>
            <option value="深度测评">深度测评</option>
            <option value="长文整包">长文整包</option>
          </select>
          <select v-model="filters.budget" class="input-field">
            <option value="">全部预算</option>
            <option value="100-500">100-500元</option>
            <option value="500-1000">500-1000元</option>
            <option value="1000-5000">1000-5000元</option>
            <option value="5000-10000">5000-10000元</option>
            <option value="10000+">10000元以上</option>
          </select>
          <select v-model="filters.platform" class="input-field">
            <option value="">全部平台</option>
            <option value="微信公众号">微信公众号</option>
            <option value="知乎">知乎</option>
            <option value="掘金">掘金</option>
            <option value="多平台">多平台</option>
          </select>
          <button @click="applyFilters" class="btn-primary">筛选</button>
        </div>
      </div>

      <!-- Available Tasks -->
      <div class="card mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">可接任务</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div v-for="task in filteredTasks" :key="task.id" class="border border-primary-200 rounded-lg p-6 hover:border-primary-400 transition-colors bg-gradient-to-br from-white to-primary-50">
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-center space-x-2">
                <span class="badge-primary">{{ task.type }}</span>
                <span v-if="task.platform" class="badge-gray">{{ task.platform }}</span>
                <span v-if="task.difficulty" class="badge-gray">{{ task.difficulty }}</span>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-primary-600">¥{{ task.budget }}</div>
                <div class="text-sm text-gray-500">{{ task.deadline }}</div>
              </div>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ task.title }}</h3>
            <p class="text-gray-600 mb-4">{{ task.description }}</p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <span>👥 {{ task.applicants }}人申请</span>
                <span>⭐ {{ task.rating }}</span>
              </div>
              <button @click="claimTask(task)" class="btn-primary">立即认领</button>
            </div>
          </div>
        </div>
      </div>

      <!-- My Claims -->
      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">我的认领</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">任务标题</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">预算</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">认领时间</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="claim in myClaims" :key="claim.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ claim.title }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="badge-gray">{{ claim.type }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">¥{{ claim.budget }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getStatusBadgeClass(claim.status)">
                    {{ claim.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ claim.claimTime }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button class="text-primary-600 hover:text-primary-900">查看</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const filters = ref({
  type: '',
  budget: '',
  platform: ''
})

// 统一的任务数据
const allTasks = ref([
  {
    id: 1,
    type: '品牌广告',
    platform: '微信公众号',
    title: '科技品牌产品推广',
    description: '在微信公众号发布品牌产品推广文章，需要10w+粉丝账号',
    budget: 5000,
    deadline: '1周内',
    applicants: 8,
    rating: 4.9
  },
  {
    id: 2,
    type: '产品测评',
    platform: '知乎',
    title: 'AI工具深度测评',
    description: '对某AI工具进行深度测评，需要科技领域垂直账号',
    budget: 3000,
    deadline: '5天内',
    applicants: 12,
    rating: 4.8
  },
  {
    id: 3,
    type: '内容分发',
    platform: '多平台',
    title: '品牌内容矩阵分发',
    description: '将品牌内容分发到多个平台，需要矩阵运营能力',
    budget: 8000,
    deadline: '2周内',
    applicants: 5,
    rating: 4.7
  },
  {
    id: 4,
    type: '资讯快写',
    difficulty: '简单',
    title: '科技资讯快写',
    description: '快速撰写科技领域资讯文章，要求时效性强',
    budget: 300,
    deadline: '1天内',
    applicants: 15,
    rating: 4.6
  },
  {
    id: 5,
    type: '深度测评',
    difficulty: '中等',
    title: '产品深度测评',
    description: '对某产品进行深度测评，需要专业分析能力',
    budget: 800,
    deadline: '3天内',
    applicants: 8,
    rating: 4.8
  },
  {
    id: 6,
    type: '长文整包',
    difficulty: '困难',
    title: '技术长文创作',
    description: '创作一篇5000字以上的技术深度文章',
    budget: 2000,
    deadline: '1周内',
    applicants: 3,
    rating: 4.9
  }
])

const myClaims = ref([
  {
    id: 1,
    title: '科技资讯快写',
    type: '资讯快写',
    budget: 300,
    status: '进行中',
    claimTime: '2025-01-15 10:30'
  },
  {
    id: 2,
    title: 'AI工具深度测评',
    type: '产品测评',
    budget: 800,
    status: '待审核',
    claimTime: '2025-01-14 15:20'
  }
])

const filteredTasks = computed(() => {
  return allTasks.value.filter(task => {
    if (filters.value.type && task.type !== filters.value.type) return false
    if (filters.value.platform && task.platform !== filters.value.platform) return false
    return true
  })
})

const applyFilters = () => {
  // 筛选逻辑已在 computed 中处理
}

const claimTask = (task) => {
  // TODO: 实现认领任务逻辑
  console.log('认领任务:', task)
  alert(`已认领任务：${task.title}`)
}

const getStatusBadgeClass = (status) => {
  const statusMap = {
    '进行中': 'badge-matrix',
    '待审核': 'badge-gray',
    '已完成': 'badge-primary',
    '已拒绝': 'badge-gray'
  }
  return statusMap[status] || 'badge-gray'
}
</script>

