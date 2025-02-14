<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="product.imageUrl" :alt="product.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <span class="text-primary-600 font-bold">${{ product.price.toFixed(2) }}</span>
      </div>
      
      <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ product.description }}</p>
      
      <div class="grid grid-cols-2 gap-2 mb-3 text-sm">
        <div class="flex items-center">
          <span class="text-gray-500">Size:</span>
          <span class="ml-2 font-medium">{{ product.size }}</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-500">Condition:</span>
          <span class="ml-2 font-medium">{{ product.condition }}</span>
        </div>
        <div v-if="product.brand" class="flex items-center col-span-2">
          <span class="text-gray-500">Brand:</span>
          <span class="ml-2 font-medium">{{ product.brand }}</span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <span 
          :class="[
            'px-2 py-1 text-xs rounded-full',
            product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          ]"
        >
          {{ product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock' }}
        </span>
        <button 
          @click="addToCart"
          class="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition"
          :disabled="product.stock === 0"
        >
          {{ product.stock > 0 ? 'Add to Cart' : 'Out of Stock' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const addToCart = () => {
  // TODO: Implement cart functionality
  console.log('Adding to cart:', props.product.id)
}
</script>