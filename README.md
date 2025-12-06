# French's Gold E-commerce

E-commerce elegante y profesional para Keratinas French's Gold, desarrollado con Next.js, React y Tailwind CSS.

## Características

- ✨ Diseño elegante y profesional
- 📱 Completamente responsive
- 🎨 Estética delicada y refinada
- ⚡ Optimizado con Next.js 14
- 🎯 Tailwind CSS para estilos modernos
- 🛒 Sistema de carrito completo
- 💬 Integración con WhatsApp

## Tecnologías

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **Tailwind CSS** - Framework CSS
- **TypeScript** - Tipado estático
- **Lucide React** - Iconos

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globales
├── components/
│   ├── Navigation.tsx   # Navegación
│   ├── Hero.tsx        # Hero section
│   ├── WhyChooseUs.tsx # Sección por qué elegirnos
│   ├── Promise.tsx     # Nuestra promesa
│   ├── Product.tsx      # Página de producto
│   ├── Cart.tsx        # Carrito de compras
│   ├── Checkout.tsx    # Checkout
│   ├── Confirmation.tsx # Confirmación
│   ├── Testimonials.tsx # Testimonios
│   ├── HowItWorks.tsx  # Cómo funciona
│   ├── Contact.tsx     # Contacto
│   └── Footer.tsx      # Footer
└── public/             # Archivos estáticos
```

## Personalización

### Cambiar número de WhatsApp

Edita el número en `components/Confirmation.tsx` y `components/Contact.tsx`:

```tsx
window.open(`https://wa.me/TU_NUMERO?text=${message}`, '_blank')
```

### Colores

Los colores se pueden personalizar en `tailwind.config.js`:

```js
colors: {
  emerald: { ... },
  gold: { ... },
  rose: { ... },
}
```

## Licencia

© 2024 Keratinas French's Gold

