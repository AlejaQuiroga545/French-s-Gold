'use client'

import { Minus, Plus, Trash2, ArrowRight, ArrowLeft, ShoppingBag, X } from 'lucide-react'
import Image from 'next/image'

interface CartProps {
  cart: any[]
  updateCartItem: (id: number, quantity: number) => void
  removeFromCart: (id: number) => void
  getCartTotal: () => number
  setCurrentView: (view: string) => void
  onClose?: () => void
}

const SHIPPING_COST = 6000

export default function Cart({ cart, updateCartItem, removeFromCart, getCartTotal, setCurrentView, onClose }: CartProps) {
  const subtotal = getCartTotal()
  const total = subtotal + SHIPPING_COST

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-pink-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Tu canasta está vacía</h2>
            <p className="text-gray-600 mb-8 text-lg">Agrega productos para continuar con tu compra</p>
            {onClose && (
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Seguir Comprando</span>
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Mi Canasta</h1>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-pink-500 transition-colors p-2 hover:bg-pink-50 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
          <p className="text-gray-600">
            {cart.length} {cart.length === 1 ? 'producto' : 'productos'} en tu canasta
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 border border-pink-100 shadow-sm">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-pink-100 flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-pink-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {item.size} - {formatCurrency(item.price)} c/u
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateCartItem(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center transition-colors border border-pink-200"
                        >
                          <Minus className="w-4 h-4 text-pink-600" />
                        </button>
                        <span className="text-lg font-semibold text-gray-900 w-12 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartItem(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center transition-colors border border-pink-200"
                        >
                          <Plus className="w-4 h-4 text-pink-600" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-pink-600">
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
                          title="Eliminar producto"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white p-8 rounded-2xl border border-pink-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Resumen del Pedido</h3>
              <div className="space-y-4 mb-6 pb-6 border-b border-pink-100">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío (Puerto Carreño):</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(SHIPPING_COST)}</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  if (onClose) onClose()
                  setCurrentView('checkout')
                }}
                className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
              >
                <span>Comprar</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-pink-200 text-gray-700 rounded-full font-semibold hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Seguir Comprando</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
