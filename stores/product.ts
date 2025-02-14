import { defineStore } from 'pinia'
import type { Product, ProductFilters } from '~/types/product'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
    filters: {} as ProductFilters
  }),

  getters: {
    filteredProducts: (state) => {
      let filtered = [...state.products]

      if (state.filters.category) {
        filtered = filtered.filter(p => p.category === state.filters.category)
      }

      if (state.filters.size) {
        filtered = filtered.filter(p => p.size === state.filters.size)
      }

      if (state.filters.minPrice !== undefined) {
        filtered = filtered.filter(p => p.price >= state.filters.minPrice!)
      }

      if (state.filters.maxPrice !== undefined) {
        filtered = filtered.filter(p => p.price <= state.filters.maxPrice!)
      }

      if (state.filters.sortBy) {
        switch (state.filters.sortBy) {
          case 'price-asc':
            filtered.sort((a, b) => a.price - b.price)
            break
          case 'price-desc':
            filtered.sort((a, b) => b.price - a.price)
            break
          case 'newest':
            filtered.sort((a, b) => 
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
            break
        }
      }

      return filtered
    }
  },

  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      
      try {
        // TODO: Replace with actual API call
        this.products = [
          {
            id: 1,
            name: 'Vintage Nike T-Shirt',
            description: 'Classic Nike t-shirt from the 90s in great condition',
            price: 29.99,
            category: 'T-Shirts',
            size: 'L',
            condition: 'Good',
            brand: 'Nike',
            imageUrl: 'https://picsum.photos/400/300',
            stock: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: 2,
            name: 'Levi\'s 501 Jeans',
            description: 'Authentic Levi\'s 501 jeans, perfect vintage wash',
            price: 49.99,
            category: 'Jeans',
            size: '32x34',
            condition: 'Like New',
            brand: 'Levi\'s',
            imageUrl: 'https://picsum.photos/400/300',
            stock: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: 3,
            name: 'Vintage Denim Jacket',
            description: 'Classic denim jacket with distressed details',
            price: 39.99,
            category: 'Jackets',
            size: 'M',
            condition: 'Good',
            imageUrl: 'https://picsum.photos/400/300',
            stock: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ]
      } catch (err) {
        this.error = 'Failed to fetch products'
        console.error(err)
      } finally {
        this.loading = false
      }
    },

    setFilters(filters: ProductFilters) {
      this.filters = { ...this.filters, ...filters }
    },

    clearFilters() {
      this.filters = {}
    }
  }
})