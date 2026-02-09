import { NextResponse } from 'next/server'
import { negociosVip } from '@/data/vip'

// API route: GET /api/vip
// Devuelve la lista `negociosVip` definida en `data/vip.ts`.
// Útil para simular un backend mientras desarrollamos la app.
export async function GET() {
  return NextResponse.json({ data: negociosVip })
}
