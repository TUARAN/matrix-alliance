<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">内容工厂</h1>
        <p class="text-gray-600">部件化生产，模板化创作，AI辅助优化</p>
      </div>

      <!-- Tabs -->
      <div class="border-b border-gray-200 mb-8">
        <nav class="-mb-px flex space-x-8">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="py-2 px-1 border-b-2 font-medium text-sm"
            :class="activeTab === tab.id 
              ? 'border-primary-500 text-primary-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- Template Library -->
      <div v-if="activeTab === 'templates'" class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="template in templates" :key="template.id" class="card-hover">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <span class="text-primary-600 font-bold">{{ template.type.charAt(0) }}</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">{{ template.name }}</h3>
                <p class="text-sm text-gray-500">{{ template.type }}</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">{{ template.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">使用次数: {{ template.usage }}</span>
              <button class="btn-primary text-sm">使用模板</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Asset Library -->
      <div v-if="activeTab === 'assets'" class="space-y-8">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold text-gray-900">内容部件库</h2>
          <button class="btn-primary">上传部件</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="asset in assets" :key="asset.id" class="card">
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">{{ asset.icon }}</span>
              </div>
              <h3 class="font-medium text-gray-900 mb-2">{{ asset.name }}</h3>
              <p class="text-sm text-gray-500 mb-4">{{ asset.count }}个部件</p>
              <button class="btn-secondary text-sm w-full">查看详情</button>
            </div>
          </div>
        </div>
      </div>

      <!-- AI Assistant -->
      <div v-if="activeTab === 'ai'" class="space-y-8">
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">AI创作助手</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">内容类型</label>
              <select class="input-field">
                <option>资讯文章</option>
                <option>产品测评</option>
                <option>技术教程</option>
                <option>营销文案</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">目标平台</label>
              <select class="input-field">
                <option>微信公众号</option>
                <option>知乎</option>
                <option>掘金</option>
                <option>CSDN</option>
                <option>小红书</option>
              </select>
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">内容主题</label>
              <textarea 
                class="input-field h-24" 
                placeholder="请描述您要创作的内容主题和要求..."
              ></textarea>
            </div>
          </div>
          <div class="mt-6">
            <button class="btn-primary">生成内容</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('templates')

const tabs = [
  { id: 'templates', name: '模板库' },
  { id: 'assets', name: '部件库' },
  { id: 'ai', name: 'AI助手' }
]

const templates = ref([
  {
    id: 1,
    name: '科技资讯模板',
    type: '资讯快写',
    description: '标准三段式科技资讯文章模板，包含标题、导语、正文、结论',
    usage: 1250
  },
  {
    id: 2,
    name: '产品测评模板',
    type: '深度测评',
    description: '完整的产品测评框架，包含外观、性能、优缺点分析',
    usage: 890
  },
  {
    id: 3,
    name: '技术教程模板',
    type: '长文整包',
    description: '结构化技术教程模板，适合编程、工具使用等场景',
    usage: 650
  }
])

const assets = ref([
  { id: 1, name: '标题库', icon: '📝', count: 1250 },
  { id: 2, name: '导语库', icon: '🎯', count: 890 },
  { id: 3, name: '图表库', icon: '📊', count: 450 },
  { id: 4, name: '结论库', icon: '✅', count: 320 }
])
</script>



