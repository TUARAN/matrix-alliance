<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          品牌合作
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          品牌不再需要"一个大号"，而是一支"创作军团"<br>
          构建去中心化内容系统，让品牌价值持续占领用户心智
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/tasks/publish" class="btn-primary text-lg px-8 py-3 text-center">
            发布任务
          </router-link>
          <button class="btn-secondary text-lg px-8 py-3">
            查看案例
          </button>
          <a 
            href="https://csdn-fans-tracker.pages.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-matrix text-lg px-8 py-3 text-center"
          >
            矩阵示例
          </a>
        </div>
      </div>

      <!-- 痛点与解决方案 -->
      <div class="card mb-12 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">❌ 品牌投放正在失效</h2>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-red-600 mr-2">•</span>
                <span>单一大号投放成本高、效果不稳定</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-2">•</span>
                <span>平台流量越来越"不可控"</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-2">•</span>
                <span>品牌传播缺少持续性和深度</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-2">•</span>
                <span>无法形成长期内容护城河</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">✅ 矩阵联盟解决方案</h2>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <span><strong>去中心化内容系统</strong>：多账号、多平台协同</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <span><strong>成本可控的复利增长</strong>：一套内容多平台分发</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <span><strong>长期内容护城河</strong>：持续占领用户心智</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <span><strong>认知系统构建</strong>：行业谁提问题，你来回答</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 三层能力 -->
      <div class="mb-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">三层能力，构建品牌内容体系</h2>
          <p class="text-xl text-gray-600">内容生产 · 矩阵分发 · 技术与策略</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- 内容生产 -->
          <div class="card-hover">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">1. 内容生产</h3>
            <p class="text-gray-600 mb-6">多账号、多风格、多场景的专业内容生产</p>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>行业干货 + 用户体验内容</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>专业测评 + 真实体验记录</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>系列化内容运营</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>品牌理念与产品深度解析</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>数据说服性 POC</span>
              </li>
            </ul>
          </div>

          <!-- 矩阵分发 -->
          <div class="card-hover">
            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">2. 矩阵分发</h3>
            <p class="text-gray-600 mb-6">多平台全域协同，1份内容 → 多版本生产 → 多节点扩散</p>
            <div class="bg-gray-50 rounded-lg p-4 mb-4">
              <div class="text-sm font-medium text-gray-900 mb-2">覆盖平台：</div>
              <div class="flex flex-wrap gap-2">
                <span class="badge-gray">掘金</span>
                <span class="badge-gray">CSDN</span>
                <span class="badge-gray">知乎</span>
                <span class="badge-gray">小红书</span>
                <span class="badge-gray">B站</span>
                <span class="badge-gray">抖音</span>
                <span class="badge-gray">X</span>
                <span class="badge-gray">Medium</span>
              </div>
            </div>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>知识平台 + 社交平台 + 国际平台</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>复用品牌资产，长期积累</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>不再赌一个 KOL，构建内容护城河</span>
              </li>
            </ul>
          </div>

          <!-- 技术与策略 -->
          <div class="card-hover">
            <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">3. 技术与策略</h3>
            <p class="text-gray-600 mb-6">AIGC + 内容中台，构建引导市场认知的系统</p>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>内容知识库沉淀系统</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>多账号协同与风控 SOP</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>AIGC 能力与内容协作模型</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>分发与效果追踪工具</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-600 mr-2">✓</span>
                <span>品牌传播模型（Sector → Tactical Narrative → Scenario）</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 价值展示 -->
      <div class="card mb-12 bg-gradient-to-r from-primary-50 to-matrix-50">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">品牌 x 内容矩阵 = 成本可控的复利增长模型</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-3">-60%</div>
            <div class="text-lg font-semibold text-gray-900 mb-2">成本降低</div>
            <div class="text-gray-600">相比单一大号投放，成本降低60%</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-600 mb-3">+320%</div>
            <div class="text-lg font-semibold text-gray-900 mb-2">ROI提升</div>
            <div class="text-gray-600">通过矩阵分发，ROI平均提升320%</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-3">N倍</div>
            <div class="text-lg font-semibold text-gray-900 mb-2">曝光倍数</div>
            <div class="text-gray-600">一套内容多平台分发，曝光倍数放大（1对N关系，不限于平台数量）</div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-200 text-center">
          <p class="text-xl font-semibold text-gray-900 mb-2">最终目标</p>
          <p class="text-lg text-gray-700">行业谁提问题，你来回答；行业谁搜索，你是答案。</p>
        </div>
      </div>

      <!-- 合作形式 -->
      <div class="mb-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">品牌合作形式</h2>
          <p class="text-xl text-gray-600">灵活的合作方案，满足不同品牌需求</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card-hover">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-primary-600 text-2xl">📋</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">内容生产包</h3>
            <p class="text-gray-600 mb-4">专业团队创作品牌内容，多风格、多场景</p>
            <ul class="space-y-2 text-sm text-gray-600 mb-6">
              <li>• 行业干货 + 用户体验内容</li>
              <li>• 专业测评 + 真实体验</li>
              <li>• 系列化内容运营</li>
            </ul>
            <div class="text-lg font-bold text-primary-600 mb-4">¥5,000 - ¥20,000/月</div>
            <button class="btn-primary w-full">了解详情</button>
          </div>

          <div class="card-hover">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-green-600 text-2xl">🚀</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">矩阵分发服务</h3>
            <p class="text-gray-600 mb-4">多平台矩阵分发，最大化内容曝光</p>
            <ul class="space-y-2 text-sm text-gray-600 mb-6">
              <li>• 7+平台同步分发</li>
              <li>• 智能编排与优化</li>
              <li>• 数据追踪与分析</li>
            </ul>
            <div class="text-lg font-bold text-green-600 mb-4">¥3,000 - ¥15,000/月</div>
            <button class="btn-primary w-full">了解详情</button>
          </div>

          <div class="card-hover">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-purple-600 text-2xl">🎯</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">全案服务</h3>
            <p class="text-gray-600 mb-4">内容生产 + 矩阵分发 + 策略指导</p>
            <ul class="space-y-2 text-sm text-gray-600 mb-6">
              <li>• 完整内容体系搭建</li>
              <li>• 多平台矩阵运营</li>
              <li>• 长期内容护城河构建</li>
            </ul>
            <div class="text-lg font-bold text-purple-600 mb-4">¥15,000 - ¥50,000/月</div>
            <button class="btn-primary w-full">了解详情</button>
          </div>
        </div>
      </div>

      <!-- 成功案例 -->
      <div class="card mb-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">成功案例</h2>
          <p class="text-xl text-gray-600">真实数据，见证品牌成长</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="border border-gray-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold">A</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">SaaS品牌A</h3>
                <p class="text-sm text-gray-500">科技/企业服务</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">通过矩阵联盟，3个月内实现品牌认知度提升300%，内容资产沉淀156篇，通过垂直账号矩阵在多平台分发。</p>
            <div class="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div class="text-gray-600">曝光量</div>
                <div class="font-bold text-gray-900">2.5M+</div>
              </div>
              <div>
                <div class="text-gray-600">ROI</div>
                <div class="font-bold text-green-600">420%</div>
              </div>
              <div>
                <div class="text-gray-600">成本降低</div>
                <div class="font-bold text-primary-600">-65%</div>
              </div>
            </div>
          </div>

          <div class="border border-gray-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold">B</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">AI工具品牌B</h3>
                <p class="text-sm text-gray-500">AI/科技</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">通过专业内容矩阵，6个月内建立行业权威地位，搜索相关问题时，品牌内容出现在前3页。</p>
            <div class="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div class="text-gray-600">内容资产</div>
                <div class="font-bold text-gray-900">289篇</div>
              </div>
              <div>
                <div class="text-gray-600">搜索排名</div>
                <div class="font-bold text-green-600">Top 3</div>
              </div>
              <div>
                <div class="text-gray-600">品牌认知</div>
                <div class="font-bold text-primary-600">+280%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 适用行业 -->
      <div class="card mb-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">适用行业</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <span class="badge-primary text-lg px-6 py-2">科技</span>
          <span class="badge-primary text-lg px-6 py-2">SaaS</span>
          <span class="badge-primary text-lg px-6 py-2">AI</span>
          <span class="badge-primary text-lg px-6 py-2">教育</span>
          <span class="badge-primary text-lg px-6 py-2">消费品</span>
          <span class="badge-primary text-lg px-6 py-2">企业服务</span>
          <span class="badge-primary text-lg px-6 py-2">创新品牌</span>
        </div>
      </div>

      <!-- CTA -->
      <div class="card bg-gradient-to-r from-primary-600 to-matrix-600 text-white text-center">
        <h2 class="text-3xl font-bold mb-4">期待合作</h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          矩阵联盟不是"投放工具"，而是品牌的内容增长伙伴 + 渠道孵化器。<br>
          我们一起跑通一个可复用的内容增长模型。
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/tasks/publish" class="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-center">
            发布任务
          </router-link>
          <button class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            查看详细方案
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面逻辑
</script>

