<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[80vh] mb-16">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/60">
        <img 
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234" 
          alt="Hero"
          class="w-full h-full object-cover mix-blend-overlay"
        >
      </div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl text-white">
          <h1 class="text-5xl font-bold mb-6">
            Discover Vintage <br>
            <span class="text-accent">Streetwear</span> Style
          </h1>
          <p class="text-xl text-gray-200 mb-8">
            Curated second-hand clothing for the modern man. 
            Premium brands at affordable prices.
          </p>
          <NuxtLink
            to="/shop"
            class="inline-block bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition"
          >
            Shop Now
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary-800 mb-8">
          Shop by Category
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="category in categories"
            :key="category.id"
            class="group relative overflow-hidden rounded-lg aspect-w-3 aspect-h-4"
          >
            <img 
              :src="category.image" 
              :alt="category.name"
              class="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent">
              <div class="absolute bottom-0 left-0 p-6">
                <h3 class="text-2xl font-bold text-white mb-2">{{ category.name }}</h3>
                <p class="text-gray-200 mb-4">{{ category.description }}</p>
                <NuxtLink 
                  :to="`/category/${category.id}`"
                  class="inline-block text-white border-b-2 border-accent hover:text-accent transition-colors"
                >
                  Shop Now
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {
    id: 'vintage',
    name: 'Vintage Finds',
    description: 'Timeless pieces from the past decades',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8'
  },
  {
    id: 'streetwear',
    name: 'Streetwear',
    description: 'Urban style for the modern man',
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b'
  },
  {
    id: 'designer',
    name: 'Designer',
    description: 'Premium brands at thrift prices',
    image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b'
  }
]
</script>