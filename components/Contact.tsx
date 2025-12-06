'use client'

import { MessageCircle, Facebook, Instagram, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const contactMethods = [
  {
    icon: MessageCircle,
    name: 'WhatsApp',
    description: 'Escríbenos directo',
    href: 'https://wa.me/573001234567?text=Hola,%20quiero%20información%20sobre%20French\'s%20Gold',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Facebook,
    name: 'Facebook',
    description: 'Síguenos y comparte',
    href: 'https://facebook.com',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    description: 'Mira nuestros resultados',
    href: 'https://instagram.com',
    color: 'from-pink-500 via-red-500 to-orange-500',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Estamos Aquí</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
              ¿Tienes Preguntas?
              <br />
              <span className="font-semibold text-emerald-700">Hablemos sin Compromiso</span>
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Estamos aquí para ayudarte. <span className="text-rose-600 font-medium">No dudes en escribirnos</span> 
              si tienes cualquier duda sobre el producto, el proceso o la entrega. 
              <span className="text-emerald-700 font-medium"> ¡Tu tranquilidad es nuestra prioridad!</span>
            </p>

            <div className="space-y-3 mb-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-slate-100 hover:border-emerald-200"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">
                        {method.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {method.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                  </a>
                )
              })}
            </div>

            <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl">
              <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span className="text-slate-700 font-medium">
                Entregas solo en <strong className="text-emerald-700">Puerto Carreño, Vichada</strong>
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-large">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
              alt="Contacto French's Gold"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

