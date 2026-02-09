"use client"

import React, { useState } from 'react'

/*
  Header component
  - Responsivo: muestra navegación horizontal en escritorio (md+) y botón hamburguesa en móvil
  - Incluye logo, buscador (solo UI), iconos de notificaciones y ajustes
  - `open` controla el menú móvil
*/

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" aria-label="Inicio" className="flex items-center gap-2">
            <img src="/logosanjuan.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-semibold">San Juan</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              <li><a href="/comidarapida" className="hover:underline">Comida Rápida</a></li>
              <li><a href="/restaurantes" className="hover:underline">Restaurantes</a></li>
              <li><a href="/entretenimiento" className="hover:underline">Entretenimiento</a></li>
              <li><a href="/servicios" className="hover:underline">Servicios</a></li>
              <li><a href="/mantenimiento" className="hover:underline">Mantenimiento</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <input
              aria-label="Buscar negocios"
              placeholder="Buscar..."
              className="border rounded px-3 py-1 text-sm"
            />
          </div>

          <button aria-label="Notificaciones" className="p-1">
            🔔
          </button>

          <button aria-label="Ajustes" className="p-1">
            ⚙️
          </button>

          <button
            className="md:hidden p-2"
            aria-expanded={open}
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-3">
            <ul className="flex flex-col gap-2">
              <li><a href="/comidarapida">Comida Rápida</a></li>
              <li><a href="/restaurantes">Restaurantes</a></li>
              <li><a href="/entretenimiento">Entretenimiento</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/mantenimiento">Mantenimiento</a></li>
              <li><a href="/ajustes">Ajustes</a></li>
            </ul>
            <div className="mt-3">
              <input aria-label="Buscar" placeholder="Buscar..." className="w-full border rounded px-3 py-2" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
