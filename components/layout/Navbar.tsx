'use client'
import { Bell, Search } from 'lucide-react'
import Serchbox from '../ui/Serchbox'
import Avatar from '../ui/Avatar'

export default function Navbar() {
  return (
    <header className="h-16 sticky top-0 z-50 shadow-lg border-white/5 backdrop-blur-sm flex items-center px-4 md:px-6 bg-[var(--color-primary)]/20">
      <Serchbox/>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-xl border border-white/10 hover:bg-white/5">
          <Bell />
          <span className="absolute -top-1 -start-1 w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)] " />
        </button>

      <Avatar name="محمد علي" role="أدمن" />
      </div>
    </header>
  )
}