'use client'

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white text-center py-2 sm:py-2.5 px-4 text-xs sm:text-sm font-medium">
      <p className="truncate">
        <span className="hidden sm:inline">¡ENVÍO GRATIS por compras superiores a $250,000! </span>
        <span className="sm:hidden">¡ENVÍO GRATIS desde $250,000! </span>
        <a href="#" className="underline hover:no-underline">
          *Aplican T&C.
        </a>
      </p>
    </div>
  )
}

