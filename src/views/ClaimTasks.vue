<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">认领任务</h1>
        <p class="text-gray-600">选择适合您的任务，认领后开始创作</p>
      </div>

      <!-- Role Toggle -->
      <div class="card mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">选择您的角色</h3>
          <p class="text-sm text-gray-600">明确区分博主联盟（放大者）和矩阵号联盟（生产者）</p>
        </div>
        <div class="flex items-center justify-center flex-wrap gap-3">
          <button 
            @click="activeRole = 'blogger'"
            class="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2"
            :class="activeRole === 'blogger' 
              ? 'bg-matrix-600 text-white shadow-lg scale-105' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>博主联盟（放大者）</span>
          </button>
          <button 
            @click="activeRole = 'matrix'"
            class="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2"
            :class="activeRole === 'matrix' 
              ? 'bg-green-600 text-white shadow-lg scale-105' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span>矩阵号联盟（生产者）</span>
          </button>
        </div>
        <div class="mt-4 pt-4 border-t border-gray-200">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="text-center">
              <div class="font-semibold text-matrix-700 mb-1">博主联盟</div>
              <div class="text-gray-600">有粉丝、号权，负责分发放大</div>
            </div>
            <div class="text-center">
              <div class="font-semibold text-green-700 mb-1">矩阵号联盟</div>
              <div class="text-gray-600">提供可复用内容部件</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Blogger View: 博主联盟（放大者） -->
      <div v-if="activeRole === 'blogger'">
        <!-- 博主联盟说明 -->
        <div class="card mb-8 bg-gradient-to-r from-matrix-50 to-purple-50 border-2 border-matrix-200">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-matrix-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-2">博主联盟 - 放大者</h2>
              <p class="text-gray-700 mb-2">您是有粉丝、有号权的博主，负责分发与放大，多平台矩阵运营</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 承接 B 端广告与品牌测评</li>
                <li>• 购买内容部件进行二次创作</li>
                <li>• 通过多平台分发放大内容价值</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Filters -->
        <div class="card mb-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select v-model="filters.type" class="input-field">
              <option value="">全部类型</option>
              <option value="品牌广告">品牌广告</option>
              <option value="产品测评">产品测评</option>
              <option value="内容分发">内容分发</option>
            </select>
            <select v-model="filters.budget" class="input-field">
              <option value="">全部预算</option>
              <option value="1000-5000">1000-5000元</option>
              <option value="5000-10000">5000-10000元</option>
              <option value="10000+">10000元以上</option>
            </select>
            <select v-model="filters.platform" class="input-field">
              <option value="">全部平台</option>
              <option value="微信公众号">微信公众号</option>
              <option value="知乎">知乎</option>
              <option value="掘金">掘金</option>
            </select>
            <button @click="applyFilters" class="btn-matrix">筛选</button>
          </div>
        </div>

        <!-- Available Tasks -->
        <div class="card mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">可接任务（博主联盟）</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="task in filteredBloggerTasks" :key="task.id" class="border border-matrix-200 rounded-lg p-6 hover:border-matrix-400 transition-colors bg-gradient-to-br from-white to-matrix-50">
              <div class="flex justify-between items-start mb-4">
                <div class="flex items-center space-x-2">
                  <span class="badge-matrix">{{ task.type }}</span>
                  <span class="badge-gray">{{ task.platform }}</span>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-matrix-600">¥{{ task.budget }}</div>
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
                <button @click="claimTask(task)" class="btn-matrix">立即认领</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Matrix View: 矩阵号联盟（生产者） -->
      <div v-if="activeRole === 'matrix'">
        <!-- 矩阵号联盟说明 -->
        <div class="card mb-8 bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-2">矩阵号联盟 - 生产者</h2>
              <p class="text-gray-700 mb-2">您是内容创作者，提供可复用内容部件，标准化生产流程</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 不论粉丝多少，都能贡献可复用内容单元</li>
                <li>• 写一篇好文，就像造一个"零部件"，可被多次组装使用</li>
                <li>• 内容像商品一样被复用、被分发、被结算</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Filters -->
        <div class="card mb-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select v-model="filters.type" class="input-field">
              <option value="">全部类型</option>
              <option value="资讯快写">资讯快写</option>
              <option value="深度测评">深度测评</option>
              <option value="长文整包">长文整包</option>
            </select>
            <select v-model="filters.budget" class="input-field">
              <option value="">全部预算</option>
              <option value="100-500">100-500元</option>
              <option value="500-1000">500-1000元</option>
              <option value="1000-5000">1000-5000元</option>
              <option value="5000+">5000元以上</option>
            </select>
            <select v-model="filters.difficulty" class="input-field">
              <option value="">全部难度</option>
              <option value="简单">简单</option>
              <option value="中等">中等</option>
              <option value="困难">困难</option>
            </select>
            <button @click="applyFilters" class="btn-primary">筛选</button>
          </div>
        </div>

        <!-- Available Tasks -->
        <div class="card mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">可接任务（矩阵号联盟）</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="task in filteredMatrixTasks" :key="task.id" class="border border-green-200 rounded-lg p-6 hover:border-green-400 transition-colors bg-gradient-to-br from-white to-green-50">
              <div class="flex justify-between items-start mb-4">
                <div class="flex items-center space-x-2">
                  <span class="badge-primary">{{ task.type }}</span>
                  <span class="badge-gray">{{ task.difficulty }}</span>
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

const activeRole = ref('blogger') // 'blogger'（博主联盟）、'matrix'（矩阵号联盟）

const filters = ref({
  type: '',
  budget: '',
  platform: '',
  difficulty: ''
})

// 博主联盟任务数据
const bloggerTasks = ref([
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
  }
])

// 矩阵号联盟任务数据
const matrixTasks = ref([
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

const filteredBloggerTasks = computed(() => {
  return bloggerTasks.value.filter(task => {
    if (filters.value.type && task.type !== filters.value.type) return false
    if (filters.value.platform && task.platform !== filters.value.platform) return false
    return true
  })
})

const filteredMatrixTasks = computed(() => {
  return matrixTasks.value.filter(task => {
    if (filters.value.type && task.type !== filters.value.type) return false
    if (filters.value.difficulty && task.difficulty !== filters.value.difficulty) return false
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

