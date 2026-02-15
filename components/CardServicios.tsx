'use client';
import Link from 'next/link';
import { Negocio } from '@/data/types';

interface CardServiciosProps {
  negocio: Negocio;
}

const CardServicios: React.FC<CardServiciosProps> = ({ negocio }) => {
  return (
    <Link href={`/negocio/${negocio.id}`} passHref>
      <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img src={negocio.banner} alt={negocio.nombre} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{negocio.nombre}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CardServicios;
