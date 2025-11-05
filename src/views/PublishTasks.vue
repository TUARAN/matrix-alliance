<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">发布任务</h1>
        <p class="text-gray-600">选择矩阵号，发布任务，让创作者为您创作内容</p>
      </div>

      <!-- Brand Introduction -->
      <div class="card mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <div class="flex items-start">
          <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-2">品牌方</h2>
            <p class="text-gray-700 mb-2">发布任务，选择账号投放，让矩阵号联盟为您创作内容</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• 从矩阵号联盟中选择要投放的账号</li>
              <li>• 发布任务需求，等待创作者认领</li>
              <li>• 跟踪任务进度，管理投放效果</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 1: 选择账号 -->
      <div class="card mb-8">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">选择矩阵号</h2>
            <p class="text-sm text-gray-600 mt-1">从矩阵号联盟中选择要投放的账号</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="text-sm text-gray-600">
              已选择 <span class="font-bold text-primary-600">{{ selectedAccounts.length }}</span> 个账号
            </div>
            <button 
              @click="showSelectedAccounts = !showSelectedAccounts"
              class="btn-secondary text-sm"
              :disabled="selectedAccounts.length === 0"
            >
              查看已选
            </button>
          </div>
        </div>

        <!-- 账号筛选 -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <select v-model="accountFilters.platform" class="input-field">
            <option value="">全部平台</option>
            <option value="微信公众号">微信公众号</option>
            <option value="知乎">知乎</option>
            <option value="掘金">掘金</option>
            <option value="CSDN">CSDN</option>
            <option value="小红书">小红书</option>
          </select>
          <select v-model="accountFilters.category" class="input-field">
            <option value="">全部领域</option>
            <option value="科技">科技</option>
            <option value="生活">生活</option>
            <option value="财经">财经</option>
            <option value="教育">教育</option>
          </select>
          <select v-model="accountFilters.followers" class="input-field">
            <option value="">全部粉丝数</option>
            <option value="0-1万">0-1万</option>
            <option value="1-10万">1-10万</option>
            <option value="10-50万">10-50万</option>
            <option value="50万+">50万+</option>
          </select>
          <button @click="filterAccounts" class="btn-primary">筛选</button>
        </div>

        <!-- 账号列表表格 -->
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input 
                    type="checkbox" 
                    :checked="selectedAccounts.length === filteredAccounts.length && filteredAccounts.length > 0"
                    :indeterminate="selectedAccounts.length > 0 && selectedAccounts.length < filteredAccounts.length"
                    @change="toggleAllAccounts"
                    class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">账号信息</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">平台</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">领域</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">粉丝数</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">权重</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">报价</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr 
                v-for="account in filteredAccounts" 
                :key="account.id"
                class="hover:bg-gray-50 cursor-pointer"
                :class="{ 'bg-primary-50': selectedAccounts.includes(account.id) }"
                @click="toggleAccount(account.id)"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <input 
                    type="checkbox" 
                    :checked="selectedAccounts.includes(account.id)"
                    class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    @click.stop
                    @change="toggleAccount(account.id)"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <span class="text-sm font-medium">{{ account.platform.charAt(0) }}</span>
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900">{{ account.name }}</div>
                      <div class="text-sm text-gray-500">ID: {{ account.id }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="badge-gray">{{ account.platform }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ account.category }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ account.followers }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div class="bg-primary-600 h-2 rounded-full" :style="{width: account.weight + '%'}"></div>
                    </div>
                    <span class="text-sm text-gray-600">{{ account.weight }}%</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                  ¥{{ account.price }}/篇
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    @click.stop="toggleAccount(account.id)"
                    class="text-primary-600 hover:text-primary-900"
                  >
                    {{ selectedAccounts.includes(account.id) ? '取消选择' : '选择' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Step 2: 发布任务 -->
      <div class="card mb-8" v-if="selectedAccounts.length > 0">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold text-gray-900">发布任务</h2>
          <button @click="showTaskForm = true" class="btn-primary">+ 发布任务</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            v-for="taskType in taskTypes" 
            :key="taskType.id"
            @click="selectTaskType(taskType)"
            class="text-center p-4 border-2 rounded-lg cursor-pointer transition-all"
            :class="selectedTaskType === taskType.id 
              ? 'border-primary-500 bg-primary-50' 
              : 'border-gray-200 hover:border-primary-300'"
          >
            <div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" :class="taskType.bgColor">
              <component :is="taskType.icon" class="w-6 h-6" :class="taskType.iconColor" />
            </div>
            <h3 class="font-medium text-gray-900 mb-1">{{ taskType.name }}</h3>
            <p class="text-sm text-gray-500">{{ taskType.description }}</p>
          </div>
        </div>
      </div>

      <!-- 已选账号购物车 -->
      <div v-if="showSelectedAccounts && selectedAccounts.length > 0" class="card mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">已选账号 ({{ selectedAccounts.length }})</h2>
        <div class="space-y-4">
          <div 
            v-for="accountId in selectedAccounts" 
            :key="accountId"
            class="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
          >
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <span class="text-sm font-medium">{{ getAccountById(accountId).platform.charAt(0) }}</span>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">{{ getAccountById(accountId).name }}</h3>
                <p class="text-sm text-gray-500">{{ getAccountById(accountId).platform }} · {{ getAccountById(accountId).followers }}粉丝</p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-lg font-bold text-green-600">¥{{ getAccountById(accountId).price }}/篇</span>
              <button 
                @click="removeAccount(accountId)"
                class="text-red-600 hover:text-red-800 text-sm"
              >
                移除
              </button>
            </div>
          </div>
        </div>
        <div class="mt-6 pt-6 border-t border-gray-200">
          <div class="flex justify-between items-center">
            <div class="text-lg font-semibold text-gray-900">
              总预算: ¥{{ totalBudget }}
            </div>
            <button @click="showTaskForm = true" class="btn-primary">确认选择并发布任务</button>
          </div>
        </div>
      </div>

      <!-- My Tasks -->
      <div class="card mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">我的任务</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div v-for="task in myTasks" :key="task.id" class="border border-gray-200 rounded-lg p-6">
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-center space-x-2">
                <span class="badge-primary">{{ task.type }}</span>
                <span :class="task.status === '进行中' ? 'badge-matrix' : 'badge-gray'">{{ task.status }}</span>
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
                <span>📊 {{ task.progress }}% 完成</span>
              </div>
              <button class="btn-secondary text-sm">查看详情</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Task Form Modal -->
      <div v-if="showTaskForm" 
           @click.self="showTaskForm = false"
           class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6" @click.stop>
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900">发布新任务</h2>
            <button @click="showTaskForm = false" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form @submit.prevent="publishTask" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">任务类型</label>
              <div class="text-lg font-semibold text-primary-600">{{ selectedTaskTypeName }}</div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">任务标题</label>
              <input v-model="newTask.title" type="text" required class="input-field" placeholder="请输入任务标题" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">任务描述</label>
              <textarea v-model="newTask.description" required rows="4" class="input-field" placeholder="请详细描述任务要求"></textarea>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">预算（元）</label>
                <input v-model.number="newTask.budget" type="number" required class="input-field" placeholder="请输入预算" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">截止日期</label>
                <input v-model="newTask.deadline" type="date" required class="input-field" />
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <div class="text-sm text-gray-700 mb-2">
                <strong>已选择账号：</strong>{{ selectedAccounts.length }} 个
              </div>
              <div class="text-sm text-gray-700">
                <strong>总预算：</strong>¥{{ totalBudget }}
              </div>
            </div>
            
            <div class="flex justify-end space-x-3">
              <button type="button" @click="showTaskForm = false" class="btn-secondary">取消</button>
              <button type="submit" class="btn-primary">发布任务</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 账号选择相关状态
const selectedAccounts = ref([])
const showSelectedAccounts = ref(false)
const accountFilters = ref({
  platform: '',
  category: '',
  followers: ''
})

// 任务相关状态
const showTaskForm = ref(false)
const selectedTaskType = ref(null)
const newTask = ref({
  title: '',
  description: '',
  budget: '',
  deadline: ''
})

// 矩阵号账号数据
const matrixAccounts = ref([
  {
    id: 1,
    name: '科技前沿观察',
    platform: '微信公众号',
    category: '科技',
    followers: '12.5万',
    weight: 85,
    price: 800
  },
  {
    id: 2,
    name: 'AI技术探索',
    platform: '知乎',
    category: '科技',
    followers: '8.3万',
    weight: 78,
    price: 600
  },
  {
    id: 3,
    name: '开发者笔记',
    platform: '掘金',
    category: '科技',
    followers: '5.2万',
    weight: 72,
    price: 500
  },
  {
    id: 4,
    name: '技术分享',
    platform: 'CSDN',
    category: '科技',
    followers: '15.6万',
    weight: 88,
    price: 700
  }
])

const myTasks = ref([
  {
    id: 1,
    type: '资讯快写',
    title: '科技产品资讯撰写',
    description: '撰写一篇关于最新科技产品的资讯文章',
    budget: 800,
    deadline: '3天内',
    applicants: 5,
    progress: 60,
    status: '进行中'
  },
  {
    id: 2,
    type: '深度测评',
    title: 'AI工具深度测评',
    description: '对某AI工具进行深度测评分析',
    budget: 2000,
    deadline: '1周内',
    applicants: 3,
    progress: 30,
    status: '进行中'
  }
])

const taskTypes = ref([
  {
    id: 'news',
    name: '资讯快写',
    description: '快速产出资讯内容',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: 'svg'
  },
  {
    id: 'review',
    name: '深度测评',
    description: '专业产品测评',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    icon: 'svg'
  },
  {
    id: 'article',
    name: '长文整包',
    description: '完整长文创作',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    icon: 'svg'
  },
  {
    id: 'distribution',
    name: '分发放大',
    description: '多平台内容分发',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    icon: 'svg'
  }
])

const filteredAccounts = computed(() => {
  return matrixAccounts.value.filter(account => {
    if (accountFilters.value.platform && account.platform !== accountFilters.value.platform) return false
    if (accountFilters.value.category && account.category !== accountFilters.value.category) return false
    return true
  })
})

const totalBudget = computed(() => {
  return selectedAccounts.value.reduce((sum, accountId) => {
    return sum + getAccountById(accountId).price
  }, 0)
})

const selectedTaskTypeName = computed(() => {
  const type = taskTypes.value.find(t => t.id === selectedTaskType.value)
  return type ? type.name : '请选择任务类型'
})

const filterAccounts = () => {
  // 筛选逻辑已在 computed 中处理
}

const toggleAccount = (accountId) => {
  const index = selectedAccounts.value.indexOf(accountId)
  if (index > -1) {
    selectedAccounts.value.splice(index, 1)
  } else {
    selectedAccounts.value.push(accountId)
  }
}

const toggleAllAccounts = () => {
  if (selectedAccounts.value.length === filteredAccounts.value.length) {
    selectedAccounts.value = []
  } else {
    selectedAccounts.value = filteredAccounts.value.map(account => account.id)
  }
}

const removeAccount = (accountId) => {
  const index = selectedAccounts.value.indexOf(accountId)
  if (index > -1) {
    selectedAccounts.value.splice(index, 1)
  }
}

const getAccountById = (accountId) => {
  return matrixAccounts.value.find(account => account.id === accountId) || {}
}

const selectTaskType = (taskType) => {
  selectedTaskType.value = taskType.id
}

const publishTask = () => {
  // TODO: 实现发布任务逻辑
  console.log('发布任务:', {
    ...newTask.value,
    type: selectedTaskTypeName.value,
    accounts: selectedAccounts.value
  })
  alert('任务发布成功！')
  showTaskForm.value = false
  // 重置表单
  newTask.value = {
    title: '',
    description: '',
    budget: '',
    deadline: ''
  }
}
</script>

