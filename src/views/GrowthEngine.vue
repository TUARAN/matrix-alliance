<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 class="text-3xl font-bold text-gray-900">狠活引擎</h1>
              <p class="text-gray-600 mt-1">底层能量与数据中心 · 提供增长工具与数据支撑</p>
            </div>
          </div>
          <router-link to="/workshop" class="btn-primary text-base px-6 py-3 flex items-center justify-center space-x-2 w-full md:w-auto">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>创作工坊</span>
          </router-link>
        </div>
        <p class="text-sm text-gray-500 bg-blue-50 p-4 rounded-lg border border-blue-200">
          💡 这是整个创作联盟的"底层燃料"：投流监控、复用追踪、互动分析、增长工具、脚本库、平台技巧
        </p>
      </div>

      <!-- Stats Overview -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div class="text-sm opacity-90 mb-2">活跃脚本</div>
          <div class="text-3xl font-bold mb-1">24</div>
          <div class="text-sm opacity-75">运行中</div>
        </div>
        <div class="card bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div class="text-sm opacity-90 mb-2">本月复用追踪</div>
          <div class="text-3xl font-bold mb-1">1.2K</div>
          <div class="text-sm opacity-75">+32% ↗</div>
        </div>
        <div class="card bg-gradient-to-r from-purple-600 to-purple-700 text-white">
          <div class="text-sm opacity-90 mb-2">投流总金额</div>
          <div class="text-3xl font-bold mb-1">¥45K</div>
          <div class="text-sm opacity-75">ROI: 320%</div>
        </div>
        <div class="card bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div class="text-sm opacity-90 mb-2">互助曝光</div>
          <div class="text-3xl font-bold mb-1">8.5K</div>
          <div class="text-sm opacity-75">本月互助</div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="border-b border-gray-200 mb-8">
        <nav class="-mb-px flex space-x-8">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="py-2 px-1 border-b-2 font-medium text-sm transition-colors"
            :class="activeTab === tab.id 
              ? 'border-primary-500 text-primary-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- 投流监控中心 -->
      <div v-if="activeTab === 'advertising'" class="space-y-8">
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">投流监控中心</h2>
            <button class="btn-primary">新建投流计划</button>
          </div>
          
          <!-- Platform Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">微信公众号</span>
                <span class="badge-matrix">进行中</span>
              </div>
              <div class="text-2xl font-bold text-gray-900 mb-1">¥12,500</div>
              <div class="text-sm text-gray-500">投入 · ROI: 280%</div>
            </div>
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">知乎</span>
                <span class="badge-matrix">进行中</span>
              </div>
              <div class="text-2xl font-bold text-gray-900 mb-1">¥8,200</div>
              <div class="text-sm text-gray-500">投入 · ROI: 320%</div>
            </div>
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">小红书</span>
                <span class="badge-gray">已结束</span>
              </div>
              <div class="text-2xl font-bold text-gray-900 mb-1">¥6,800</div>
              <div class="text-sm text-gray-500">投入 · ROI: 195%</div>
            </div>
          </div>

          <!-- ROI Analysis -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">ROI分析</h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <div class="text-sm text-gray-600 mb-1">总投入</div>
                <div class="text-xl font-bold text-gray-900">¥27,500</div>
              </div>
              <div>
                <div class="text-sm text-gray-600 mb-1">总收益</div>
                <div class="text-xl font-bold text-green-600">¥88,000</div>
              </div>
              <div>
                <div class="text-sm text-gray-600 mb-1">ROI</div>
                <div class="text-xl font-bold text-primary-600">320%</div>
              </div>
              <div>
                <div class="text-sm text-gray-600 mb-1">平均曝光成本</div>
                <div class="text-xl font-bold text-gray-900">¥0.12</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 复用追踪系统 -->
      <div v-if="activeTab === 'reuse'" class="space-y-8">
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">复用追踪系统</h2>
            <div class="flex space-x-4">
              <select class="input-field text-sm">
                <option>全部平台</option>
                <option>微信公众号</option>
                <option>知乎</option>
                <option>掘金</option>
              </select>
              <select class="input-field text-sm">
                <option>全部类型</option>
                <option>标题</option>
                <option>导语</option>
                <option>图表</option>
              </select>
            </div>
          </div>

          <!-- Reuse Path -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">复用路径图</h3>
            <div class="bg-gray-50 rounded-lg p-6">
              <div class="flex items-center justify-between">
                <div class="text-center">
                  <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-primary-600 font-bold">源</span>
                  </div>
                  <div class="text-sm text-gray-600">AI工具测评标题</div>
                  <div class="text-xs text-gray-500 mt-1">创作者A</div>
                </div>
                <div class="flex-1 mx-4">
                  <div class="h-1 bg-primary-300 rounded"></div>
                  <div class="text-center text-xs text-gray-500 mt-1">复用15次</div>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-matrix-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-matrix-600 font-bold">分</span>
                  </div>
                  <div class="text-sm text-gray-600">多平台</div>
                  <div class="text-xs text-gray-500 mt-1">12个账号</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Reuse Details -->
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">内容部件</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">复用次数</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">复用平台</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">效果数据</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">收益</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="item in reuseTracking" :key="item.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ item.component }}</div>
                    <div class="text-sm text-gray-500">{{ item.type }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.reuseCount }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex flex-wrap gap-1">
                      <span v-for="platform in item.platforms" :key="platform" class="badge-gray text-xs">
                        {{ platform }}
                      </span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>曝光: {{ item.views.toLocaleString() }}</div>
                    <div class="text-gray-500">互动: {{ item.engagement }}%</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    ¥{{ item.revenue }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 互动分析工具 -->
      <div v-if="activeTab === 'interaction'" class="space-y-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="card">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">互动趋势</h2>
            <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div class="text-center text-gray-500">
                <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p>互动趋势图表</p>
              </div>
            </div>
          </div>

          <div class="card">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">用户画像</h2>
            <div class="space-y-4">
              <div v-for="segment in userSegments" :key="segment.name" class="border border-gray-200 rounded-lg p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-900">{{ segment.name }}</span>
                  <span class="text-sm text-gray-600">{{ segment.percentage }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-primary-600 h-2 rounded-full" :style="{width: segment.percentage + '%'}"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">热点分析</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="trend in hotTrends" :key="trend.id" class="border border-gray-200 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="badge-primary">{{ trend.category }}</span>
                <span class="text-sm text-green-600">+{{ trend.growth }}% ↗</span>
              </div>
              <h3 class="font-medium text-gray-900 mb-1">{{ trend.title }}</h3>
              <p class="text-sm text-gray-500">{{ trend.engagement }}次互动</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 增长工具库 -->
      <div v-if="activeTab === 'tools'" class="space-y-8">
        <!-- 脚本库 -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">脚本库</h2>
            <button class="btn-primary">上传脚本</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="script in scripts" :key="script.id" class="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
              <div class="flex items-center justify-between mb-3">
                <span class="badge-gray">{{ script.platform }}</span>
                <span class="text-sm text-gray-500">{{ script.usage }}次使用</span>
              </div>
              <h3 class="font-medium text-gray-900 mb-2">{{ script.name }}</h3>
              <p class="text-sm text-gray-600 mb-4">{{ script.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-green-600">成功率: {{ script.successRate }}%</span>
                <button class="btn-secondary text-sm">使用脚本</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 增长策略库 -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">增长策略库</h2>
            <button class="btn-primary">添加策略</button>
          </div>
          <div class="space-y-4">
            <div v-for="strategy in strategies" :key="strategy.id" class="border border-gray-200 rounded-lg p-6">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="badge-primary">{{ strategy.platform }}</span>
                    <span class="badge-matrix">{{ strategy.type }}</span>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ strategy.title }}</h3>
                  <p class="text-gray-600 mb-4">{{ strategy.description }}</p>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-green-600 mb-1">+{{ strategy.result }}%</div>
                  <div class="text-sm text-gray-500">效果提升</div>
                </div>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div class="text-gray-600">适用场景</div>
                  <div class="font-medium text-gray-900">{{ strategy.scenario }}</div>
                </div>
                <div>
                  <div class="text-gray-600">执行周期</div>
                  <div class="font-medium text-gray-900">{{ strategy.period }}</div>
                </div>
                <div>
                  <div class="text-gray-600">成功率</div>
                  <div class="font-medium text-green-600">{{ strategy.successRate }}%</div>
                </div>
                <div>
                  <div class="text-gray-600">使用次数</div>
                  <div class="font-medium text-gray-900">{{ strategy.usage }}</div>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-gray-200">
                <button class="btn-primary text-sm">查看详情</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 互赞体系 -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">互赞体系</h2>
            <button class="btn-primary">加入互助</button>
          </div>
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">互助曝光计划</h3>
                <p class="text-gray-600 mb-4">账号间互赞、互转、互助曝光，短周期拉升账号基础权重</p>
                <div class="flex items-center space-x-6 text-sm">
                  <div>
                    <div class="text-gray-600">参与账号</div>
                    <div class="text-xl font-bold text-gray-900">156</div>
                  </div>
                  <div>
                    <div class="text-gray-600">本月互助</div>
                    <div class="text-xl font-bold text-primary-600">8.5K</div>
                  </div>
                  <div>
                    <div class="text-gray-600">平均提升</div>
                    <div class="text-xl font-bold text-green-600">+35%</div>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div class="text-sm text-gray-600">账号权重提升</div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="text-sm text-gray-600 mb-2">我的互助记录</div>
              <div class="text-2xl font-bold text-gray-900 mb-1">128</div>
              <div class="text-sm text-gray-500">本月互助次数</div>
            </div>
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="text-sm text-gray-600 mb-2">获得的曝光</div>
              <div class="text-2xl font-bold text-primary-600 mb-1">2.3K</div>
              <div class="text-sm text-gray-500">本月累计</div>
            </div>
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="text-sm text-gray-600 mb-2">账号权重提升</div>
              <div class="text-2xl font-bold text-green-600 mb-1">+42%</div>
              <div class="text-sm text-gray-500">较上月</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('advertising')

const tabs = [
  { id: 'advertising', name: '投流监控' },
  { id: 'reuse', name: '复用追踪' },
  { id: 'interaction', name: '互动分析' },
  { id: 'tools', name: '增长工具' }
]

const reuseTracking = ref([
  {
    id: 1,
    component: 'AI工具测评标题',
    type: '标题',
    reuseCount: 15,
    platforms: ['微信公众号', '知乎', '掘金'],
    views: 125000,
    engagement: 8.5,
    revenue: 360
  },
  {
    id: 2,
    component: '科技资讯导语',
    type: '导语',
    reuseCount: 23,
    platforms: ['CSDN', '小红书'],
    views: 89000,
    engagement: 12.3,
    revenue: 192
  },
  {
    id: 3,
    component: '数据对比图表',
    type: '图表',
    reuseCount: 8,
    platforms: ['微信公众号', '知乎'],
    views: 67000,
    engagement: 6.8,
    revenue: 270
  }
])

const userSegments = ref([
  { name: '科技从业者', percentage: 35 },
  { name: '产品经理', percentage: 28 },
  { name: '学生/学习者', percentage: 22 },
  { name: '其他', percentage: 15 }
])

const hotTrends = ref([
  {
    id: 1,
    category: 'AI工具',
    title: 'ChatGPT最新功能',
    engagement: 1250,
    growth: 45
  },
  {
    id: 2,
    category: '产品测评',
    title: '新能源汽车对比',
    engagement: 890,
    growth: 32
  },
  {
    id: 3,
    category: '技术教程',
    title: '前端开发最佳实践',
    engagement: 650,
    growth: 28
  }
])

const scripts = ref([
  {
    id: 1,
    name: '微信公众号互赞脚本',
    platform: '微信公众号',
    description: '自动识别优质内容并执行互赞操作',
    usage: 245,
    successRate: 92
  },
  {
    id: 2,
    name: '知乎回答曝光脚本',
    platform: '知乎',
    description: '提升回答在搜索结果中的曝光率',
    usage: 189,
    successRate: 88
  },
  {
    id: 3,
    name: '掘金文章分发脚本',
    platform: '掘金',
    description: '自动同步内容到多个掘金账号',
    usage: 156,
    successRate: 95
  }
])

const strategies = ref([
  {
    id: 1,
    platform: '微信公众号',
    type: '涨粉策略',
    title: '垂直内容矩阵布局',
    description: '通过多账号布局垂直内容，提升账号权重和粉丝粘性',
    result: 35,
    scenario: '新账号起号',
    period: '2-4周',
    successRate: 88,
    usage: 245
  },
  {
    id: 2,
    platform: '知乎',
    type: '曝光策略',
    title: '高质量回答快速爬升',
    description: '通过回答高权重问题并优化关键词，快速提升曝光',
    result: 42,
    scenario: '内容曝光',
    period: '1-2周',
    successRate: 85,
    usage: 189
  },
  {
    id: 3,
    platform: '小红书',
    type: '互动策略',
    title: '社区互动提升权重',
    description: '通过高频互动和话题参与，提升账号社区权重',
    result: 28,
    scenario: '账号维护',
    period: '持续',
    successRate: 90,
    usage: 312
  }
])
</script>

