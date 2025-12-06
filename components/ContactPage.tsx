'use client'

import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+57 300 123 4567',
      link: 'https://wa.me/573001234567',
      description: 'Respuesta inmediata',
    },
    {
      icon: Mail,
      title: 'Correo Electrónico',
      value: 'contacto@frenchsgold.com',
      link: 'mailto:contacto@frenchsgold.com',
      description: 'Respuesta en 24 horas',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Puerto Carreño, Vichada',
      link: null,
      description: 'Entregas solo en esta localidad',
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      value: 'Lun-Sáb: 8AM - 8PM',
      link: null,
      description: 'Dom: 10AM - 6PM',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Contáctanos
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Side - Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  const Component = method.link ? 'a' : 'div'
                  const props = method.link 
                    ? { href: method.link, target: '_blank', rel: 'noopener noreferrer' }
                    : {}
                  
                  return (
                    <Component
                      key={index}
                      {...props}
                      className={`flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all duration-300 ${
                        method.link ? 'cursor-pointer' : ''
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-6 h-6 ${
                          index === 0 ? 'text-pink-500' :
                          index === 1 ? 'text-pink-400' :
                          index === 2 ? 'text-pink-600' :
                          'text-rose-500'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {method.title}
                        </h3>
                        {method.link ? (
                          <a
                            href={method.link}
                            className="text-pink-600 hover:text-pink-700 font-medium block mb-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium mb-1">
                            {method.value}
                          </p>
                        )}
                        <p className="text-sm text-gray-500">
                          {method.description}
                        </p>
                      </div>
                    </Component>
                  )
                })}
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Envíanos un Mensaje
              </h2>
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-900">¡Mensaje enviado!</p>
                      <p className="text-sm text-green-700">Te contactaremos pronto.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 transition-colors"
                      placeholder="300 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mt-8"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
