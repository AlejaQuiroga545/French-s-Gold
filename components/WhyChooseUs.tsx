'use client'

import { CheckCircle2, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface WhyChooseUsProps {
  setCurrentView: (view: string) => void
}

export default function WhyChooseUs({ setCurrentView }: WhyChooseUsProps) {
  const benefits = [
    {
      title: 'Alisado Profesional Garantizado',
      description: 'Resultado 100% liso que dura meses, sin dañar tu cabello',
    },
    {
      title: 'Nutrición y Brillo Intensos',
      description: 'Aminoácidos y vitaminas que restauran la salud de tu cabello',
    },
    {
      title: 'Seguridad Total',
      description: 'Apto para madres lactantes y niños desde los 7 años',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-large">
            <Image
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop"
              alt="Cabello liso y brillante"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Por Qué Elegirnos</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
              El Alisado que Tu
              <br />
              <span className="font-semibold text-emerald-700">Familia Necesita</span>
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              En <strong className="text-emerald-700 font-medium">French's Gold</strong> entendemos que la seguridad de tu familia es lo primero. 
              Por eso creamos una keratina que no solo alisa tu cabello, sino que lo nutre y protege.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center shadow-soft">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrentView('product')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-medium shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Ver Producto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

