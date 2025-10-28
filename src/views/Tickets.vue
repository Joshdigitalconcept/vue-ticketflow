<template>
  <div class="min-h-screen bg-gray-50">
    <!-- HEADER -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Tickets</h1>
        <router-link
          to="/tickets/create"
          class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-sm"
        >
          + New Ticket
        </router-link>
      </div>
    </header>

    <!-- TICKETS LIST -->
    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4">
        <div v-if="tickets.length === 0" class="text-center text-gray-500 py-12">
          <p class="text-xl">No tickets yet.</p>
          <router-link to="/tickets/create" class="text-blue-600 hover:underline">
            Create your first ticket
          </router-link>
        </div>

        <div v-else class="grid md:grid-cols-3 gap-6">
          <div
            v-for="ticket in tickets"
            :key="ticket.id"
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-lg font-semibold text-gray-800">{{ ticket.title }}</h3>
              <span
                :class="{
                  'bg-green-100 text-green-800': ticket.status === 'open',
                  'bg-amber-100 text-amber-800': ticket.status === 'in_progress',
                  'bg-gray-100 text-gray-800': ticket.status === 'closed',
                }"
                class="px-3 py-1 rounded-full text-xs font-medium"
              >
                {{ ticket.status.replace('_', ' ').toUpperCase() }}
              </span>
            </div>

            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {{ ticket.description || 'No description' }}
            </p>

            <div class="flex gap-2">
              <router-link
                :to="`/tickets/edit/${ticket.id}`"
                class="flex-1 bg-blue-100 text-blue-700 text-center py-2 rounded text-sm hover:bg-blue-200 transition"
              >
                Edit
              </router-link>
              <button
                @click="confirmDelete(ticket.id)"
                class="flex-1 bg-red-100 text-red-700 py-2 rounded text-sm hover:bg-red-200 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA -->
        <div class="mt-10 text-center">
          <router-link
            to="/dashboard"
            class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Dashboard
          </router-link>
        </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'

const tickets = ref([])
const router = useRouter()
const $toast = useToast()

onMounted(() => {
  loadTickets()
})

const loadTickets = () => {
  tickets.value = JSON.parse(localStorage.getItem('tickets') || '[]')
}

const confirmDelete = (id) => {
  if (confirm('Are you sure you want to delete this ticket?')) {
    tickets.value = tickets.value.filter(t => t.id !== id)
    localStorage.setItem('tickets', JSON.stringify(tickets.value))
    $toast.success('Ticket deleted!')
    loadTickets()
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>