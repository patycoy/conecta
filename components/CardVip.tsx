"use client"

import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

/*
  CardVip
  - Tarjeta simple para mostrar un negocio VIP
  - Usa imagen placeholder (`/logosanjuan.png`) si no existe `item.imagen`
  - El `Button` reutilizable envía a `/vip` (se puede cambiar a la página de detalle)
*/

type VipItem = {
  id: string
  nombre: string
  imagen?: string
}

export default function CardVip({ item }: { item: VipItem }) {
  const img = item.imagen ?? '/logosanjuan.png'

  return (
    <Card className="max-w-sm mx-auto">
      <CardHeader>
        <img src={img} alt={item.nombre} className="w-full h-40 object-contain" />
      </CardHeader>
      <CardContent>
        <CardTitle>{item.nombre}</CardTitle>
      </CardContent>
      <CardFooter className="justify-end">
        <Button asChild>
          <Link href="/vip">Ver VIP</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
