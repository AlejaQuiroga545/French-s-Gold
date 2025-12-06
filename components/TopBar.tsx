'use client'

export default function TopBar() {
  return (
    <div className="bg-[#FF69B4] text-white text-center py-2 px-4 text-sm font-medium">
      <p>
        ¡ENVÍO GRATIS por compras superiores a $250,000!{' '}
        <a href="#" className="underline hover:no-underline">
          *Aplican T&C.
        </a>
      </p>
    </div>
  )
}

