<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
    <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-xl border-t-4 border-green-500">
      <div class="text-center mb-6">
        <div class="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-3">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H9v-1c0-1.657-1.343-3-3-3s-3 1.343-3 3v1m6-6c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">Join TicketFlow</h2>
        <p class="text-gray-600 mt-1">Create your account in seconds</p>
      </div>
      
      <form @submit.prevent="handleSignup" class="space-y-5">
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            required
          />
        </div>
        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Choose a strong password (6+ chars)"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            required
          />
        </div>

        <p v-if="error" class="text-red-600 text-sm text-center animate-pulse">{{ error }}</p>

        <button
          type="submit"
          class="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition shadow-lg transform hover:scale-[1.02]"
        >
          Create Account
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <router-link to="/auth/login" class="text-green-600 hover:underline font-semibold">
          Sign In
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

const handleSignup = () => {
  const result = auth.signup(email.value, password.value)
  if (result.success) {
    $toast.success('Account created! Welcome!')
    router.push('/dashboard')
  } else {
    $toast.error(result.error)
    error.value = result.error
  }
}
</script>