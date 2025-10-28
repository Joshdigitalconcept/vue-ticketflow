<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- HERO SECTION -->
    <section class="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white pt-20 pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 text-center relative z-20">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4">
        Welcome to <span class="text-yellow-300">TicketFlow</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8">Manage tickets with ease.</p>
        <div class="space-x-4">
        <router-link
            to="/auth/login"
            class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
        >
            Login
        </router-link>
        <router-link
            to="/auth/signup"
            class="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition shadow-md"
        >
            Get Started
        </router-link>
        </div>
    </div>

    <!-- WAVY SVG — PUSHED DOWN -->
    <svg
        class="absolute bottom-0 left-0 w-full h-40 transform translate-y-8"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
    >
        <path
        fill="#f9fafb"
        d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,112C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"
        />
    </svg>

    <!-- DECORATIVE CIRCLES -->
    <div class="absolute top-[-150px] right-[-80px] w-96 h-96 bg-green-500/15 rounded-full"></div>
    <div class="absolute bottom-10 left-[-100px] w-72 h-72 bg-amber-500/20 rounded-full"></div>
    <div class="absolute top-40 right-40 w-48 h-48 bg-purple-500/10 rounded-full"></div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why TicketFlow?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-8 text-center">
            <div class="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">Fast</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Blazing Fast</h3>
            <p>Create tickets in seconds.</p>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-8 text-center">
            <div class="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">Secure</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Secure</h3>
            <p>Your data, protected.</p>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-8 text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">Easy</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Simple</h3>
            <p>No complexity.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-gray-900 text-white py-8 mt-auto">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-sm">&copy; 2025 <span class="font-semibold">TicketFlow</span>. All rights reserved.</p>
        <p class="mt-2 text-xs text-gray-400">Built with love for HNG, by Joshua.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No logic needed for landing
</script>