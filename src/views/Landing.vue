<template>
  <div class="min-h-screen flex flex-col bg-gray-50">

    <!-- HERO SECTION -->
    <section class="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white pt-20 pb-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 text-center relative z-20">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to <span class="text-yellow-300">TicketFlow</span>
        </h1>
        <p class="text-xl md:text-2xl mb-6">
          A modern, secure, and lightning-fast ticket management system built for teams.
        </p>

        <!-- Built with Vue Badge -->
        <p class="text-sm opacity-80 mb-6">
          <span class="inline-flex items-center gap-1 bg-white/20 rounded-full px-3 py-1 text-xs font-medium">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 12h3v8h14v-8h3L12 2z"/>
            </svg>
            Built with <strong>Vue</strong> Framework
          </span>
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/auth/login"
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md"
          >
            Login
          </router-link>
          <router-link
            to="/auth/signup"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all"
          >
            Get Started
          </router-link>
        </div>
      </div>

      <!-- WAVY SVG — Bottom Edge -->
      <svg
        class="absolute bottom-0 left-0 w-full h-40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style="transform: translateY(1px);"
      >
        <path
          fill="#f9fafb"
          d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,112C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"
        />
      </svg>

      <!-- DECORATIVE CIRCLES -->
      <div class="circle-deco-1"></div>
      <div class="circle-deco-2"></div>
      <div class="circle-deco-3"></div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Why Teams Love TicketFlow</h2>
          <p class="mt-4 text-lg text-gray-600">Everything you need to manage tickets — in one place.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-status-open" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Blazing Fast</h3>
            <p class="text-gray-600">Create, update, and resolve tickets in milliseconds.</p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-status-progress" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Secure by Default</h3>
            <p class="text-gray-600">Session-based auth with protected routes and validation.</p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Beautiful Design</h3>
            <p class="text-gray-600">Consistent, responsive, and accessible across all devices.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-gray-900 text-white py-10 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-sm">&copy; 2025 <span class="font-semibold">TicketFlow</span>. All rights reserved.</p>
        <p class="mt-2 text-xs text-gray-400">Built with love for HNG, by Joshua.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No logic required for static landing page
</script>

<style scoped>
/* Decorative Circles (same as Twig version) */
.circle-deco-1 {
  @apply absolute w-96 h-96 bg-green-500/15 rounded-full top-[-150px] right-[-80px] pointer-events-none;
}
.circle-deco-2 {
  @apply absolute w-72 h-72 bg-amber-500/20 rounded-full bottom-10 left-[-100px] pointer-events-none;
}
.circle-deco-3 {
  @apply absolute w-48 h-48 bg-purple-500/10 rounded-full top-40 right-40 pointer-events-none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .circle-deco-1 { @apply w-52 h-52 top-[-80px] right-[-40px]; }
  .circle-deco-2 { @apply w-40 h-40 left-[-60px]; }
  .circle-deco-3 { @apply hidden; }
}

/* Status color classes (matching Twig) */
.text-status-open { @apply text-green-500; }
.text-status-progress { @apply text-amber-500; }
</style>