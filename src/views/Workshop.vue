<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-900">创作工坊</h1>
            <p class="text-gray-600 mt-1">内容工厂 + 创作工坊 + 成长加速器</p>
          </div>
        </div>
        <p class="text-sm text-gray-500 bg-green-50 p-4 rounded-lg border border-green-200">
          💡 矩阵号联盟不是一个"群"，是一个创作工坊。在这里，你会获得内容脚本、模板、增长SOP，多平台运营方法论，稳定的同伴与协作网络。
        </p>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">1,256</div>
          <div class="text-gray-600">活跃创作者</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-matrix-600 mb-2">3.2K</div>
          <div class="text-gray-600">本月互助</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">156</div>
          <div class="text-gray-600">在线课程</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">89</div>
          <div class="text-gray-600">成功案例</div>
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

      <!-- 协作社区 -->
      <div v-if="activeTab === 'community'" class="space-y-8">
        <!-- 互助体系 -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">互赞体系</h2>
            <button class="btn-primary">加入互助</button>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">账号间互赞、曝光互助、推荐链路</h3>
                <p class="text-gray-600 mb-4">短周期拉升账号基础权重，让每个账号都能获得稳定曝光</p>
                <div class="grid grid-cols-3 gap-6">
                  <div>
                    <div class="text-2xl font-bold text-primary-600 mb-1">156</div>
                    <div class="text-sm text-gray-600">参与账号</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-green-600 mb-1">3.2K</div>
                    <div class="text-sm text-gray-600">本月互助</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-purple-600 mb-1">+35%</div>
                    <div class="text-sm text-gray-600">平均权重提升</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 互助任务 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="font-semibold text-gray-900 mb-4">我的互助任务</h3>
              <div class="space-y-4">
                <div v-for="task in myMutualTasks" :key="task.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div class="font-medium text-gray-900">{{ task.title }}</div>
                    <div class="text-sm text-gray-500">{{ task.platform }}</div>
                  </div>
                  <span :class="task.status === '已完成' ? 'badge-matrix' : 'badge-gray'">
                    {{ task.status }}
                  </span>
                </div>
              </div>
              <button class="btn-secondary w-full mt-4">查看全部</button>
            </div>

            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="font-semibold text-gray-900 mb-4">待互助内容</h3>
              <div class="space-y-4">
                <div v-for="content in pendingMutual" :key="content.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div class="font-medium text-gray-900">{{ content.title }}</div>
                    <div class="text-sm text-gray-500">{{ content.creator }} · {{ content.platform }}</div>
                  </div>
                  <button class="btn-primary text-sm">互助</button>
                </div>
              </div>
              <button class="btn-secondary w-full mt-4">查看更多</button>
            </div>
          </div>
        </div>

        <!-- 经验分享 -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">经验分享</h2>
            <button class="btn-primary">分享经验</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="post in experiencePosts" :key="post.id" class="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary-600 font-bold">{{ post.author.charAt(0) }}</span>
                </div>
                <div>
                  <div class="font-medium text-gray-900">{{ post.author }}</div>
                  <div class="text-sm text-gray-500">{{ post.date }}</div>
                </div>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 text-sm text-gray-500">
                  <span>👍 {{ post.likes }}</span>
                  <span>💬 {{ post.comments }}</span>
                </div>
                <button class="text-primary-600 hover:text-primary-700 text-sm">阅读全文</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 成长学院 -->
      <div v-if="activeTab === 'academy'" class="space-y-8">
        <!-- 课程列表 -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">成长学院</h2>
            <button class="btn-primary">创建课程</button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="course in courses" :key="course.id" class="border border-gray-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors">
              <div class="h-40 bg-gradient-to-r from-primary-100 to-matrix-100 flex items-center justify-center">
                <span class="text-4xl">{{ course.icon }}</span>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <span class="badge-primary">{{ course.category }}</span>
                  <span class="text-sm text-gray-500">{{ course.students }}人学习</span>
                </div>
                <h3 class="font-semibold text-gray-900 mb-2">{{ course.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ course.description }}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="flex text-yellow-400">
                      <span v-for="i in 5" :key="i">★</span>
                    </div>
                    <span class="ml-2 text-sm text-gray-600">{{ course.rating }}</span>
                  </div>
                  <button class="btn-primary text-sm">开始学习</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 案例库 -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">成功案例</h2>
            <button class="btn-primary">提交案例</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="caseItem in successCases" :key="caseItem.id" class="border border-gray-200 rounded-lg p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ caseItem.title }}</h3>
                  <p class="text-sm text-gray-500">{{ caseItem.creator }}</p>
                </div>
              </div>
              <p class="text-gray-600 mb-4">{{ caseItem.description }}</p>
              <div class="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div class="text-gray-600">起号时间</div>
                  <div class="font-medium text-gray-900">{{ caseItem.time }}</div>
                </div>
                <div>
                  <div class="text-gray-600">粉丝增长</div>
                  <div class="font-medium text-green-600">+{{ caseItem.growth }}</div>
                </div>
                <div>
                  <div class="text-gray-600">收益</div>
                  <div class="font-medium text-primary-600">¥{{ caseItem.revenue }}</div>
                </div>
              </div>
              <button class="btn-secondary w-full mt-4">查看详情</button>
            </div>
          </div>
        </div>

        <!-- SOP库 -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">SOP标准流程</h2>
            <button class="btn-primary">上传SOP</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="sop in sops" :key="sop.id" class="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <span class="text-primary-600 text-2xl">{{ sop.icon }}</span>
              </div>
              <h3 class="font-medium text-gray-900 mb-2">{{ sop.title }}</h3>
              <p class="text-sm text-gray-600 mb-3">{{ sop.description }}</p>
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-500">{{ sop.usage }}次使用</span>
                <button class="text-primary-600 hover:text-primary-700">查看</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 起号加速 -->
      <div v-if="activeTab === 'acceleration'" class="space-y-8">
        <!-- 起号服务 -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">起号加速服务</h2>
            <button class="btn-primary">申请服务</button>
          </div>
          
          <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">短周期拉升账号基础权重</h3>
            <p class="text-gray-600 mb-6">通过专业团队协助，快速提升账号权重，实现从0到1的突破</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white rounded-lg p-6">
                <div class="text-3xl font-bold text-primary-600 mb-2">2-4周</div>
                <div class="text-gray-600 mb-4">起号周期</div>
                <div class="text-sm text-gray-500">快速从0到1w粉丝</div>
              </div>
              <div class="bg-white rounded-lg p-6">
                <div class="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div class="text-gray-600 mb-4">成功率</div>
                <div class="text-sm text-gray-500">专业团队保障</div>
              </div>
              <div class="bg-white rounded-lg p-6">
                <div class="text-3xl font-bold text-purple-600 mb-2">156</div>
                <div class="text-gray-600 mb-4">成功案例</div>
                <div class="text-sm text-gray-500">已验证方案</div>
              </div>
            </div>
          </div>

          <!-- 服务列表 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="border border-gray-200 rounded-lg p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-blue-600 text-2xl">📚</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">快速起号课程</h3>
                  <p class="text-sm text-gray-500">系统化学习起号方法论</p>
                </div>
              </div>
              <ul class="space-y-2 text-sm text-gray-600 mb-4">
                <li>• 账号定位与内容策略</li>
                <li>• 多平台矩阵布局</li>
                <li>• 增长工具使用技巧</li>
                <li>• 数据分析与优化</li>
              </ul>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-gray-900">¥299</span>
                <button class="btn-primary text-sm">立即购买</button>
              </div>
            </div>

            <div class="border border-gray-200 rounded-lg p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-green-600 text-2xl">🚀</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">代运营服务</h3>
                  <p class="text-sm text-gray-500">专业团队代为运营账号</p>
                </div>
              </div>
              <ul class="space-y-2 text-sm text-gray-600 mb-4">
                <li>• 内容策划与创作</li>
                <li>• 多平台分发管理</li>
                <li>• 数据分析与优化</li>
                <li>• 定期复盘与调整</li>
              </ul>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-gray-900">¥2,999/月</span>
                <button class="btn-primary text-sm">立即购买</button>
              </div>
            </div>

            <div class="border border-gray-200 rounded-lg p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-purple-600 text-2xl">🎯</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">垂直账号孵化</h3>
                  <p class="text-sm text-gray-500">从0到1打造垂直账号</p>
                </div>
              </div>
              <ul class="space-y-2 text-sm text-gray-600 mb-4">
                <li>• 账号定位与规划</li>
                <li>• 内容体系搭建</li>
                <li>• 增长策略执行</li>
                <li>• 3个月全程指导</li>
              </ul>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-gray-900">¥9,999</span>
                <button class="btn-primary text-sm">立即购买</button>
              </div>
            </div>

            <div class="border border-gray-200 rounded-lg p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-orange-600 text-2xl">💡</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">知识提炼服务</h3>
                  <p class="text-sm text-gray-500">将内容转化为知识产品</p>
                </div>
              </div>
              <ul class="space-y-2 text-sm text-gray-600 mb-4">
                <li>• 内容结构化整理</li>
                <li>• 知识体系构建</li>
                <li>• 课程化包装</li>
                <li>• 多渠道分发</li>
              </ul>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-gray-900">¥4,999</span>
                <button class="btn-primary text-sm">立即购买</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('community')

const tabs = [
  { id: 'community', name: '协作社区' },
  { id: 'academy', name: '成长学院' },
  { id: 'acceleration', name: '起号加速' }
]

const myMutualTasks = ref([
  { id: 1, title: 'AI工具测评文章', platform: '微信公众号', status: '已完成' },
  { id: 2, title: '科技资讯快写', platform: '知乎', status: '进行中' },
  { id: 3, title: '产品对比分析', platform: '掘金', status: '待互助' }
])

const pendingMutual = ref([
  { id: 1, title: '前端开发最佳实践', creator: '创作者A', platform: 'CSDN' },
  { id: 2, title: '区块链技术解析', creator: '创作者B', platform: '掘金' },
  { id: 3, title: 'AI工具使用指南', creator: '创作者C', platform: '知乎' }
])

const experiencePosts = ref([
  {
    id: 1,
    author: '创作者A',
    date: '2024-01-15',
    title: '如何用矩阵策略在3个月内做到10w粉丝',
                excerpt: '分享我的多账号矩阵运营经验，如何通过一套内容实现多平台收益...',
    likes: 128,
    comments: 32
  },
  {
    id: 2,
    author: '创作者B',
    date: '2024-01-14',
    title: '从0到1w粉丝的起号全流程',
    excerpt: '详细记录了我从创建账号到获得1w粉丝的完整过程...',
    likes: 95,
    comments: 18
  },
  {
    id: 3,
    author: '创作者C',
    date: '2024-01-13',
    title: '如何通过复用内容部件实现收益最大化',
    excerpt: '一个标题如何被复用15次，带来360元收益的实战案例...',
    likes: 156,
    comments: 45
  }
])

const courses = ref([
  {
    id: 1,
    icon: '📚',
    category: '起号课程',
    title: '从0到1w粉丝完整指南',
    description: '系统化学习账号定位、内容策略、增长技巧',
    students: 1250,
    rating: 4.8
  },
  {
    id: 2,
    icon: '🎯',
    category: '矩阵策略',
    title: '多账号矩阵运营实战',
    description: '如何通过一套内容实现多平台收益',
    students: 890,
    rating: 4.9
  },
  {
    id: 3,
    icon: '💡',
    category: '内容创作',
    title: '部件化内容生产方法',
    description: '将内容拆解为可复用部件，提高创作效率',
    students: 650,
    rating: 4.7
  }
])

const successCases = ref([
  {
    id: 1,
    title: '3个月从0到5w粉丝',
    creator: '科技博主A',
    description: '通过矩阵策略和内容复用，在3个月内实现5个账号总计5w粉丝',
    time: '3个月',
    growth: '5w',
    revenue: '12,000'
  },
  {
    id: 2,
    title: '单月收益突破2w',
    creator: '产品博主B',
    description: '通过内容部件复用和任务接单，单月实现2w收益',
    time: '1个月',
    growth: '2w',
    revenue: '20,000'
  }
])

const sops = ref([
  { id: 1, icon: '📝', title: '内容创作SOP', description: '标准化内容创作流程', usage: 1250 },
  { id: 2, icon: '🚀', title: '账号起号SOP', description: '快速起号标准流程', usage: 890 },
  { id: 3, icon: '📊', title: '数据分析SOP', description: '内容数据分析方法', usage: 650 },
  { id: 4, icon: '🔄', title: '内容复用SOP', description: '内容部件复用指南', usage: 420 }
])
</script>

