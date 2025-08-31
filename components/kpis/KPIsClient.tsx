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

  const kpis = ['Finance', 'HR', 'Operations'] as const

  return (
    <div className="flex flex-col gap-6">
      {/* شبكة responsive ديناميكية */}
      <div className="grid gap-6 justify-center"
           style={{
             gridTemplateColumns: 'repeat(auto-fit, minmax(650px, 1fr))'
           }}
      >
        {kpis.map((key) => {
          const kpi = data.find(d => d.key === key)!
          const accent = key === 'HR' ? 'secondary' : 'primary'

          return (
            <Card
              key={key}
              className=" shadow-xl rounded-3xl p-6 flex flex-col items-center justify-center w-full"
            >
              {/* البطاقة + الرسم البياني */}
              <KpiCard title={key} value={kpi.current} delta={kpi.delta} accent={accent} />

              <div className="h-48 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={kpi.timeseries}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.12} />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={key === 'Finance' ? '#146C43' : key === 'HR' ? '#C4A951' : '#146C43'}
                      strokeWidth={2.5}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}