"use client"

import React, { useEffect, useState } from 'react'
import CardVip from '@/components/CardVip'

/*
  Página cliente /vip
  - Obtiene la lista de VIP desde `/api/vip` mediante `fetch` para simular consumo de API
  - `loading` muestra un texto simple mientras se cargan los datos (puedes reemplazar por un spinner)
  - `items` contiene los negocios recibidos y se pasa a `CardVip`
*/

type VipItem = { id: string; nombre: string; imagen?: string }

export default function Page() {
  const [items, setItems] = useState<VipItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetch('/api/vip')
      .then((r) => r.json())
      .then((json) => {
        if (!mounted) return
        setItems(json.data || [])
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false))

    return () => {
      mounted = false
    }
  }, [])

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Negocios V.I.P</h1>

      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((n) => (
            <CardVip key={n.id} item={n} />
          ))}
        </div>
      )}
    </main>
  )
}
