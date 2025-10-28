<template>
  <div class="min-h-screen bg-gray-50">
    <!-- HEADER -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button
          @click="logout"
          class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition shadow-sm"
        >
          Logout
        </button>
      </div>
    </header>

    <!-- STATS SECTION -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-6">
          <!-- Total -->
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 class="text-lg font-semibold text-gray-600">Total Tickets</h3>
            <p class="text-3xl font-bold text-gray-800 mt-2">{{ stats.total }}</p>
          </div>
          <!-- Open -->
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 class="text-lg font-semibold text-green-600">Open</h3>
            <p class="text-3xl font-bold text-green-600 mt-2">{{ stats.open }}</p>
          </div>
          <!-- In Progress -->
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 class="text-lg font-semibold text-amber-600">In Progress</h3>
            <p class="text-3xl font-bold text-amber-600 mt-2">{{ stats.in_progress }}</p>
          </div>
          <!-- Closed -->
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 class="text-lg font-semibold text-gray-600">Closed</h3>
            <p class="text-3xl font-bold text-gray-600 mt-2">{{ stats.closed }}</p>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-10 text-center">
          <router-link
            to="/tickets"
            class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            View All Tickets
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const stats = ref({
  total: 0,
  open: 0,
  in_progress: 0,
  closed: 0,
})

const router = useRouter()
const auth = useAuthStore()

onMounted(() => {
  loadStats()
})

const loadStats = () => {
  const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
  stats.value = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    in_progress: tickets.filter(t => t.status === 'in_progress').length,
    closed: tickets.filter(t => t.status === 'closed').length,
  }
}

const logout = () => {
  auth.logout()
  router.push('/')
}
</script>