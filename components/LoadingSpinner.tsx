'use client'

import { useEffect, useState } from 'react'

interface LoadingSpinnerProps {
  onComplete?: () => void
}

export default function LoadingSpinner({ onComplete }: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          if (onComplete) {
            setTimeout(onComplete, 400)
          }
          return 100
        }
        return prev + 1
      })
    }, 18)

    return () => clearInterval(interval)
  }, [onComplete])

  // Gradiente visual de progreso
  const hue = Math.round((progress / 100) * 120)
  const barColor = `hsl(${hue} 80% 45%)`

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-black">

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative flex flex-col items-center text-center gap-10 px-6 w-full max-w-2xl">

        {/* Logo principal */}
        <img
          src="/logosanjuan.png"
          alt="San Juan"
          className="w-72 md:w-80 object-contain animate-fade-in"
        />

        {/* Mensaje principal */}
        <div className="space-y-3 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Impulsa tu negocio local
          </h2>
          <p className="text-indigo-200 text-base md:text-lg max-w-xl mx-auto">
            Conecta con clientes reales y haz crecer tu presencia digital en San Juan
          </p>
        </div>

        {/* Barra de progreso */}
        <div className="w-full max-w-md">
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%`, background: barColor }}
            />
          </div>

          {/* Porcentaje centrado */}
          <div className="mt-2 text-xs text-indigo-200 tracking-wide text-center">
            Cargando {progress}%
          </div>
        </div>
      </div>
    </div>
  )
}
