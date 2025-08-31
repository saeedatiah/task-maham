import { NextResponse } from 'next/server'
import type { KPIPayload } from '@/types'

export async function GET() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const pad = (n: number) => String(n).padStart(2, '0')

  const gen = (seed: number) =>
    months.map(m => ({ date: `2025-${pad(m)}-01`, value: Math.round(1000 + seed * 137 + Math.sin(m / 1.5) * 220 + m * 40) }))

  const payload: KPIPayload = {
    items: [
      { key: 'Finance', current: 18450, delta: 6.2, timeseries: gen(2) },
      { key: 'HR', current: 3200, delta: -1.4, timeseries: gen(5) },
      { key: 'Operations', current: 9150, delta: 3.1, timeseries: gen(8) }
    ],
    updatedAt: new Date().toISOString()
  }

  return NextResponse.json(payload)
}