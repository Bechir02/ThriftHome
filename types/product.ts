export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  size: string
  condition: 'New' | 'Like New' | 'Good' | 'Fair'
  brand?: string
  imageUrl: string
  stock: number
  createdAt: string
  updatedAt: string
}

export interface ProductFilters {
  category?: string
  size?: string
  minPrice?: number
  maxPrice?: number
  sortBy?: 'price-asc' | 'price-desc' | 'newest'
}