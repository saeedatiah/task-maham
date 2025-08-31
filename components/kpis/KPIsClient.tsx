'use client'
import { useEffect, useState } from 'react'
import type { KPI, KPIPayload } from '@/types'
import KpiCard from './KpiCard'
import Card from '@/components/ui/Card'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts'


export default function KPIsClient() {
  const [data, setData] = useState<KPI[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetch('/api/kpis')
      .then(r => r.json())
      .then((json: KPIPayload) => {
        if (mounted) setData(json.items)
      })
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  if (loading) return <div className="opacity-70">جاري تحميل المؤشرات…</div>
  if (!data) return <div className="opacity-70">لا توجد بيانات.</div>

  const f = data.find(d => d.key === 'Finance')!
  const h = data.find(d => d.key === 'HR')!
  const o = data.find(d => d.key === 'Operations')!

  // دمج السلاسل حسب التاريخ
  const merged = (() => {
    const map = new Map<string, any>()
    for (const kpi of data) {
      for (const p of kpi.timeseries) {
        if (!map.has(p.date)) map.set(p.date, { date: p.date })
        map.get(p.date)[kpi.key] = p.value
      }
    }
    return Array.from(map.values()).sort((a, b) => a.date.localeCompare(b.date))
  })()

  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-3 gap-4">
        <KpiCard title="Finance" value={f.current} delta={f.delta} accent="primary" />
        <KpiCard title="HR" value={h.current} delta={h.delta} accent="secondary" />
        <KpiCard title="Operations" value={o.current} delta={o.delta} accent="primary" />
      </div>

      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">النمو الشهري — خطي</h3>
          <div className="text-xs opacity-60">مصدر: API وهمية</div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={merged} margin={{ top: 10, right: 10, bottom: 0, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.12} />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Finance" stroke="#146C43" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="HR" stroke="#C4A951" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="Operations" stroke="#38bdf8" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}