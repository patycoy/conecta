"use client"

import { useState } from "react"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">

      {/* BARRA PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/logosanjuan.png"
            alt="Directorio San Juan"
            className="h-8 w-auto"
          />
          <span className="hidden sm:block font-bold text-gray-800">
            San Juan
          </span>
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden lg:flex items-center gap-6">
          {[
            ["Comida Rápida", "/comidarapida"],
            ["Restaurantes", "/restaurantes"],
            ["Entretenimiento", "/entretenimiento"],
            ["Servicios", "/servicios"],
            ["Salud", "/salud"],
            ["Mantenimiento", "/mantenimiento"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-gray-700
                         hover:text-indigo-600 transition"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ACCIONES */}
        <div className="flex items-center gap-2">

          {/* BUSCADOR SOLO DESKTOP */}
          <div className="hidden lg:flex items-center border rounded-full px-3 py-1 text-sm
                          bg-white shadow-sm">
            <SearchIcon fontSize="small" className="text-indigo-500" />
            <input
              type="text"
              placeholder="Buscar negocios"
              className="ml-2 w-48 outline-none bg-transparent"
            />
          </div>

          {/* ICONOS */}
          <button
            aria-label="Notificaciones"
            className="p-2 rounded-full hover:bg-indigo-50 transition"
          >
            <NotificationsNoneIcon className="text-indigo-600" />
          </button>

          <button
            aria-label="Ajustes"
            className="hidden sm:inline-flex p-2 rounded-full
                       hover:bg-indigo-50 transition"
          >
            <SettingsOutlinedIcon className="text-indigo-600" />
          </button>

          {/* MENÚ MÓVIL */}
          <button
            aria-label="Menú"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-indigo-50 transition lg:hidden"
          >
            {open ? (
              <CloseIcon className="text-indigo-600" />
            ) : (
              <MenuIcon className="text-indigo-600" />
            )}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-gray-700">

            <a href="/comidarapida" className="hover:text-indigo-600">
              Comida Rápida
            </a>
            <a href="/restaurantes" className="hover:text-indigo-600">
              Restaurantes
            </a>
            <a href="/entretenimiento" className="hover:text-indigo-600">
              Entretenimiento
            </a>
            <a href="/salud" className="hover:text-indigo-600">
              Servicios
            </a>
            <a href="/servicios" className="hover:text-indigo-600">
              Salud
            </a>
            <a href="/mantenimiento" className="hover:text-indigo-600">
              Mantenimiento
            </a>

            {/* BUSCADOR SOLO DENTRO DEL MENÚ */}
            <div className="mt-4 flex items-center border rounded-full px-3 py-2">
              <SearchIcon fontSize="small" className="text-indigo-500" />
              <input
                type="text"
                placeholder="Buscar negocios"
                className="ml-2 w-full outline-none"
              />
            </div>
          </nav>
        </div>
      )}

    </header>
  )
}
