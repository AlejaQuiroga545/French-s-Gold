'use client'

import { ShoppingCart, MessageCircle, Truck, ArrowRight, ShoppingBag } from 'lucide-react'

interface HowItWorksProps {
  setCurrentView: (view: string) => void
}

const steps = [
  {
    number: 1,
    icon: ShoppingCart,
    title: 'Elige tu Producto',
    description: 'Selecciona cuántas unidades necesitas. Cada una es $180.000 COP',
  },
  {
    number: 2,
    icon: MessageCircle,
    title: 'Chatea con Nosotros',
    description: 'Envíanos un WhatsApp con tu pedido. Te respondemos al instante',
  },
  {
    number: 3,
    icon: Truck,
    title: 'Recibe en tu Casa',
    description: 'Entregamos a domicilio en Puerto Carreño. Envío: $6.000 COP',
  },
]

export default function HowItWorks({ setCurrentView }: HowItWorksProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span className="text-sm font-medium text-emerald-700">Proceso Simple</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
            Tu French's Gold
            <br />
            <span className="font-semibold text-emerald-700">en 3 Pasos</span>
          </h2>
          <p className="text-lg text-slate-600">
            Solo disponible en <strong className="text-emerald-700 font-medium">Puerto Carreño</strong> - Entregamos a tu puerta
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex items-center gap-8">
                <div className="relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center text-white font-semibold shadow-medium z-10">
                    {step.number}
                  </div>
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-large">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="max-w-xs">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-8 h-8 text-emerald-400 flex-shrink-0" />
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => setCurrentView('product')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-medium shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Empezar a Comprar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

