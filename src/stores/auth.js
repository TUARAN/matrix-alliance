import { defineStore } from 'pinia'

export const useAuthStore = defineStore('ma_auth_store', {
  state: () => ({
    isAuthenticated: false,
    user: null
  }),
  actions: {
    init() {
      const val = localStorage.getItem('ma_auth')
      this.isAuthenticated = val === '1'
      if (this.isAuthenticated && !this.user) {
        this.user = { id: 'me' }
      }
    },
    login(payload) {
      this.isAuthenticated = true
      this.user = payload || { id: 'me' }
      localStorage.setItem('ma_auth', '1')
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      localStorage.removeItem('ma_auth')
    }
  }
})



