<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-600 to-matrix-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">M</span>
            </div>
            <span class="text-xl font-bold text-gray-900">矩阵联盟</span>
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden lg:flex items-center space-x-1">
          <!-- 主要导航项 -->
          <a
            v-for="item in mainNavItems" 
            :key="item.name"
            href="javascript:void(0)"
            @click="handleNavClick(item)"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1"
            :class="{
              'text-primary-600 bg-primary-50 font-semibold': $route.name === item.name,
              'text-gray-700 hover:text-primary-600 hover:bg-gray-50': $route.name !== item.name
            }"
          >
            <span>{{ item.label }}</span>
            <span v-if="isProtectedRoute(item.name)" class="text-xs text-amber-600 flex items-center">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </a>
          
          <!-- 更多菜单（下拉） -->
          <div class="relative group">
            <button class="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-1">
              <span>更多</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- 下拉菜单 -->
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="py-2">
                <a
                  v-for="item in moreNavItems" 
                  :key="item.name"
                  href="javascript:void(0)"
                  @click="handleNavClick(item)"
                  class="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                  :class="{ 'bg-primary-50 text-primary-600': $route.name === item.name }"
                >
                  <span>{{ item.label }}</span>
                  <span v-if="isProtectedRoute(item.name)" class="ml-2 text-xs text-amber-600 flex items-center">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 移动端简化的导航 -->
        <div class="flex lg:hidden items-center space-x-2 overflow-x-auto scrollbar-hide">
          <router-link 
            v-for="item in mainNavItems.slice(0, 3)" 
            :key="item.name"
            :to="item.href"
            class="px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200"
            :class="{
              'text-primary-600 bg-primary-50 font-semibold': $route.name === item.name,
              'text-gray-700 hover:text-primary-600 hover:bg-gray-50': $route.name !== item.name
            }"
          >
            {{ item.label }}
          </router-link>
        </div>

        <!-- User Menu -->
        <div class="flex items-center space-x-3">
          <button 
            @click="handleLogin"
            class="hidden md:block text-sm font-medium text-gray-700 hover:text-primary-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            登录
          </button>
          <button 
            @click="handleRegister"
            class="btn-primary text-sm px-4 py-2"
          >
            注册
          </button>
          
          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-200 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div class="space-y-1">
          <a
            v-for="item in navItems" 
            :key="item.name"
            href="javascript:void(0)"
            @click="handleNavClick(item); mobileMenuOpen = false"
            class="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer"
            :class="{
              'text-primary-600 bg-primary-50 font-semibold': $route.name === item.name,
              'text-gray-700 hover:text-primary-600 hover:bg-gray-50': $route.name !== item.name
            }"
          >
            <span>{{ item.label }}</span>
            <span v-if="isProtectedRoute(item.name)" class="ml-2 text-xs text-amber-600 flex items-center">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </a>
        </div>
        <div class="mt-4 pt-4 border-t border-gray-200 flex space-x-3">
          <button 
            @click="handleLogin"
            class="flex-1 py-2 px-4 rounded-lg text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            登录
          </button>
          <button 
            @click="handleRegister"
            class="flex-1 btn-primary text-sm"
          >
            注册
          </button>
        </div>
      </div>
    </div>

    <!-- Auth Modal -->
    <div 
      v-if="showAuthModal"
      @click.self="showAuthModal = false"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-6" @click.stop>
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">
            {{ authMode === 'admin' ? '管理员登录' : authMode === 'login' ? '登录' : '注册' }}
          </h2>
          <button 
            @click="showAuthModal = false"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- 登录模式切换 -->
        <div v-if="authMode !== 'register'" class="mb-4 flex space-x-2 border-b border-gray-200">
          <button
            @click="authMode = 'login'; password = ''; adminUsername = ''; loginError = ''"
            class="flex-1 py-2 text-sm font-medium transition-colors"
            :class="authMode === 'login' 
              ? 'text-primary-600 border-b-2 border-primary-600' 
              : 'text-gray-500 hover:text-gray-700'"
          >
            普通登录
          </button>
          <button
            @click="authMode = 'admin'; password = ''; adminUsername = ''; loginError = ''"
            class="flex-1 py-2 text-sm font-medium transition-colors"
            :class="authMode === 'admin' 
              ? 'text-primary-600 border-b-2 border-primary-600' 
              : 'text-gray-500 hover:text-gray-700'"
          >
            管理员登录
          </button>
        </div>

        <form @submit.prevent="authMode === 'admin' ? handleAdminLoginSubmit() : authMode === 'login' ? handleLoginSubmit() : handleRegisterSubmit()" class="space-y-4">
          <div v-if="authMode === 'admin'">
            <label class="block text-sm font-medium text-gray-700 mb-2">管理员账号</label>
            <input 
              ref="usernameInput"
              v-model="adminUsername"
              type="text" 
              required
              class="input-field"
              placeholder="请输入管理员账号"
            />
          </div>
          
          <div v-if="authMode !== 'admin'">
            <label class="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
            <input 
              type="email" 
              required
              class="input-field"
              placeholder="请输入您的邮箱"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              {{ authMode === 'admin' ? '管理员密码' : '密码' }}
            </label>
            <input 
              ref="passwordInput"
              v-model="password"
              type="password" 
              required
              class="input-field"
              :placeholder="authMode === 'admin' ? '请输入管理员密码' : '请输入密码'"
            />
            <p v-if="authMode === 'admin' && loginError" class="mt-1 text-sm text-red-600">{{ loginError }}</p>
          </div>

          <div v-if="authMode === 'register'">
            <label class="block text-sm font-medium text-gray-700 mb-2">确认密码</label>
            <input 
              type="password" 
              required
              class="input-field"
              placeholder="请再次输入密码"
            />
          </div>

          <div v-if="authMode === 'login'" class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="rounded border-gray-300 text-primary-600 focus:ring-primary-500">
              <span class="ml-2 text-sm text-gray-600">记住我</span>
            </label>
            <a href="#" class="text-sm text-primary-600 hover:text-primary-700">忘记密码？</a>
          </div>

          <button type="submit" class="btn-primary w-full">
            {{ authMode === 'admin' ? '管理员登录' : authMode === 'login' ? '登录' : '注册' }}
          </button>
        </form>

        <div v-if="authMode !== 'admin'" class="mt-6 text-center">
          <button 
            @click="authMode = authMode === 'login' ? 'register' : 'login'"
            class="text-sm text-primary-600 hover:text-primary-700"
          >
            {{ authMode === 'login' ? '还没有账号？立即注册' : '已有账号？立即登录' }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const mobileMenuOpen = ref(false)
const showAuthModal = ref(false)
const authMode = ref('login') // 'login', 'register', or 'admin'
const adminUsername = ref('')
const password = ref('')
const loginError = ref('')
const usernameInput = ref(null)
const passwordInput = ref(null)
const pendingRoute = ref(null) // 存储待访问的路由
const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
auth.init()

// 管理员账号密码（暂时硬编码）
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'Admin123'

// Open login modal if redirected with ?login=1
watch(
  () => route.query.login,
  (val) => {
    if (val === '1') {
      showAuthModal.value = true
    }
  },
  { immediate: true }
)

const handleLogin = () => {
  authMode.value = 'login'
  showAuthModal.value = true
  mobileMenuOpen.value = false
  // TODO: 实现登录逻辑或跳转到登录页面
  console.log('打开登录')
}

const handleRegister = () => {
  authMode.value = 'register'
  showAuthModal.value = true
  mobileMenuOpen.value = false
  // TODO: 实现注册逻辑或跳转到注册页面
  console.log('打开注册')
}

const handleLoginSubmit = () => {
  // 简单模拟登录成功，持久化标记
  auth.login({ email: 'user@example.com' })
  showAuthModal.value = false
  
  // 如果有待访问的路由，登录成功后跳转
  if (pendingRoute.value) {
    router.push(pendingRoute.value)
    pendingRoute.value = null
  }
  
  // 清除任何 login 提示参数
  if (route.query.login) {
    router.replace({ path: route.path, query: {} })
  }
}

const handleRegisterSubmit = () => {
  auth.login({ email: 'user@example.com' })
  showAuthModal.value = false
  
  // 如果有待访问的路由，注册成功后跳转
  if (pendingRoute.value) {
    router.push(pendingRoute.value)
    pendingRoute.value = null
  }
  
  if (route.query.login) {
    router.replace({ path: route.path, query: {} })
  }
}

const handleAdminLoginSubmit = () => {
  loginError.value = ''
  
  // 验证管理员账号和密码
  if (adminUsername.value === ADMIN_USERNAME && password.value === ADMIN_PASSWORD) {
    // 登录成功
    auth.login({ 
      email: 'admin@matrix-alliance.com',
      username: ADMIN_USERNAME,
      role: 'admin',
      isAdmin: true
    })
    adminUsername.value = ''
    password.value = ''
    showAuthModal.value = false
    
    // 如果有待访问的路由，登录成功后跳转
    if (pendingRoute.value) {
      router.push(pendingRoute.value)
      pendingRoute.value = null
    }
    
    // 清除任何 login 提示参数
    if (route.query.login) {
      router.replace({ path: route.path, query: {} })
    }
  } else {
    // 账号或密码错误
    if (adminUsername.value !== ADMIN_USERNAME) {
      loginError.value = '账号错误，请重新输入'
      adminUsername.value = ''
      // 聚焦到账号输入框
      setTimeout(() => {
        if (usernameInput.value) {
          usernameInput.value.focus()
        }
      }, 100)
    } else {
      loginError.value = '密码错误，请重新输入'
      password.value = ''
      // 聚焦到密码输入框
      setTimeout(() => {
        if (passwordInput.value) {
          passwordInput.value.focus()
        }
      }, 100)
    }
  }
}

// 判断是否为需要登录的路由
const isProtectedRoute = (routeName) => {
  const protectedRoutes = ['ClaimTasks', 'GrowthEngine', 'Analytics', 'Wallet', 'AllianceCore']
  return protectedRoutes.includes(routeName)
}

// 处理导航点击，检查登录状态
const handleNavClick = (item) => {
  if (isProtectedRoute(item.name)) {
    // 检查登录状态
    if (!auth.isAuthenticated) {
      // 未登录，保存待访问的路由，阻止导航并弹出登录框
      pendingRoute.value = item.href
      showAuthModal.value = true
      authMode.value = 'login'
      return false
    }
  }
  
  // 已登录或无需登录，正常导航
  router.push(item.href)
}

// 所有导航项
const allNavItems = [
  { name: 'Home', label: '首页', href: '/' },
  { name: 'ClaimTasks', label: '认领任务', href: '/tasks/claim' },
  { name: 'PublishTasks', label: '发布任务', href: '/tasks/publish' },
  { name: 'ContentFactory', label: '内容工厂', href: '/content' },
  { name: 'DistributionCenter', label: '分发中心', href: '/distribution' },
  { name: 'Workshop', label: '创作工坊', href: '/workshop' },
  { name: 'GrowthEngine', label: '狠活引擎', href: '/growth-engine' },
  { name: 'Analytics', label: '数据分析', href: '/analytics' },
  { name: 'Wallet', label: '结算中心', href: '/wallet' },
  { name: 'AllianceCore', label: '联盟中枢', href: '/alliance' },
  { name: 'BrandCooperation', label: '品牌合作', href: '/brand' }
]

// 主要导航项（显示在顶部）
const mainNavItems = computed(() => {
  return [
    { name: 'BrandCooperation', label: '品牌合作', href: '/brand' },
    { name: 'ContentFactory', label: '内容工厂', href: '/content' },
    { name: 'DistributionCenter', label: '分发中心', href: '/distribution' },
    { name: 'Analytics', label: '数据分析', href: '/analytics' },
    { name: 'Wallet', label: '结算中心', href: '/wallet' }
  ]
})

// 更多菜单项（放在下拉菜单中）
const moreNavItems = computed(() => {
  return [
    { name: 'ClaimTasks', label: '认领任务', href: '/tasks/claim' },
    { name: 'GrowthEngine', label: '狠活引擎', href: '/growth-engine' },
  { name: 'AllianceCore', label: '联盟中枢', href: '/alliance' }
]
})

// 移动端使用的导航项（用于移动菜单）
const navItems = computed(() => allNavItems)
</script>

