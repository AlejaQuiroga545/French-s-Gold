'use client'

import Image from 'next/image'
import { ShoppingBag, CheckCircle2, Shield, Leaf } from 'lucide-react'

interface HeroBannerProps {
  addToCart: (product: any, quantity: number) => void
}

const product = {
  id: 1,
  name: "Keratina French's Gold",
  size: '500ml',
  price: 180000,
  image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=800&fit=crop',
}

export default function HeroBanner({ addToCart }: HeroBannerProps) {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 border border-pink-200 rounded-full mb-8">
              <Shield className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-semibold text-pink-700">100% Natural y Vegano</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Keratina</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                French's Gold
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Alisado profesional que repara hasta <span className="font-bold text-pink-600">2 años de daño</span> en un solo uso. 
              100% natural, vegano y seguro para toda la familia.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                </div>
                <span className="text-gray-700 font-medium">Apto para madres lactantes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                </div>
                <span className="text-gray-700 font-medium">Seguro para niños desde los 7 años</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                </div>
                <span className="text-gray-700 font-medium">0% Formol - 100% Vegano</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-4 h-4 text-pink-600" />
                </div>
                <span className="text-gray-700 font-medium">Ingredientes naturales certificados</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => addToCart(product, 1)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Comprar Ahora</span>
            </button>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,000+</div>
                  <div>Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div>Calificación</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div>Natural</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
                alt="Keratina French's Gold"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Garantizado</div>
                  <div className="text-sm text-gray-600">Resultado 100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
