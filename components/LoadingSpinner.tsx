'use client';

import { useEffect, useState } from 'react'

/*
  LoadingSpinner
  - Componente cliente que muestra el logo, un eslogan corto y una barra de progreso
  - La barra interpola color desde rojo->verde según `progress` y al llegar a 100% llama `onComplete`
  - Pensado para mejorar la UX durante carga inicial; la lógica de cuándo mostrarlo la decide la página (app/page.tsx)
*/

interface LoadingSpinnerProps {
  onComplete: () => void
}

export default function LoadingSpinner({ onComplete }: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 300)
          return 100
        }
        return prev + 1
      })
    }, 20)

    return () => clearInterval(interval)
  }, [onComplete])

  // Interpolate color from red (0) to green (120) using HSL
  const hue = Math.round((progress / 100) * 120)
  const barColor = `hsl(${hue} 70% 45%)`

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="flex flex-col items-center gap-6 w-11/12 md:w-3/5 p-6 bg-white rounded-lg shadow-lg">
        <div className="text-sm text-gray-600">Encuentra lo local. Impulsa tu negocio hoy.</div>

        <img
          src="/logosanjuan.png"
          alt="San Juan"
          className="w-full md:w-4/5 max-w-xs mx-auto"
          style={{ objectFit: 'contain' }}
        />

        <div className="w-full">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 rounded-full transition-all duration-150"
              style={{ width: `${progress}%`, background: barColor }}
            />
          </div>
          <div className="text-right text-xs text-gray-500 mt-1">{progress}%</div>
        </div>
      </div>
    </div>
  )
}
