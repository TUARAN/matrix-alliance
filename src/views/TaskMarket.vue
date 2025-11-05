<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">任务市场</h1>
        <p class="text-gray-600">连接品牌方、博主联盟与矩阵号联盟，实现内容价值最大化</p>
      </div>

      <!-- Role Toggle -->
      <div class="card mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">选择您的角色</h3>
          <p class="text-sm text-gray-600">明确区分博主联盟（放大者）和矩阵号联盟（生产者）</p>
        </div>
        <div class="flex items-center justify-center flex-wrap gap-3">
          <button 
            @click="activeRole = 'buyer'"
            class="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2"
            :class="activeRole === 'buyer' 
              ? 'bg-primary-600 text-white shadow-lg scale-105' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>品牌方</span>
          </button>
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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div class="text-center">
              <div class="font-semibold text-gray-900 mb-1">品牌方</div>
              <div class="text-gray-600">发布任务，选择账号投放</div>
            </div>
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

      <!-- Buyer View: 选择账号 + 发布任务 -->
      <div v-if="activeRole === 'buyer'">
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
            <button class="btn-primary">+ 发布任务</button>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="text-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 cursor-pointer">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 class="font-medium text-gray-900 mb-1">资讯快写</h3>
              <p class="text-sm text-gray-500">快速产出资讯内容</p>
            </div>
            
            <div class="text-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 cursor-pointer">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="font-medium text-gray-900 mb-1">深度测评</h3>
              <p class="text-sm text-gray-500">专业产品测评</p>
            </div>
            
            <div class="text-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 cursor-pointer">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="font-medium text-gray-900 mb-1">长文整包</h3>
              <p class="text-sm text-gray-500">完整长文创作</p>
            </div>
            
            <div class="text-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 cursor-pointer">
              <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="font-medium text-gray-900 mb-1">分发放大</h3>
              <p class="text-sm text-gray-500">多平台内容分发</p>
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
              <button class="btn-primary">确认选择并发布任务</button>
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
            <select class="input-field">
              <option>全部类型</option>
              <option>品牌广告</option>
              <option>产品测评</option>
              <option>内容分发</option>
            </select>
            <select class="input-field">
              <option>全部预算</option>
              <option>1000-5000元</option>
              <option>5000-10000元</option>
              <option>10000元以上</option>
            </select>
            <select class="input-field">
              <option>全部平台</option>
              <option>微信公众号</option>
              <option>知乎</option>
              <option>掘金</option>
            </select>
            <button class="btn-matrix">筛选</button>
          </div>
        </div>

        <!-- Available Tasks -->
        <div class="card mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">可接任务（博主联盟）</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="task in bloggerTasks" :key="task.id" class="border border-matrix-200 rounded-lg p-6 hover:border-matrix-400 transition-colors bg-gradient-to-br from-white to-matrix-50">
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
                <button class="btn-matrix">立即申请</button>
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
            <select class="input-field">
              <option>全部类型</option>
              <option>资讯快写</option>
              <option>深度测评</option>
              <option>长文整包</option>
              <option>分发放大</option>
            </select>
            <select class="input-field">
              <option>全部预算</option>
              <option>100-500元</option>
              <option>500-1000元</option>
              <option>1000-5000元</option>
              <option>5000元以上</option>
            </select>
            <select class="input-field">
              <option>全部难度</option>
              <option>简单</option>
              <option>中等</option>
              <option>困难</option>
            </select>
            <button class="btn-primary">筛选</button>
          </div>
        </div>

        <!-- Available Tasks -->
        <div class="card mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">可接任务（矩阵号联盟）</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="task in availableTasks" :key="task.id" class="border border-green-200 rounded-lg p-6 hover:border-green-400 transition-colors bg-gradient-to-br from-white to-green-50">
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
                <button class="btn-primary">立即申请</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seller View: 接任务（兼容旧逻辑，保留给矩阵号联盟） -->
      <div v-if="activeRole === 'seller'">
        <!-- Filters -->
        <div class="card mb-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select class="input-field">
              <option>全部类型</option>
              <option>资讯快写</option>
              <option>深度测评</option>
              <option>长文整包</option>
              <option>分发放大</option>
            </select>
            <select class="input-field">
              <option>全部预算</option>
              <option>100-500元</option>
              <option>500-1000元</option>
              <option>1000-5000元</option>
              <option>5000元以上</option>
            </select>
            <select class="input-field">
              <option>全部难度</option>
              <option>简单</option>
              <option>中等</option>
              <option>困难</option>
            </select>
            <button class="btn-primary">筛选</button>
          </div>
        </div>

        <!-- Available Tasks -->
        <div class="card mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">可接任务</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="task in availableTasks" :key="task.id" class="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
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
                <button class="btn-primary">立即申请</button>
              </div>
            </div>
          </div>
        </div>

        <!-- My Applications -->
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">我的申请</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">任务标题</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">预算</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">申请时间</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="application in myApplications" :key="application.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ application.title }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="badge-gray">{{ application.type }}</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">¥{{ application.budget }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="getStatusBadgeClass(application.status)">
                      {{ application.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ application.applyTime }}</td>
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeRole = ref('buyer') // 'buyer'（品牌方）、'blogger'（博主联盟）、'matrix'（矩阵号联盟）、'seller'（兼容）

// 账号选择相关状态
const selectedAccounts = ref([])
const showSelectedAccounts = ref(false)
const accountFilters = ref({
  platform: '',
  category: '',
  followers: ''
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
    name: 'AI技术专家',
    platform: '知乎',
    category: '科技',
    followers: '8.3万',
    weight: 92,
    price: 1200
  },
  {
    id: 3,
    name: '前端开发',
    platform: '掘金',
    category: '科技',
    followers: '5.2万',
    weight: 78,
    price: 600
  },
  {
    id: 4,
    name: '技术博客',
    platform: 'CSDN',
    category: '科技',
    followers: '3.8万',
    weight: 65,
    price: 500
  },
  {
    id: 5,
    name: '生活小确幸',
    platform: '小红书',
    category: '生活',
    followers: '15.6万',
    weight: 88,
    price: 1000
  },
  {
    id: 6,
    name: '财经观察家',
    platform: '微信公众号',
    category: '财经',
    followers: '22.1万',
    weight: 95,
    price: 1500
  },
  {
    id: 7,
    name: '教育达人',
    platform: '知乎',
    category: '教育',
    followers: '6.7万',
    weight: 82,
    price: 900
  },
  {
    id: 8,
    name: '产品经理笔记',
    platform: '掘金',
    category: '科技',
    followers: '4.9万',
    weight: 75,
    price: 700
  }
])

// 筛选后的账号列表
const filteredAccounts = ref([...matrixAccounts.value])

// 品牌方（买方）的任务数据
const myTasks = ref([
  {
    id: 1,
    type: '资讯快写',
    title: 'AI工具测评文章',
    description: '需要撰写一篇关于最新AI工具的资讯文章，要求2000字，包含使用体验和对比分析',
    budget: 800,
    deadline: '3天内',
    status: '进行中',
    applicants: 12,
    progress: 75
  },
  {
    id: 2,
    type: '深度测评',
    title: '新能源汽车深度测评',
    description: '对某品牌新能源汽车进行全方位测评，包括性能、续航、智能化等方面',
    budget: 2000,
    deadline: '1周内',
    status: '待审核',
    applicants: 8,
    progress: 100
  },
  {
    id: 3,
    type: '长文整包',
    title: '区块链技术发展报告',
    description: '撰写一份10000字的区块链技术发展报告，需要深度调研和数据分析',
    budget: 5000,
    deadline: '2周内',
    status: '招募中',
    applicants: 5,
    progress: 0
  }
])

// 博主联盟（放大者）可接的任务数据
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

// 矩阵号联盟（生产者）可接的任务数据
const availableTasks = ref([
  {
    id: 1,
    type: '资讯快写',
    difficulty: '简单',
    title: '科技资讯快写 - AI工具测评',
    description: '需要撰写一篇关于最新AI工具的资讯文章，要求2000字，包含使用体验和对比分析',
    budget: 800,
    deadline: '3天内',
    applicants: 12,
    rating: 4.8
  },
  {
    id: 2,
    type: '深度测评',
    difficulty: '中等',
    title: '新能源汽车深度测评',
    description: '对某品牌新能源汽车进行全方位测评，包括性能、续航、智能化等方面',
    budget: 2000,
    deadline: '1周内',
    applicants: 8,
    rating: 4.9
  },
  {
    id: 3,
    type: '长文整包',
    difficulty: '困难',
    title: '区块链技术发展报告',
    description: '撰写一份10000字的区块链技术发展报告，需要深度调研和数据分析',
    budget: 5000,
    deadline: '2周内',
    applicants: 5,
    rating: 4.7
  },
  {
    id: 4,
    type: '分发放大',
    difficulty: '简单',
    title: '产品推广内容分发',
    description: '将产品介绍内容分发到各大平台，包括标题优化、封面设计等',
    budget: 1200,
    deadline: '5天内',
    applicants: 15,
    rating: 4.6
  }
])

// 我的申请记录
const myApplications = ref([
  {
    id: 1,
    title: 'AI工具测评文章',
    type: '资讯快写',
    budget: 800,
    status: '已通过',
    applyTime: '2024-01-15 10:30'
  },
  {
    id: 2,
    title: '产品推广内容分发',
    type: '分发放大',
    budget: 1200,
    status: '审核中',
    applyTime: '2024-01-14 15:20'
  },
  {
    id: 3,
    title: '区块链技术发展报告',
    type: '长文整包',
    budget: 5000,
    status: '已拒绝',
    applyTime: '2024-01-13 09:15'
  }
])

// 账号选择相关方法
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
    // 如果全部选中，则取消全选
    selectedAccounts.value = []
  } else {
    // 否则全选当前筛选结果
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

const filterAccounts = () => {
  filteredAccounts.value = matrixAccounts.value.filter(account => {
    const platformMatch = !accountFilters.value.platform || account.platform === accountFilters.value.platform
    const categoryMatch = !accountFilters.value.category || account.category === accountFilters.value.category
    const followersMatch = !accountFilters.value.followers || checkFollowersRange(account.followers, accountFilters.value.followers)
    return platformMatch && categoryMatch && followersMatch
  })
}

const checkFollowersRange = (followers, range) => {
  const num = parseFloat(followers)
  switch (range) {
    case '0-1万': return num <= 1
    case '1-10万': return num > 1 && num <= 10
    case '10-50万': return num > 10 && num <= 50
    case '50万+': return num > 50
    default: return true
  }
}

const totalBudget = computed(() => {
  return selectedAccounts.value.reduce((total, accountId) => {
    const account = getAccountById(accountId)
    return total + (account.price || 0)
  }, 0)
})

const getStatusBadgeClass = (status) => {
  const classes = {
    '已通过': 'badge-matrix',
    '审核中': 'badge bg-yellow-100 text-yellow-800',
    '已拒绝': 'badge bg-red-100 text-red-800',
    '进行中': 'badge-matrix',
    '待审核': 'badge bg-yellow-100 text-yellow-800',
    '招募中': 'badge-gray'
  }
  return classes[status] || 'badge-gray'
}
</script>
