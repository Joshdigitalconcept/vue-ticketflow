# TicketFlow – Vue.js Version

**Live URL**: https://vue-ticketflow.vercel.app  
**Repository**: https://github.com/Joshdigitalconcept/vue-ticketflow  

---

## Tech Stack
- **Vue 3** + **Vite** (Composition API + `<script setup>`)  
- **Pinia** (state management – auth store)  
- **Vue Router v4** (navigation + route guards)  
- **Tailwind CSS** (utility-first styling)  
- **vue-toast-notification** (toast feedback)  

---

## Features (identical across React / Vue / Twig)

| Feature | Implementation |
|---------|----------------|
| **Landing page** | Hero with wavy SVG, 3 decorative circles, CTA buttons, max-width 1440px |
| **Auth** | Login / Signup with validation, `ticketapp_session` in `localStorage`, 1-hour expiry |
| **Dashboard** | Stats cards (Total, Open, In-Progress, Closed) |
| **Ticket CRUD** | List, Create, Edit, Delete with real-time validation & toast feedback |
| **Status colors** | `open` → green, `in_progress` → amber, `closed` → gray |
| **Protected routes** | Unauthorized → redirect to `/auth/login` |
| **Responsive** | Mobile-first, tablet & desktop grids |
| **Accessibility** | Semantic HTML, focus rings, sufficient contrast |

---

## Test Account

Email:    test@example.com
Password: password123

---

## Local Development
```bash
npm install
npm run dev

Build & Deploy (Vercel)bash

npm run build   # creates ./dist
vercel          # or import repo on vercel.com

Vercel auto-detects Vite → runs npm run build and serves dist.Project Structure

src/
 ├─ stores/         # Pinia auth store
 ├─ views/          # Landing, Login, Signup, Dashboard, Tickets, CreateTicket, EditTicket
 ├─ router/         # Vue Router + route guard
 ├─ components/     # (optional reusable UI)
 ├─ App.vue         # Root layout
 └─ main.js         # Vue app + global toast

