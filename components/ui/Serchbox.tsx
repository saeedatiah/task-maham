import { Search } from 'lucide-react'
import React from 'react'

const Serchbox = () => {
  return (
    <div className="flex-1 flex items-center gap-3 ">
        <div className="relative w-full max-w-md ">
          <input placeholder="ابحث…" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-[color:var(--secondary)]" />
          <Search className="absolute end-3 top-2.5 opacity-60 " />
        </div>
      </div>
  )
}

export default Serchbox
