'use client'

import Image from 'next/image'
import { ShoppingBag, Star } from 'lucide-react'

interface ProductGridProps {
  addToCart: (product: any, quantity: number) => void
  searchQuery?: string
  selectedCategory?: string
}

const products = [
  {
    id: 1,
    name: "Keratina French's Gold",
    size: '500ml',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop',
    description: 'Alisado 100% natural y vegano',
    badge: 'Más Vendido',
    category: 'keratina',
  },
  {
    id: 2,
    name: "Keratina French's Gold",
    size: '250ml',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=800&fit=crop',
    description: 'Tamaño práctico para probar',
    badge: 'Nuevo',
    category: 'keratina',
  },
  {
    id: 3,
    name: "Kit French's Gold Completo",
    size: '500ml + Acondicionador',
    price: 220000,
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&h=800&fit=crop',
    description: 'Kit completo con acondicionador',
    badge: 'Oferta',
    category: 'kit',
  },
  {
    id: 4,
    name: "Acondicionador French's Gold",
    size: '500ml',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=800&fit=crop',
    description: 'Acondicionador nutritivo natural',
    badge: null,
    category: 'acondicionador',
  },
  {
    id: 5,
    name: "Shampoo French's Gold",
    size: '500ml',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop',
    description: 'Shampoo sin sal, 100% natural',
    badge: null,
    category: 'shampoo',
  },
  {
    id: 6,
    name: "Mascarilla French's Gold",
    size: '300ml',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=800&fit=crop',
    description: 'Mascarilla reparadora intensiva',
    badge: 'Recomendado',
    category: 'tratamiento',
  },
  {
    id: 7,
    name: "Aceite Capilar French's Gold",
    size: '100ml',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&h=800&fit=crop',
    description: 'Aceite nutritivo para puntas',
    badge: null,
    category: 'tratamiento',
  },
  {
    id: 8,
    name: "Kit Viajero French's Gold",
    size: '250ml + 100ml',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop',
    description: 'Perfecto para viajes',
    badge: 'Práctico',
    category: 'kit',
  },
]

export default function ProductGrid({ addToCart, searchQuery = '', selectedCategory = 'all' }: ProductGridProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-4">No se encontraron productos</p>
            <p className="text-gray-500">Intenta con otros términos de búsqueda o selecciona otra categoría</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute z-10 m-2">
                    <span className="px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{product.size}</p>
                  <p className="text-xs text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-600">
                      {formatCurrency(product.price)}
                    </span>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Agregar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
