import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Keratinas French's Gold - Alisado Natural y Seguro | Puerto Carreño",
  description: "El único alisado 100% natural, vegano y sin formol en Puerto Carreño. Apto para madres lactantes y niños desde 7 años.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

