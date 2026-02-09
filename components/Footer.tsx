import React from 'react'

/*
  Footer component
  - Footer global, incluye enlaces y placeholders para redes sociales
  - Diseño sencillo y profesional, pensado para ser fijo al final del layout
*/
export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-sm">© {new Date().getFullYear()} Enrique Vargas</div>
          <a href="https://enriquevargas.vercel.app" className="text-sm text-blue-600 hover:underline">enriquevargas.vercel.app</a>
        </div>

        <div className="flex items-center gap-4">
          <nav className="flex gap-3 text-sm">
            <a href="#">Criptomonedas</a>
            <a href="#">Más servicios</a>
            <a href="#">Política</a>
          </nav>

          <div className="flex items-center gap-2">
            <a aria-label="Instagram" href="#">📸</a>
            <a aria-label="Facebook" href="#">📘</a>
            <a aria-label="Threads" href="#">🧵</a>
            <a aria-label="X" href="#">✖️</a>
            <a aria-label="YouTube" href="#">▶️</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
