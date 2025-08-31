import Card from '@/components/ui/Card'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function KpiCard({ title, value, delta, accent }: { title: string; value: number; delta: number; accent: 'primary' | 'secondary' }) {
  const up = delta >= 0
  return (
    <Card className="flex items-center justify-between">
      <div>
        <div className="text-sm opacity-70 mb-1">{title}</div>
        <div className="text-3xl font-extrabold text-[var(--color-panel)]">{value.toLocaleString('en-US')}</div>
        <div className={`mt-2 inline-flex items-center gap-1 text-sm ${up ? 'text-emerald-400' : 'text-rose-400'}`}>
          {up ? <ArrowUpRight className="size-4" /> : <ArrowDownRight className="size-4" />}
          <span>{Math.abs(delta)}%</span>
        </div>
      </div>

      <div className={`w-14 h-14 rounded-2xl grid place-items-center border border-white/10 ${accent === 'primary' ? 'bg-[var(--color-primary)]/10' : 'bg-[var(--color-secondary)]/10'}`}>
        <div className={`${accent === 'primary' ? 'text-[var(--color-primary)]' : 'text-[var(--color-secondary)]'} text-xl font-bold`}>KPI</div>
      </div>
    </Card>
  )
}