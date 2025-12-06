'use client'

import { CheckCircle2, ShoppingBag, Clock, MessageCircle, Home } from 'lucide-react'

interface ConfirmationProps {
  setCurrentView: (view: string) => void
}

export default function Confirmation({ setCurrentView }: ConfirmationProps) {
  const orderNumber = `#FG-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`

  const openWhatsApp = () => {
    const message = encodeURIComponent(`¡Hola! Quiero confirmar mi pedido ${orderNumber} de French's Gold`)
    window.open(`https://wa.me/573001234567?text=${message}`, '_blank')
  }

  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-cream-50 to-white min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 rounded-3xl shadow-large border border-slate-100 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-medium">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            ¡Pedido Recibido con Éxito!
          </h1>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Gracias por confiar en <strong className="text-emerald-700 font-medium">French's Gold</strong>. 
            Tu pedido ha sido registrado y estamos listos para prepararlo.
          </p>

          <div className="space-y-4 mb-10 p-6 bg-emerald-50 rounded-2xl">
            <div className="flex items-center justify-center gap-3 text-slate-700">
              <ShoppingBag className="w-5 h-5 text-emerald-600" />
              <div className="text-left">
                <span className="text-sm text-slate-500">Número de Pedido:</span>
                <p className="font-semibold">{orderNumber}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-700">
              <Clock className="w-5 h-5 text-emerald-600" />
              <div className="text-left">
                <span className="text-sm text-slate-500">Tiempo de Entrega:</span>
                <p className="font-semibold">24-48 horas en Puerto Carreño</p>
              </div>
            </div>
          </div>

          <div className="mb-8 p-6 bg-cream-50 rounded-2xl">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Próximo Paso: Confirmación y Pago
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Para finalizar tu pedido, te contactaremos por WhatsApp para confirmar los detalles 
              y coordinar el método de pago. <span className="text-rose-600 font-medium">¡Estamos a un mensaje de distancia!</span>
            </p>
            <button
              onClick={openWhatsApp}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Finalizar Pedido y Chatear por WhatsApp</span>
            </button>
          </div>

          <button
            onClick={() => setCurrentView('landing')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </button>
        </div>
      </div>
    </section>
  )
}

