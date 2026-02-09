'use client';

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Banner Section */}
      <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('/placeholder-banner.jpg')" }}>
        <div className="container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Negocio Destacado: San Juan Construcciones</h1>
          <p className="text-lg md:text-xl text-white mt-4">Construyendo tus sueños con la mejor calidad.</p>
          <Button className="mt-8">Ver más</Button>
        </div>
      </section>

      {/* Populares Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-8">Populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* CardServicios */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Servicios</CardTitle>
                <CardDescription>Encuentra los mejores servicios</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Plomería, electricidad, y más.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver más</Button>
              </CardFooter>
            </Card>

            {/* CardComidaRapida */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Comida Rápida</CardTitle>
                <CardDescription>Para un antojo rápido</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pizzas, hamburguesas y más.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver más</Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Entretenimiento</CardTitle>
                <CardDescription>Para un antojo rápido</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pizzas, hamburguesas y más.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver más</Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Salud</CardTitle>
                <CardDescription>Para un antojo rápido</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pizzas, hamburguesas y más.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver más</Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Tecnología</CardTitle>
                <CardDescription>Para un antojo rápido</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pizzas, hamburguesas y más.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver más</Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Hogar</CardTitle>
                <CardDescription>Para un antojo rápido</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pizzas, hamburguesas y más.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver más</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
