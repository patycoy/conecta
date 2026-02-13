
import React from 'react';
import { Negocio } from '@/data/types';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Link from 'next/link';

interface CardRestaurantesProps {
  negocio: Negocio;
}

const CardRestaurantes: React.FC<CardRestaurantesProps> = ({ negocio }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center justify-between shadow-lg transition-transform transform hover:-translate-y-1 bg-white">
      <div className="text-indigo-600 my-4">
        <StorefrontIcon sx={{ fontSize: 60 }} />
      </div>
      <h3 className="text-xl font-bold text-center mb-4 text-gray-800">{negocio.nombre}</h3>
      <Link href={`/restaurantes/${negocio.slug}`} passHref>
        <button className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          Ver más
        </button>
      </Link>
    </div>
  );
};

export default CardRestaurantes;
