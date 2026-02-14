"use client"
import React, { useState, useEffect } from 'react';
import CardComidaRapida from '@/components/CardComidaRapida';
import { Negocio } from '@/data/types';
import LoadingSpinner from '@/components/LoadingSpinner';

const Page = () => {
  const [comidaRapida, setComidaRapida] = useState<Negocio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNegocios = async () => {
      try {
        const res = await fetch('/api/negocios');
        const data = await res.json();
        const comidaRapidaFiltrada = data.filter((negocio: Negocio) => negocio.categoria === 'comida-rapida');
        setComidaRapida(comidaRapidaFiltrada);
      } catch (error) {
        console.error("Error fetching negocios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNegocios();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-700">Comida Rápida</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {comidaRapida.map((negocio: Negocio) => (
            <CardComidaRapida key={negocio.id} negocio={negocio} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
