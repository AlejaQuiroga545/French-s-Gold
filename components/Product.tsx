'use client'

import { useState } from 'react'
import { Minus, Plus, ShoppingBag, Truck, CheckCircle2, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

interface ProductProps {
  addToCart: (product: any, quantity: number) => void
  setCurrentView: (view: string) => void
}

const product = {
  id: 1,
  name: 'Keratina French\'s Gold',
  size: '500ml',
  price: 180000,
  image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=800&fit=crop',
}

const features = [
  'Alisado 100% Garantizado',
  'Nutrición Profunda',
  'Brillo Espectacular',
]

export default function Product({ addToCart, setCurrentView }: ProductProps) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setCurrentView('cart')
  }

  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-cream-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <button
            onClick={() => setCurrentView('landing')}
            className="hover:text-emerald-600 transition-colors"
          >
            Inicio
          </button>
          <span>/</span>
          <span>Producto</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-large">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-full text-sm font-medium shadow-medium">
              100% Garantizado
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-3">
              {product.name}
            </h1>
            <p className="text-lg text-slate-500 mb-8">
              Presentación: {product.size}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-light text-emerald-700">$180.000</span>
                <span className="text-xl text-slate-500">COP</span>
              </div>
              <p className="text-sm text-slate-500">Precio unitario</p>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Cantidad
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                >
                  <Minus className="w-5 h-5 text-emerald-600" />
                </button>
                <span className="text-2xl font-medium text-slate-800 w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                >
                  <Plus className="w-5 h-5 text-emerald-600" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-medium shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 mb-6"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Añadir a la Canasta</span>
            </button>

            {/* Shipping Info */}
            <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl">
              <Truck className="w-5 h-5 text-emerald-600" />
              <span className="text-sm text-slate-700">
                Entrega a domicilio en Puerto Carreño - <strong className="text-emerald-700">$6.000 COP</strong>
              </span>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setCurrentView('landing')}
              className="mt-6 inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

