<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-3xl mx-auto px-4">
      <div class="bg-white p-8 rounded-xl shadow-lg">
        <h1 class="text-2xl font-bold text-gray-800 mb-6">Create New Ticket</h1>

        <form @submit.prevent="createTicket" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              v-model="form.title"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <p v-if="errors.title" class="text-red-600 text-xs mt-1">{{ errors.title }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Status *</label>
            <select
              v-model="form.status"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              v-model="form.description"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Optional details..."
            ></textarea>
          </div>

          <div class="flex gap-3">
            <button
              type="submit"
              class="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Create Ticket
            </button>
            <router-link
              to="/tickets"
              class="flex-1 text-center bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentInstance } from 'vue'

const form = ref({
  title: '',
  status: 'open',
  description: '',
})
const errors = ref({})
const router = useRouter()

// Get $toast from global
const { appContext } = getCurrentInstance()
const $toast = appContext.app.config.globalProperties.$toast

const createTicket = () => {
  errors.value = {}

  if (!form.value.title.trim()) {
    errors.value.title = 'Title is required'
    $toast.error('Please enter a title')
    return
  }

  const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
  const newTicket = {
    id: Date.now().toString(),
    ...form.value,
  }
  tickets.push(newTicket)
  localStorage.setItem('tickets', JSON.stringify(tickets))

  $toast.success('Ticket created successfully!')
  router.push('/tickets')
}
</script>