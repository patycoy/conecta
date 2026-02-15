/**
 * Mini-Landing Page Dinámica para un Negocio
 *
 * - `generateStaticParams`: Le dice a Next.js qué slugs existen para que pueda generar
 *   una página estática para cada negocio durante el build.
 * - `NegocioPage`: El componente principal que renderiza la página.
 *   - Busca el negocio correspondiente al `slug` en la base de datos.
 *   - Si no lo encuentra, muestra la página 404 de Next.js.
 *   - Si lo encuentra, muestra una página de aterrizaje con:
 *     - Banner (si existe, si no, un color de fondo).
 *     - Nombre del negocio.
 *     - Calificación con estrellas (simulado).
 *     - Descripción.
 *     - Información de contacto y horario en una barra lateral.
 *     - Etiquetas.
 */
import { negocios } from '@/db/db';
import { Negocio } from '@/data/types';
import { notFound } from 'next/navigation';
import { Mail, Phone, Star, Globe, MessageCircle } from 'lucide-react';

type PageProps = {
  params: {
    slug: string;
  };
};

// Genera las páginas estáticas para cada negocio
export async function generateStaticParams() {
  return negocios.map((negocio) => ({
    slug: negocio.slug,
  }));
}

// --- Componente de la Página ---
const NegocioPage = ({ params }: PageProps) => {
  const { slug } = params;
  const negocio = negocios.find((n) => n.slug === slug);

  if (!negocio) {
    notFound();
  }

  const hasBanner = negocio.banner && negocio.banner.trim() !== '';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- SECCIÓN DEL BANNER Y TÍTULO --- */}
      <header 
        className={`relative text-white text-center py-20 ${!hasBanner ? 'bg-gray-800' : ''}`}
        style={hasBanner ? { backgroundImage: `url(${negocio.banner})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight">{negocio.nombre}</h1>
          <div className="mt-4 flex justify-center items-center space-x-2">
            {[...Array(Math.floor(negocio.calificacion))].map((_, i) => (
              <Star key={i} className="text-yellow-400" fill="currentColor" />
            ))}
            {[...Array(5 - Math.floor(negocio.calificacion))].map((_, i) => (
              <Star key={i} className="text-gray-300" />
            ))}
            <span className="text-lg font-medium">({negocio.resenas} reseñas)</span>
          </div>
        </div>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Columna principal (Descripción, etc.) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Acerca de Nosotros</h2>
            <p className="text-gray-600 leading-relaxed text-justify">{negocio.descripcion}</p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                {negocio.etiquetas.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Barra Lateral (Contacto, Horario) */}
          <aside className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Contacto</h3>
              <ul className="space-y-4 text-gray-700">
                {negocio.contacto.telefono && (
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-500" />
                    <a href={`tel:${negocio.contacto.telefono}`} className="hover:text-blue-600">{negocio.contacto.telefono}</a>
                  </li>
                )}
                {negocio.contacto.whatsapp && (
                  <li className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-3 text-green-500" />
                     <a href={`https://wa.me/${negocio.contacto.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600">Enviar WhatsApp</a>
                  </li>
                )}
                {negocio.contacto.sitio && (
                   <li className="flex items-center">
                    <Globe className="w-5 h-5 mr-3 text-gray-500" />
                    <a href={negocio.contacto.sitio} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Sitio Web</a>
                  </li>
                )}
                 {negocio.contacto.correo && (
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-gray-500" />
                    <a href={`mailto:${negocio.contacto.correo}`} className="hover:text-blue-600">Enviar Correo</a>
                  </li>
                )}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Horario</h3>
              <div className="flex justify-between text-gray-700">
                <span>Lunes a Viernes</span>
                <span>{negocio.horario.abre} - {negocio.horario.cierra}</span>
              </div>
              {/* Aquí se podría agregar lógica para horarios de fin de semana */}
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default NegocioPage;
