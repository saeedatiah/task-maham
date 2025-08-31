'use client'
import { Bell, Search } from 'lucide-react'
import Serchbox from '../ui/Serchbox'

export default function Navbar() {
  return (
    <header className="h-16 bg-[color:var(--panel)]/70 border-b border-white/5 backdrop-blur-sm flex items-center px-4 md:px-6">
      <Serchbox/>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-xl border border-white/10 hover:bg-white/5">
          <Bell />
          <span className="absolute -top-1 -start-1 w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)] " />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-[var(--color-secondary)] to-[var(--color-secondary)] border border-white/10" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">المدير</div>
            <div className="text-[10px] opacity-60">Executive</div>
          </div>
        </div>
      </div>
    </header>
  )
}