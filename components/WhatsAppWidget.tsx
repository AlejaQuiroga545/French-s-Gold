'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola! ¿Tienes alguna duda sobre French\'s Gold?')
    window.open(`https://wa.me/573001234567?text=${message}`, '_blank')
  }

  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </button>
      ) : (
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-[#25D366] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <p className="text-white font-semibold">French's Gold</p>
                <p className="text-white/80 text-xs">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">Hola! ¿Tienes alguna duda?</p>
            <button
              onClick={openWhatsApp}
              className="w-full px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-medium transition-colors"
            >
              Iniciar conversación
            </button>
          </div>
        </div>
      )}
    </>
  )
}

