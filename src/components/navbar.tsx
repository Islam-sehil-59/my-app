'use client'

import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between border-b">
      <Link href="/" className="font-semibold">TMDB Movies</Link>
      <div className="flex items-center gap-2">
        <Link href="/search" className="text-sm underline">Search</Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
