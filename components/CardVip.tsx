"use client"

import React from 'react';
import Link from 'next/link';

/*
  CardVip
  - Tarjeta simple para mostrar un negocio VIP
  - Usa imagen placeholder (`/logosanjuan.png`) si no existe `item.imagen`
  - El enlace envía a `/vip` (se puede cambiar a la página de detalle)
*/

type VipItem = {
  id: string;
  nombre: string;
  imagen?: string;
};

export default function CardVip({ item }: { item: VipItem }) {
  const img = item.imagen ?? '/logosanjuan.png';

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <img src={img} alt={item.nombre} className="w-full h-40 object-contain" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{item.nombre}</h3>
      </div>
      <div className="p-4 flex justify-end">
        <Link href="/vip" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Ver VIP
        </Link>
      </div>
    </div>
  );
}
