'use client'

import { ShoppingBag, ArrowRight, Shield, Leaf, Heart } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  setCurrentView: (view: string) => void
}

export default function Hero({ setCurrentView }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&h=1080&fit=crop"
          alt="Keratina French's Gold"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-emerald-800/50 to-rose-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-soft">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">100% Natural y Vegano</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-6 leading-tight tracking-tight">
            Liso Profesional y
            <br />
            <span className="font-semibold text-emerald-700">Súper Seguro</span>
            <br />
            <span className="text-rose-500 font-medium">Hasta para los Peques de 7 Años</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
            <strong className="text-emerald-700 font-medium">Keratinas French's Gold:</strong> El único alisado 100% natural, vegano y sin formol en Puerto Carreño. 
            <span className="text-rose-600"> Tu cabello y el de tu familia merecen lo mejor.</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-700">0% Formol</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-700">100% Natural</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft">
              <Heart className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-slate-700">Seguro para Niños</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setCurrentView('product')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-medium shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Ver Producto y Comprar</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                setCurrentView('landing')
                setTimeout(() => {
                  document.getElementById('promise')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm text-emerald-700 rounded-full font-medium border border-emerald-200 hover:bg-emerald-50 transition-all duration-300"
            >
              <span>Conocer Más</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

