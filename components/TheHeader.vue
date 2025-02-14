<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-primary-800">
          THRIFT<span class="text-accent">MEN</span>
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path" 
            class="text-primary-600 hover:text-accent transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-4">
          <button class="p-2 hover:text-accent transition-colors">
            <i class="fas fa-search text-xl"></i>
          </button>
          <NuxtLink to="/cart" class="p-2 hover:text-accent transition-colors">
            <i class="fas fa-shopping-bag text-xl"></i>
          </NuxtLink>
          <NuxtLink to="/account" class="p-2 hover:text-accent transition-colors">
            <i class="fas fa-user text-xl"></i>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const menuItems = [
  { name: 'New Arrivals', path: '/new-arrivals' },
  { name: 'Streetwear', path: '/category/streetwear' },
  { name: 'Vintage', path: '/category/vintage' },
  { name: 'Brands', path: '/brands' },
]
</script>