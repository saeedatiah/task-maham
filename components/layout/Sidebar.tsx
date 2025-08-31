'use client'
import Link from 'next/link'
import { BarChart3, Home, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-72 hidden md:flex flex-col gap-4 p-4 border-l border-white/5  sticky top-0 h-screen">
      <div className="px-1 py-3">
        Logo 
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        <Link href="/" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition border ${pathname === '/' ? 'bg-[var(--color-primary)]/15 text-[var(--color-secondary)] border-[var(--color-primary)]/30' : 'hover:bg-white/5 text-white/90 border-transparent'}`}>
          <Home className="min-w-[18px]" /> <span className="font-medium">الرئيسية</span>
        </Link>

        <Link href="/executive/kpis" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition border ${pathname?.startsWith('/executive') ? 'bg-[var(--color-primary)]/15 text-[var(--color-secondary)] border-[var(--color-primary)]/30' : 'hover:bg-white/5 text-white/90 border-transparent'}`}>
          <BarChart3 /> <span className="font-medium">المؤشرات التنفيذية</span>
        </Link>

      </nav>

      <div className="mt-auto text-xs opacity-60 px-2">© {new Date().getFullYear()} Executive Suite</div>
    </aside>
  )
}