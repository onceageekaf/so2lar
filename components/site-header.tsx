"use client"

import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">O₂</span>
          </div>
          <span className="font-semibold text-slate-900">SO<sub>2</sub>LAR</span>
        </Link>
      </div>
    </header>
  )
}
