import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'  // Will create next
import Tickets from '../views/Tickets.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/auth/login', component: Login },
  { path: '/auth/signup', component: Signup },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/tickets', component: Tickets, meta: { requiresAuth: true } },
  { path: '/tickets/create', component: () => import('../views/CreateTicket.vue'), meta: { requiresAuth: true } },
  { path: '/tickets/edit/:id', component: () => import('../views/EditTicket.vue'), meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ROUTE GUARD
router.beforeEach((to, from, next) => {
  const auth = JSON.parse(localStorage.getItem('ticketapp_session') || 'null')
  const isExpired = auth && auth.expires < Date.now()

  if (isExpired) {
    localStorage.removeItem('ticketapp_session')
    if (to.meta.requiresAuth) return next('/auth/login')
  }

  if (to.meta.requiresAuth && !auth) {
    return next('/auth/login')
  }

  next()
})

export default router