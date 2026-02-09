"use client"

import Layout from '@/layout/layout'

export default function Home(): JSX.Element {
  return (
    <div className="p-6 flex flex-col items-center text-center">
      <img
        src="/logosanjuan.png"
        alt="San Juan"
        className="w-full md:w-4/5 max-w-3xl mx-auto"
        style={{ objectFit: 'contain' }}
      />

      <h1 className="mt-6 text-3xl md:text-4xl font-extrabold">Directorio Digital San Juan</h1>

      <p className="mt-3 text-lg text-gray-700 max-w-2xl">
        San Juan en tu bolsillo — descubre, conecta y haz crecer tu negocio local.
      </p>

      <div className="mt-6 bg-gradient-to-r from-white/40 to-white/20 border p-4 rounded-lg max-w-3xl text-left">
        <h2 className="font-semibold text-lg">Tu mini-landingpage, gratis por siempre</h2>
        <p className="text-sm text-gray-700 mt-1">
          Solo pagas una vez. Respuestas más rápidas a tus clientes, catálogo digital y formulario de contacto.
        </p>

        <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
          <li>Hosting y mantenimiento gratis los primeros 6 meses.</li>
          <li>Por lanzamiento: los primeros 50 negocios pagan solo $800.</li>
          <li>Promoción, visibilidad y contacto directo con clientes.</li>
        </ul>
      </div>
    </div>
  )
}

export function HomeWithLayout(): JSX.Element {
  return (
      <Home />
  
  )
}

