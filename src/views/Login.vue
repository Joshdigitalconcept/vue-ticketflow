<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
    <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold text-center mb-6 text-gray-800">Sign In</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>
        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>

        <p v-if="error" class="text-red-600 text-sm text-center">{{ error }}</p>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
        >
          Sign In
        </button>
      </form>

      <div class="mt-6 text-center text-sm text-gray-600">
        <p>Test Account:</p>
        <p class="font-mono text-xs mt-1">test@example.com / password123</p>
      </div>

      <p class="mt-4 text-center text-sm">
        Don't have an account?
        <router-link to="/auth/signup" class="text-blue-600 hover:underline font-medium">
          Sign Up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { getCurrentInstance } from 'vue'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

// Get $toast
const { appContext } = getCurrentInstance()
const $toast = appContext.app.config.globalProperties.$toast

const handleLogin = () => {
  const result = auth.login(email.value, password.value)
  if (result.success) {
    $toast.success('Welcome back!')
    router.push('/dashboard')
  } else {
    $toast.error(result.error)
    error.value = result.error
  }
}
</script>