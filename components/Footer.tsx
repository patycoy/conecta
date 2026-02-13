import React from "react"

import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import YouTubeIcon from "@mui/icons-material/YouTube"
import XIcon from "@mui/icons-material/X"

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* IZQUIERDA */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>© {new Date().getFullYear()}</span>

          <a
            href="https://enriquevargas.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-indigo-600 hover:underline"
          >
            Enrique Vargas
          </a>
        </div>


        {/* DERECHA */}
        <div className="flex flex-col sm:flex-row items-center gap-6">

          {/* LINKS */}
          <nav className="flex gap-4 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-indigo-600 transition">
              Criptomonedas
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Más servicios
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Política
            </a>
          </nav>

          {/* REDES */}
          <div className="flex items-center gap-3">
            <a
              aria-label="Instagram"
              href="#"
              className="p-2 rounded-full hover:bg-indigo-50 transition"
            >
              <InstagramIcon className="text-indigo-600" fontSize="small" />
            </a>

            <a
              aria-label="Facebook"
              href="#"
              className="p-2 rounded-full hover:bg-indigo-50 transition"
            >
              <FacebookIcon className="text-indigo-600" fontSize="small" />
            </a>

            <a
              aria-label="X"
              href="#"
              className="p-2 rounded-full hover:bg-indigo-50 transition"
            >
              <XIcon className="text-indigo-600" fontSize="small" />
            </a>

            <a
              aria-label="YouTube"
              href="#"
              className="p-2 rounded-full hover:bg-indigo-50 transition"
            >
              <YouTubeIcon className="text-indigo-600" fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
