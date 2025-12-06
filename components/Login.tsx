'use client'

import { useState } from 'react'
import { X, Mail, Lock, User, Phone, Eye, EyeOff, Shield, CheckCircle2, Sparkles } from 'lucide-react'

interface LoginProps {
  onClose: () => void
  onLogin: (data: any) => void
}

export default function Login({ onClose, onLogin }: LoginProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      // Simulate login
      onLogin({ email: formData.email, name: formData.name || 'Usuario' })
      onClose()
    } else {
      // Simulate registration
      if (formData.password === formData.confirmPassword) {
        onLogin({ 
          name: formData.name, 
          email: formData.email, 
          phone: formData.phone 
        })
        onClose()
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-md w-full p-6 sm:p-8 lg:p-10 relative shadow-2xl my-4 sm:my-8 max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 transition-colors p-2 hover:bg-pink-50 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with badge */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-pink-50 border border-pink-200 rounded-full mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600" />
            <span className="text-xs sm:text-sm font-semibold text-pink-700">French's Gold</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Bienvenido de vuelta' : 'Crea tu cuenta'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {isLogin 
              ? 'Ingresa tus datos para continuar' 
              : 'Únete y disfruta de beneficios exclusivos'}
          </p>
        </div>


        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre Completo
              </label>
              <div className="relative">
                <User className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required={!isLogin}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-8 pr-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-8 pr-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Teléfono
              </label>
              <div className="relative">
                <Phone className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  required={!isLogin}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-8 pr-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="300 123 4567"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-8 pr-10 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="Tu contraseña"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirmar Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required={!isLogin}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-8 pr-10 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Confirma tu contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500 focus:ring-2" 
                />
                <span className="text-gray-600">Recordarme</span>
              </label>
              <button 
                type="button" 
                className="text-pink-600 hover:text-pink-700 font-semibold transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          )}

          {/* Benefits for registration */}
          {!isLogin && (
            <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-600" />
                Beneficios al registrarte:
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 flex-shrink-0" />
                  <span>Descuentos exclusivos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 flex-shrink-0" />
                  <span>Seguimiento de pedidos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 flex-shrink-0" />
                  <span>Historial de compras</span>
                </div>
              </div>
            </div>
          )}

          {/* Security badge */}
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
            <Shield className="w-4 h-4 text-pink-600 flex-shrink-0" />
            <span>Tus datos están protegidos y seguros</span>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-2"
          >
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin)
              setFormData({ name: '', email: '', phone: '', password: '', confirmPassword: '' })
            }}
            className="text-pink-600 hover:text-pink-700 font-semibold transition-colors text-sm"
          >
            {isLogin 
              ? '¿No tienes cuenta? Regístrate aquí' 
              : '¿Ya tienes cuenta? Inicia sesión aquí'}
          </button>
        </div>
      </div>
    </div>
  )
}
