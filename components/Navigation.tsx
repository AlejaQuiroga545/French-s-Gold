'use client'

import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface NavigationProps {
  cartCount: number
  setCartOpen: (open: boolean) => void
  onLoginClick?: () => void
  isLoggedIn?: boolean
  currentView?: string
  setCurrentView?: (view: string) => void
}

export default function Navigation({ cartCount, setCartOpen, onLoginClick, isLoggedIn, currentView, setCurrentView }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', view: 'home' },
    { label: 'Productos', view: 'productos' },
    { label: 'Sobre Nosotros', view: 'sobre-nosotros' },
    { label: 'Contacto', view: 'contacto' },
  ]

  const handleNavClick = (view: string) => {
    if (setCurrentView) {
      setCurrentView(view)
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => handleNavClick('home')} className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-pink-600">
                  French's Gold
                </span>
                <span className="text-xs text-pink-400 -mt-1">
                  Keratina Natural
                </span>
              </div>
            </button>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-pink-500 hover:text-pink-600 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              {isLoggedIn ? (
                <div className="hidden md:flex items-center gap-2 text-gray-700">
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">Mi Cuenta</span>
                </div>
              ) : (
                <button 
                  onClick={onLoginClick}
                  className="hidden md:block text-sm text-gray-700 hover:text-pink-600 transition-colors font-medium"
                >
                  Acceder / Registrarse
                </button>
              )}
              <button
                onClick={() => setCartOpen(true)}
                className="relative text-pink-500 hover:text-pink-600 transition-colors"
              >
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 h-12">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-sm font-medium transition-colors py-2 px-2 relative group ${
                  currentView === item.view
                    ? 'text-pink-600'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${
                  currentView === item.view ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-pink-600 py-2"
              >
                {item.label}
              </button>
            ))}
            {!isLoggedIn && (
              <button
                onClick={onLoginClick}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-pink-600 py-2"
              >
                Acceder / Registrarse
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
