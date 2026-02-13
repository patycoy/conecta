"use client"

import Carrusel from "@/components/Carrusel"

export default function Home(): JSX.Element {
  return (
    <main className="w-full">

      {/* HERO / BANNER */}
      <section className="relative h-[70vh] w-full overflow-hidden">

        {/* IMAGEN DE FONDO */}
        <img
          src="/sanjuan.jpg"
          alt="San Juan"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY OSCURO */}
        <div className="absolute inset-0 bg-black/50" />

        {/* LOGO ARRIBA IZQUIERDA */}
        <div className="absolute top-6 left-6 z-10">
          <img
            src="/logosanjuan.png"
            alt="Directorio Digital San Juan"
            className="w-32 md:w-40 object-contain"
          />
        </div>

        {/* TEXTO CENTRADO */}
        <div className="relative z-10 h-full flex flex-col
                        items-center justify-center text-center px-6">

          <h1 className="text-4xl md:text-5xl lg:text-6xl
                         font-extrabold text-white leading-tight max-w-4xl">
            Directorio Digital de Negocios en San Juan
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Conecta tu negocio con clientes locales de forma rápida y profesional
          </p>

          <button
            className="mt-8 px-10 py-4 rounded-full
                       bg-indigo-600 text-white
                       font-semibold text-lg
                       hover:bg-indigo-700 transition"
          >
            Quiero mi landing
          </button>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="px-6 py-10 max-w-7xl mx-auto">

        {/* BENEFICIOS */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Presencia profesional",
              text: "Mini-landing con información clara, contacto y catálogo digital.",
            },
            {
              title: "Más clientes",
              text: "Aparece cuando las personas buscan servicios en San Juan.",
            },
            {
              title: "Fácil y rápido",
              text: "Nosotros lo hacemos por ti. Tú solo compartes el enlace.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white
                         border-2 border-indigo-300
                         shadow-sm hover:shadow-xl
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <h3 className="font-bold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>



        {/* OFERTA */}
        <div className="mt-16 max-w-3xl mx-auto text-center
                        border-2 border-indigo-400
                        rounded-2xl p-10
                        bg-gradient-to-b from-white to-indigo-50">

          <h2 className="font-extrabold text-2xl text-indigo-700">
            Tu mini-landing gratis por lanzamiento
          </h2>

          <p className="text-gray-600 mt-3">
            Pago único. Sin mensualidades ocultas.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>✔ Hosting y mantenimiento gratis por 6 meses</li>
            <li>✔ Los primeros 50 negocios pagan solo <strong>$800</strong></li>
            <li>✔ Promoción y contacto directo con clientes</li>
          </ul>
        </div>


        {/* CARRUSEL */}
        <div className="mt-14 max-w-6xl mx-auto px-4">
          <Carrusel />
        </div>
      </section>
    </main>
  )
}
