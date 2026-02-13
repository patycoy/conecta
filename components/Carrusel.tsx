"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"

import RestaurantIcon from "@mui/icons-material/Restaurant"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"
import BuildIcon from "@mui/icons-material/Build"
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const categorias = [
  { nombre: "Restaurantes", icon: <RestaurantIcon sx={{ fontSize: 44 }} />, href: "/restaurantes" },
  { nombre: "Entretenimiento", icon: <SportsEsportsIcon sx={{ fontSize: 44 }} />, href: "/entretenimiento" },
  { nombre: "Servicios", icon: <BuildIcon sx={{ fontSize: 44 }} />, href: "/servicios" },
  { nombre: "Mantenimiento", icon: <HomeRepairServiceIcon sx={{ fontSize: 44 }} />, href: "/mantenimiento" },
  { nombre: "Comida Rápida", icon: <FastfoodIcon sx={{ fontSize: 44 }} />, href: "/comidarapida" },
]

export default function Carrusel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const paused = useRef(false)

  // 🔥 MOVIMIENTO INFINITO REAL
  useEffect(() => {
    const step = () => {
      if (scrollRef.current && !paused.current) {
        scrollRef.current.scrollLeft += 0.6

        // cuando llega a la mitad exacta, vuelve sin salto
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0
        }
      }

      animationRef.current = requestAnimationFrame(step)
    }

    animationRef.current = requestAnimationFrame(step)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const scrollManual = (dir: "left" | "right") => {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative">

      {/* TÍTULO */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center
                     text-indigo-700 mb-6 tracking-tight">
        Explora por categorías
      </h2>

      {/* Flecha izquierda */}
      <button
        onClick={() => scrollManual("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                   bg-white border border-indigo-200
                   rounded-full p-3 shadow-md
                   hover:bg-indigo-50 transition"
      >
        <ArrowBackIosNewIcon />
      </button>

      {/* CARRUSEL */}
      <div
        ref={scrollRef}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        className="flex gap-6 overflow-hidden px-14"
      >
        {[...categorias, ...categorias].map((cat, i) => (
          <Link href={cat.href} key={i}>
            <div
              className="min-w-[220px] h-[160px]
                         flex flex-col items-center justify-center
                         bg-gradient-to-br from-indigo-50 to-white
                         border-2 border-indigo-300
                         rounded-3xl
                         shadow-sm hover:shadow-xl
                         hover:-translate-y-1
                         transition-all duration-300
                         cursor-pointer"
            >
              <div className="text-indigo-600 mb-3">
                {cat.icon}
              </div>

              <span className="font-extrabold text-lg text-indigo-800 text-center">
                {cat.nombre}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Flecha derecha */}
      <button
        onClick={() => scrollManual("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                   bg-white border border-indigo-200
                   rounded-full p-3 shadow-md
                   hover:bg-indigo-50 transition"
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  )
}
