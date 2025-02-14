<template>
  <div>
    <h1 class="text-3xl font-bold text-primary-800 mb-8">Shop</h1>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div class="lg:col-span-1">
        <ProductFilters />
      </div>

      <div class="lg:col-span-3">
        <div v-if="productStore.loading" class="text-center py-8">
          <p class="text-gray-600">Loading products...</p>
        </div>

        <div v-else-if="productStore.error" class="text-center py-8">
          <p class="text-red-600">{{ productStore.error }}</p>
        </div>

        <div v-else-if="productStore.filteredProducts.length === 0" class="text-center py-8">
          <p class="text-gray-600">No products found matching your criteria.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProductCard
            v-for="product in productStore.filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/product'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})
</script>