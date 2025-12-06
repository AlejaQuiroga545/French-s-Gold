'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import ProductGrid from './ProductGrid'

interface ProductsPageProps {
  addToCart: (product: any, quantity: number) => void
}

const categories = [
  { id: 'all', name: 'Todos los Productos' },
  { id: 'keratina', name: 'Keratinas' },
  { id: 'shampoo', name: 'Shampoo' },
  { id: 'acondicionador', name: 'Acondicionador' },
  { id: 'tratamiento', name: 'Tratamientos' },
  { id: 'kit', name: 'Kits' },
]

export default function ProductsPage({ addToCart }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header and Filters Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Nuestros Productos
            </h1>
            <p className="text-gray-600 text-sm">
              Descubre nuestra línea completa de productos naturales
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <ProductGrid 
        addToCart={addToCart}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-100">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-xl">🚚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Envío Rápido
              </h3>
              <p className="text-sm text-gray-600">
                Entregas en Puerto Carreño en 24-48 horas
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-100">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                100% Natural
              </h3>
              <p className="text-sm text-gray-600">
                Productos veganos sin químicos agresivos
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl border border-pink-200">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-xl">💯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Garantía de Calidad
              </h3>
              <p className="text-sm text-gray-600">
                Resultados garantizados o tu dinero de vuelta
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
