// src/stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    login(email, password) {
      if (email === 'test@example.com' && password === 'password123') {
        const session = {
          email,
          token: 'mock-jwt-token-' + Date.now(),
          expires: Date.now() + 3600000,
        }
        localStorage.setItem('ticketapp_session', JSON.stringify(session))
        this.user = session
        return { success: true }
      }
      return { success: false, error: 'Invalid email or password (make use of the Test Account)' }
    },
    signup(email, password) {
      if (email && password && password.length >= 6) {
        const session = {
          email,
          token: 'mock-jwt-token-' + Date.now(),
          expires: Date.now() + 3600000,
        }
        localStorage.setItem('ticketapp_session', JSON.stringify(session))
        this.user = session
        return { success: true }
      }
      return { success: false, error: 'Password must be 6+ characters' }
    },
    logout() {
      localStorage.removeItem('ticketapp_session')
      this.user = null
    },
    checkSession() {
      const session = localStorage.getItem('ticketapp_session')
      if (session) {
        const data = JSON.parse(session)
        if (data.expires > Date.now()) {
          this.user = data
          return true
        } else {
          this.logout()
        }
      }
      return false
    },
  },
})