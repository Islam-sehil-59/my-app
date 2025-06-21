'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import ThemeToggle from './theme-toggle'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?query=${encodeURIComponent(query)}`)
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 bg-background px-6 py-4 shadow-md">
      <Link href="/" className="text-lg font-bold tracking-tight">
        AGENCY
      </Link>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="/">New</Link>
        <Link href="/">Movies</Link>
        <Link href="/">Series</Link>
        <Link href="/">Cartoons</Link>
      </div>
      <form onSubmit={onSubmit} className="mx-4 flex-1 max-w-sm">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="pl-8"
          />
        </div>
      </form>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Avatar>
          <AvatarImage src="" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}
