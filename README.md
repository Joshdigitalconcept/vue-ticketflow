# TicketFlow - Vue.js Version

## Frameworks & Libraries
- **Vue 3** + Vite
- **Pinia** (state management)
- **Vue Router** (navigation + protected routes)
- **Tailwind CSS v3** (styling)
- **vue-toast-notification** (feedback)

## Features
- Landing page with **wavy SVG**, **3 decorative circles**, **1440px max-width**
- **Login / Signup** with validation + `ticketapp_session` in `localStorage`
- **Dashboard** with ticket stats (Total, Open, In Progress, Closed)
- **Full CRUD** (Create, Read, Edit, Delete) with real-time validation
- **Status colors**: `open` (green), `in_progress` (amber), `closed` (gray)
- **Toast notifications** for all actions
- **Route protection** — unauthorized → `/auth/login`
- **Session expires** after 1 hour

## Setup
```bash
npm install
npm run dev

Test Account

Email: test@example.com
Password: password123

Build & Deploybash

npm run build
vercel

NotesAll data stored in localStorage
Fully responsive (mobile, tablet, desktop)
Identical layout to React & Twig versions
Accessibility: semantic HTML, focus states, contrast

