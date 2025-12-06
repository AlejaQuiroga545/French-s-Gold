'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import TopBar from '@/components/TopBar'
import HeroBanner from '@/components/HeroBanner'
import ProductGrid from '@/components/ProductGrid'
import ProductsPage from '@/components/ProductsPage'
import AboutUs from '@/components/AboutUs'
import ContactPage from '@/components/ContactPage'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Confirmation from '@/components/Confirmation'
import Login from '@/components/Login'

export default function Home() {
  const [currentView, setCurrentView] = useState<'home' | 'productos' | 'sobre-nosotros' | 'contacto' | 'cart' | 'checkout' | 'confirmation'>('home')
  const [cart, setCart] = useState<any[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState<any>(null)

  const addToCart = (product: any, quantity: number) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity }])
    }
    setCartOpen(true)
  }

  const updateCartItem = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== id))
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const handleLogin = (data: any) => {
    setUserData(data)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserData(null)
  }

  if (currentView === 'cart') {
    return (
      <main className="min-h-screen bg-white">
        <TopBar />
        <Navigation 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          setCartOpen={setCartOpen}
          onLoginClick={() => setLoginOpen(true)}
          isLoggedIn={isLoggedIn}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        <Cart 
          cart={cart}
          updateCartItem={updateCartItem}
          removeFromCart={removeFromCart}
          getCartTotal={getCartTotal}
          setCurrentView={setCurrentView}
        />
        <Footer />
      </main>
    )
  }

  if (currentView === 'checkout') {
    return (
      <main className="min-h-screen bg-white">
        <TopBar />
        <Navigation 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          setCartOpen={setCartOpen}
          onLoginClick={() => setLoginOpen(true)}
          isLoggedIn={isLoggedIn}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        <Checkout 
          cart={cart}
          getCartTotal={getCartTotal}
          setCurrentView={setCurrentView}
          userData={userData}
        />
        <Footer />
      </main>
    )
  }

  if (currentView === 'confirmation') {
    return (
      <main className="min-h-screen bg-white">
        <TopBar />
        <Navigation 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          setCartOpen={setCartOpen}
          onLoginClick={() => setLoginOpen(true)}
          isLoggedIn={isLoggedIn}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        <Confirmation setCurrentView={setCurrentView} />
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navigation 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        setCartOpen={setCartOpen}
        onLoginClick={() => setLoginOpen(true)}
        isLoggedIn={isLoggedIn}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      
      {currentView === 'home' && (
        <>
          <HeroBanner addToCart={addToCart} />
          <ProductGrid addToCart={addToCart} />
        </>
      )}
      
      {currentView === 'productos' && (
        <ProductsPage addToCart={addToCart} />
      )}
      
      {currentView === 'sobre-nosotros' && (
        <AboutUs />
      )}
      
      {currentView === 'contacto' && (
        <ContactPage />
      )}
      
      <Footer />
      <WhatsAppWidget />
      
      {/* Cart Modal */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-y-auto">
            <Cart 
              cart={cart}
              updateCartItem={updateCartItem}
              removeFromCart={removeFromCart}
              getCartTotal={getCartTotal}
              setCurrentView={setCurrentView}
              onClose={() => setCartOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Login Modal */}
      {loginOpen && (
        <Login
          onClose={() => setLoginOpen(false)}
          onLogin={handleLogin}
        />
      )}
    </main>
  )
}
