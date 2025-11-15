<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-matrix-50 py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <!-- Top Badge -->
          <div class="text-center mb-3">
            <span class="inline-block bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">内容操作系统 (Content OS)</span>
          </div>
          
          <!-- Main Title -->
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-4 text-center">
            矩阵联盟
          </h1>
          
          <!-- Key Message - Two Column Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- Left: Core Value -->
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div class="text-2xl font-bold text-primary-600 mb-3">
                "矩阵化生产力"
              </div>
              <p class="text-base text-gray-700 leading-relaxed">
                对抗单账号不确定性<br>
                把创作做成系统，而不是靠运气
              </p>
            </div>
            
            <!-- Right: Core Concept -->
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div class="text-2xl font-bold text-matrix-600 mb-3">
                "可复制的创作者工业体系"
              </div>
              <p class="text-base text-gray-700 leading-relaxed">
                把"个人写作"升级为工业体系<br>
            让内容像零部件一样被复用、被分发、被结算
              </p>
            </div>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <router-link to="/brand" class="btn-matrix text-base px-8 py-3 text-center flex-1 sm:flex-none">
              我是品牌方，我想"<span class="text-2xl font-bold text-yellow-300 drop-shadow-lg">更有效</span>"推广
            </router-link>
          </div>
          
          <!-- Bottom Note - Compact -->
          <div class="text-center">
            <p class="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <span class="font-semibold text-gray-700">这不是"写作平台"，而是"内容操作系统(Content OS)"</span>
              · 不是靠灵感，而是靠架构 · 不是靠爆文，而是靠协作 · 不是靠激情，而是靠循环
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            分层架构
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            从顶层应用到底层能源，构建完整的内容操作系统
          </p>
        </div>

        <div class="space-y-4">
          <!-- 顶层：应用层 -->
          <div class="card bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">1</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">顶层：应用层</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16">
              <div class="bg-white rounded-lg p-4 border border-blue-200">
                <div class="font-semibold text-gray-900 mb-2">博主联盟</div>
                <p class="text-sm text-gray-600">承接 B 端广告与品牌测评，面向有粉丝、号权的放大者</p>
              </div>
              <div class="bg-white rounded-lg p-4 border border-purple-200">
                <div class="font-semibold text-gray-900 mb-2">矩阵联盟</div>
                <p class="text-sm text-gray-600">开放给所有想写的人，让内容成为商品，面向生产者</p>
              </div>
            </div>
          </div>

          <!-- 上层：联盟中枢 -->
          <div class="card bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">2</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">上层：联盟中枢</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ml-16">
              <div class="bg-white rounded-lg p-4 border border-green-200">
                <div class="font-semibold text-gray-900 mb-2">创作者档案</div>
                <p class="text-sm text-gray-600">统一管理创作者信息与内容资产</p>
              </div>
              <div class="bg-white rounded-lg p-4 border border-green-200">
                <div class="font-semibold text-gray-900 mb-2">收益分配</div>
                <p class="text-sm text-gray-600">负责收益分配与品牌接口</p>
              </div>
              <div class="bg-white rounded-lg p-4 border border-green-200">
                <div class="font-semibold text-gray-900 mb-2">账号系统</div>
                <p class="text-sm text-gray-600">打通内部的账号系统与外部平台生态</p>
              </div>
            </div>
          </div>

          <!-- 中层：模型层 -->
          <div class="card bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">3</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">中层：模型层（写作算法）</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 ml-16">
              <div class="bg-white rounded-lg p-4 border border-yellow-200">
                <div class="font-semibold text-gray-900 mb-2">资讯模板</div>
              </div>
              <div class="bg-white rounded-lg p-4 border border-yellow-200">
                <div class="font-semibold text-gray-900 mb-2">测评模板</div>
              </div>
              <div class="bg-white rounded-lg p-4 border border-yellow-200">
                <div class="font-semibold text-gray-900 mb-2">写作框架</div>
              </div>
              <div class="bg-white rounded-lg p-4 border border-yellow-200">
                <div class="font-semibold text-gray-900 mb-2">语言风格</div>
              </div>
            </div>
          </div>

          <!-- 底层：能量与数据中心 -->
          <div class="card bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">4</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">底层：能量与数据中心</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 ml-16">
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <div class="font-semibold text-gray-900 mb-2">账号池</div>
                <p class="text-sm text-gray-600">多平台账号池</p>
              </div>
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <div class="font-semibold text-gray-900 mb-2">资源库</div>
                <p class="text-sm text-gray-600">测评用例等资源</p>
              </div>
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <div class="font-semibold text-gray-900 mb-2">脚本库</div>
                <p class="text-sm text-gray-600">投流与风控体系</p>
              </div>
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <div class="font-semibold text-gray-900 mb-2">狠活引擎</div>
                <p class="text-sm text-gray-600">增长工具与数据支撑</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Roles Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            三大角色，协同作战
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            生产者、放大者、驱动者，构建完整的创作者生态体系
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 生产者 -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">生产者（矩阵联盟）</h3>
            <p class="text-gray-600 mb-6">
              提供可复用内容部件，标准化生产流程，确保内容质量和一致性
            </p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li>• 模板化内容生产</li>
              <li>• 部件化内容库</li>
              <li>• AI辅助创作</li>
              <li>• 质量标准化</li>
            </ul>
          </div>

          <!-- 放大者 -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 bg-matrix-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-matrix-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">放大者（博主联盟）</h3>
            <p class="text-gray-600 mb-6">
              负责分发与放大，多平台矩阵运营，最大化内容传播效果
            </p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li>• 多平台分发</li>
              <li>• 账号矩阵管理</li>
              <li>• 数据驱动优化</li>
              <li>• 增长策略执行</li>
            </ul>
          </div>

          <!-- 驱动者 -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">驱动者（系统中枢）</h3>
            <p class="text-gray-600 mb-6">
              数据、工具、结算与风控，为整个生态提供技术支撑和运营保障
            </p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li>• 数据分析与洞察</li>
              <li>• 自动化工具</li>
              <li>• 智能结算系统</li>
              <li>• 风控与合规</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心功能模块
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            从内容生产到分发结算，全链路数字化管理
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.name" class="card-hover">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.iconPath" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{{ feature.name }}</h3>
            </div>
            <p class="text-gray-600 mb-4">{{ feature.description }}</p>
            <router-link :to="feature.href" class="text-primary-600 hover:text-primary-700 font-medium">
              了解更多 →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Matrix Strategy Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            多号矩阵策略
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            1套内容 → N个平台分发 · 用矩阵化生产力对抗单账号不确定性
          </p>
        </div>

        <div class="card bg-gradient-to-r from-primary-50 to-matrix-50 mb-8">
          <div class="text-center mb-8">
            <div class="text-5xl font-bold text-primary-600 mb-4">1套内容 = N份收益</div>
            <p class="text-xl text-gray-700 mb-2">垂直领域账号 × 多平台分发 = 无限收益可能</p>
            <p class="text-gray-600">不限于平台数量，每个垂直号都可以在多个平台分发</p>
          </div>
          
          <!-- 平台示例（不限制数量） -->
          <div class="mb-6">
            <p class="text-sm text-gray-600 mb-4">支持平台（示例）：</p>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <div v-for="platform in platforms" :key="platform.name" class="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-primary-300 transition-colors">
                <div class="text-2xl mb-2">{{ platform.icon }}</div>
                <div class="text-sm font-medium text-gray-900">{{ platform.name }}</div>
              </div>
            </div>
            <p class="text-xs text-gray-500 mt-4">+ 更多平台支持中...</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="card text-center">
            <div class="text-3xl mb-4">🎯</div>
            <h3 class="font-semibold text-gray-900 mb-2">垂直领域账号</h3>
            <p class="text-gray-600 text-sm">一个垂直领域一个账号，专注特定主题</p>
          </div>
          <div class="card text-center">
            <div class="text-3xl mb-4">📱</div>
            <h3 class="font-semibold text-gray-900 mb-2">多平台分发</h3>
            <p class="text-gray-600 text-sm">每个垂直号可在多个平台分发，1对N关系</p>
          </div>
          <div class="card text-center">
            <div class="text-3xl mb-4">🔢</div>
            <h3 class="font-semibold text-gray-900 mb-2">多账号矩阵</h3>
            <p class="text-gray-600 text-sm">每个人可以建立多个垂直号，形成矩阵</p>
          </div>
        </div>

        <!-- 策略说明 -->
        <div class="card bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200">
          <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">矩阵策略逻辑</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">垂直账号 × 多平台 = 放大收益</h4>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">✓</span>
                  <span>科技垂直号 → 掘金、CSDN、知乎、公众号...</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">✓</span>
                  <span>生活垂直号 → 小红书、B站、抖音、头条...</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">✓</span>
                  <span>1套内容可以适配多个平台，不受平台数量限制</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">多垂直号 × 多平台 = 矩阵效应</h4>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start">
                  <span class="text-primary-600 mr-2">✓</span>
                  <span>每个人可以建立多个垂直领域账号</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-600 mr-2">✓</span>
                  <span>每个垂直号可以在多个平台分发</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-600 mr-2">✓</span>
                  <span>形成"垂直号矩阵 × 平台矩阵"的放大效应</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats & Vision Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            数据战报 & 愿景目标
          </h2>
          <p class="text-xl text-gray-600">实时数据，见证成长 · 未来一年，我们的目标</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Vision Goals -->
        <div class="card bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">未来一年目标</h3>
            <p class="text-lg text-gray-700">让普通人也能拥有系统化内容能力</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg p-6 border border-green-200 text-center">
              <div class="text-4xl font-bold text-green-600 mb-2">30</div>
              <div class="text-lg font-semibold text-gray-900 mb-2">个 1w+ 粉丝</div>
              <div class="text-sm text-gray-600">多平台账号</div>
            </div>
            <div class="bg-white rounded-lg p-6 border border-green-200 text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">10</div>
              <div class="text-lg font-semibold text-gray-900 mb-2">个 5w+ 粉丝</div>
              <div class="text-sm text-gray-600">高粘性内容矩阵</div>
            </div>
            <div class="bg-white rounded-lg p-6 border border-green-200 text-center">
              <div class="text-4xl font-bold text-purple-600 mb-2">3</div>
              <div class="text-lg font-semibold text-gray-900 mb-2">个 10w+ 粉丝</div>
              <div class="text-sm text-gray-600">垂类内容品牌</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-matrix-600">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          加入矩阵联盟
        </h2>
        <p class="text-xl text-primary-100 mb-8">
          不是靠灵感，而是靠架构；不是靠爆文，而是靠协作；不是靠激情，而是靠循环
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/tasks" class="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-center">
            立即注册
          </router-link>
          <router-link to="/brand" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-center">
            品牌合作
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    name: '任务市场',
    description: '双边撮合，智能匹配创作者与品牌需求',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    href: '/tasks'
  },
  {
    name: '内容工厂',
    description: '部件化生产，模板化创作，AI辅助优化',
    iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    href: '/content'
  },
  {
    name: '分发中心',
    description: '多平台矩阵，智能编排，数据追踪 · 1套内容=N份收益',
    iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    href: '/distribution'
  },
  {
    name: '狠活引擎',
    description: '投流监控、复用追踪、增长工具 · 底层能量与数据中心',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    href: '/growth-engine'
  },
  {
    name: '创作工坊',
    description: '协作社区、互赞体系、成长学院、起号加速',
    iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    href: '/workshop'
  },
  {
    name: '数据分析',
    description: '全链路归因，ROI分析，智能洞察',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    href: '/analytics'
  },
  {
    name: '结算中心',
    description: '自动化结算，透明分成，风控保障',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    href: '/wallet'
  },
  {
    name: '联盟中枢',
    description: '创作者档案，账号资产，信用体系',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    href: '/alliance'
  }
])

const platforms = ref([
  { name: '掘金', icon: '📝' },
  { name: 'CSDN', icon: '💻' },
  { name: '小红书', icon: '📕' },
  { name: '知乎', icon: '❓' },
  { name: '头条', icon: '📰' },
  { name: 'B站', icon: '🎬' },
  { name: 'X', icon: '🐦' }
])

const stats = ref([
  { value: '1,200+', label: '活跃创作者' },
  { value: '50,000+', label: '内容部件' },
  { value: '2.5M+', label: '月分发量' },
  { value: '95%', label: '客户满意度' }
])
</script>
