'use client'

import { Heart, Users, Leaf, Star } from 'lucide-react'

const promises = [
  {
    icon: Heart,
    title: 'Apto para Mujeres Lactantes',
    description: '100% seguro durante la lactancia. Sin químicos que puedan afectar a tu bebé. Puedes usarlo con total confianza.',
    badge: 'Certificado Seguro',
    color: 'rose',
  },
  {
    icon: Users,
    title: 'Apto para Niños (7 a 9 años)',
    description: 'Tu peque puede tener el cabello liso y brillante sin ningún riesgo. ¡Totalmente seguro para toda la familia!',
    badge: 'Recomendado para Niños',
    color: 'emerald',
  },
  {
    icon: Leaf,
    title: '0% Formol / 100% Vegana',
    description: 'Sin formol, sin químicos agresivos. Solo ingredientes naturales y veganos que respetan tu cabello y el planeta.',
    badge: 'Ingredientes Naturales',
    color: 'gold',
  },
  {
    icon: Star,
    title: 'Base de Aminoácidos y Vitaminas',
    description: 'Nutre tu cabello mientras lo alisa. Brillo y suavidad garantizados con cada aplicación.',
    badge: 'Nutrición Profunda',
    color: 'emerald',
  },
]

export default function Promise() {
  return (
    <section id="promise" className="py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full mb-6">
            <Heart className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-rose-600">Nuestra Promesa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
            ¿Sabías que es Segura para
            <br />
            <span className="font-semibold text-emerald-700">Ti y tu Bebé?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cada ingrediente fue seleccionado pensando en la seguridad de tu familia. 
            <span className="text-rose-600 font-medium"> Porque sabemos que lo más importante es tu tranquilidad.</span>
          </p>
        </div>

        {/* Promise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {promises.map((promise, index) => {
            const Icon = promise.icon
            const colorClasses = {
              rose: 'from-rose-400 to-rose-500',
              emerald: 'from-emerald-500 to-emerald-600',
              gold: 'from-gold-400 to-gold-500',
            }
            
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-slate-100 hover:border-emerald-200"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[promise.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {promise.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {promise.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full">
                  <span className="text-xs font-medium text-emerald-700">{promise.badge}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Message */}
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-soft border border-slate-100 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center shadow-medium">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <p className="text-lg text-slate-700 text-center leading-relaxed">
            <span className="text-rose-600 font-semibold">Mamá,</span> sabemos lo importante que es cuidar de tu familia. 
            Por eso creamos French's Gold pensando en ti y en los tuyos. 
            <span className="text-emerald-700 font-medium"> Un alisado profesional que puedes usar con total tranquilidad.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

