'use client'

import { Heart, Shield, Leaf, Award, Users, Star, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: 'Compromiso con la Familia',
      description: 'Productos seguros para toda la familia, especialmente para madres lactantes y niños desde los 7 años.',
    },
    {
      icon: Shield,
      title: '100% Natural y Seguro',
      description: 'Libres de químicos agresivos y formol, garantizando seguridad total para tu salud y la de tu familia.',
    },
    {
      icon: Leaf,
      title: 'Vegano y Sostenible',
      description: 'Productos 100% veganos y comprometidos con el medio ambiente, sin pruebas en animales.',
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Solo los mejores ingredientes naturales para resultados excepcionales y duraderos.',
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Confianza Familiar',
      description: 'Más de 1,000 familias en Puerto Carreño confían en nuestros productos para el cuidado del cabello de toda la familia.',
    },
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Todos nuestros productos están certificados como seguros para uso durante la lactancia y para niños desde los 7 años.',
    },
    {
      icon: Star,
      title: 'Resultados Comprobados',
      description: 'Nuestros clientes reportan resultados duraderos de hasta 5 meses con un solo tratamiento, manteniendo el cabello saludable y brillante.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sobre nosotros
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Choose Us - Top */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-100 mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por Qué Elegirnos?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Somos más que una marca de productos para el cabello. Somos tu aliado en el cuidado natural y seguro de toda tu familia.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Commitment Section - Top */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Nuestro Compromiso
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ingredientes Naturales</h3>
                    <p className="text-gray-600 text-sm">Solo utilizamos ingredientes 100% naturales y veganos en todos nuestros productos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Seguridad Certificada</h3>
                    <p className="text-gray-600 text-sm">Todos nuestros productos son seguros para madres lactantes y niños desde los 7 años.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Resultados Garantizados</h3>
                    <p className="text-gray-600 text-sm">Ofrecemos garantía de satisfacción o devolución de tu dinero.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Atención Personalizada</h3>
                    <p className="text-gray-600 text-sm">Estamos aquí para ayudarte en cada paso del proceso, desde la compra hasta el cuidado de tu cabello.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop"
                alt="Nuestro compromiso"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
