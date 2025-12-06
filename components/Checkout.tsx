'use client'

import { useState } from 'react'
import { User, Phone, MapPin, MessageSquare, ArrowLeft, Check } from 'lucide-react'

interface CheckoutProps {
  cart: any[]
  getCartTotal: () => number
  setCurrentView: (view: string) => void
  userData?: any
}

const SHIPPING_COST = 6000

export default function Checkout({ cart, getCartTotal, setCurrentView, userData }: CheckoutProps) {
  const [formData, setFormData] = useState({
    name: userData?.name || '',
    phone: userData?.phone || '',
    address: '',
    notes: '',
  })

  const subtotal = getCartTotal()
  const total = subtotal + SHIPPING_COST

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.address) {
      setCurrentView('confirmation')
    }
  }

  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-cream-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <button
            onClick={() => setCurrentView('landing')}
            className="hover:text-emerald-600 transition-colors"
          >
            Inicio
          </button>
          <span>/</span>
          <button
            onClick={() => setCurrentView('cart')}
            className="hover:text-emerald-600 transition-colors"
          >
            Canasta
          </button>
          <span>/</span>
          <span>Datos de Envío</span>
        </div>

        <h2 className="text-4xl font-light text-slate-800 mb-12">
          Datos para la Entrega en Puerto Carreño
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                  <User className="w-4 h-4 text-emerald-600" />
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej: María González"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ej: 300 123 4567"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Dirección Exacta en Puerto Carreño
                </label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Ej: Barrio El Centro, Calle 5 # 10-20, Casa blanca portón verde"
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Notas Adicionales (Opcional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ej: Horario preferido de entrega, referencias del lugar, etc."
                  rows={2}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentView('cart')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver a la Canasta</span>
                </button>
                <button
                  type="submit"
                  className="flex-2 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-medium shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
                >
                  <Check className="w-5 h-5" />
                  <span>Confirmar Pedido</span>
                </button>
              </div>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-white p-8 rounded-2xl shadow-medium border border-slate-100">
              <h3 className="text-xl font-light text-slate-800 mb-6">Resumen del Pedido</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm text-slate-600">
                    <span>{item.quantity}x {item.name}</span>
                    <span className="font-medium">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal:</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Envío:</span>
                  <span className="font-medium">{formatCurrency(SHIPPING_COST)}</span>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between text-xl font-semibold text-slate-800">
                    <span>Total a Pagar:</span>
                    <span className="text-emerald-700">{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

