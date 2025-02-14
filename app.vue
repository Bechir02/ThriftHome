<template>
  <div class="min-h-screen bg-gray-50">
    <TheHeader />
    <main class="container mx-auto px-4 py-8">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    }
  ]
})
</script>