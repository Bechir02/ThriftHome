<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <h3 class="text-lg font-semibold mb-4">Filters</h3>
    
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select 
          v-model="filters.category"
          class="w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Size
        </label>
        <select 
          v-model="filters.size"
          class="w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All Sizes</option>
          <option v-for="size in sizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Price Range
        </label>
        <div class="flex gap-2">
          <input
            v-model.number="filters.minPrice"
            type="number"
            placeholder="Min"
            class="w-1/2 border-gray-300 rounded-md shadow-sm"
          >
          <input
            v-model.number="filters.maxPrice"
            type="number"
            placeholder="Max"
            class="w-1/2 border-gray-300 rounded-md shadow-sm"
          >
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Sort By
        </label>
        <select 
          v-model="filters.sortBy"
          class="w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      <button
        @click="clearFilters"
        class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition"
      >
        Clear Filters
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/product'
import type { ProductFilters } from '~/types/product'

const productStore = useProductStore()
const categories = ['T-Shirts', 'Jeans', 'Dresses', 'Jackets', 'Accessories']
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const filters = reactive<ProductFilters>({
  category: '',
  size: '',
  minPrice: undefined,
  maxPrice: undefined,
  sortBy: undefined
})

watch(filters, (newFilters) => {
  productStore.setFilters(newFilters)
}, { deep: true })

const clearFilters = () => {
  filters.category = ''
  filters.size = ''
  filters.minPrice = undefined
  filters.maxPrice = undefined
  filters.sortBy = undefined
  productStore.clearFilters()
}
</script>