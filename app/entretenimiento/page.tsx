'use client';
import React, { useState, useEffect } from 'react';
import CardEntretenimiento from '@/components/CardEntretenimiento';
import { Negocio } from '@/data/types';
import { useAppContext } from '@/context/AppContext';

const Page = () => {
  const [entretenimiento, setEntretenimiento] = useState<Negocio[]>([]);
  const { isInitialLoading } = useAppContext();

  useEffect(() => {
    const fetchNegocios = async () => {
      try {
        const res = await fetch('/api/negocios');
        const data = await res.json();
        const entretenimientoFiltrado = data.filter((negocio: Negocio) => negocio.categoria === 'entretenimiento');
        setEntretenimiento(entretenimientoFiltrado);
      } catch (error) {
        console.error("Error fetching negocios:", error);
      }
    };

    fetchNegocios();
  }, []);

  if (isInitialLoading) {
    return null;
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-700">Entretenimiento</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {entretenimiento.map((negocio: Negocio) => (
            <CardEntretenimiento key={negocio.id} negocio={negocio} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
