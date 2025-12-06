'use client'

import { Star, ShoppingBag, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface TestimonialsProps {
  setCurrentView: (view: string) => void
}

const testimonials = [
  {
    name: 'Diana G.',
    location: 'Puerto Carreño',
    rating: 5,
    text: "La keratina me duró 5 meses. ¡Mi hija de 8 años está feliz! Al principio tenía miedo porque es tan pequeña, pero al ver que es 100% natural, me quedé tranquila. El resultado es increíble y lo mejor: sin olor fuerte ni químicos.",
  },
  {
    name: 'María L.',
    location: 'Puerto Carreño',
    rating: 5,
    text: "Estoy lactando y necesitaba algo seguro. French's Gold fue la solución perfecta. Mi cabello quedó súper liso y brillante, y lo mejor es que no tuve que preocuparme por mi bebé. ¡Recomendada 100%!",
  },
  {
    name: 'Carmen R.',
    location: 'Puerto Carreño',
    rating: 5,
    text: "Llevo 3 meses con el alisado y sigue perfecto. Mi cabello se ve saludable, no seco como con otros productos. Y el precio es justo para la calidad que tiene. ¡Vale cada peso!",
  },
  {
    name: 'Laura M.',
    location: 'Puerto Carreño',
    rating: 5,
    text: "Mi niña de 7 años quería tener el cabello liso como su mamá. Con French's Gold pude complacerla sin preocuparme. El resultado es hermoso y ella está encantada. ¡Gracias por pensar en las familias!",
  },
]

export default function Testimonials({ setCurrentView }: TestimonialsProps) {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-cream-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
            Lo Dicen Nuestras Clientas
            <br />
            <span className="font-semibold text-emerald-700">de Puerto Carreño</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-slate-700 mb-6">¿Lista para tener el cabello de tus sueños?</p>
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
    </section>
  )
}

