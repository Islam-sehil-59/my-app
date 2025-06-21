'use client'

import { useState, useEffect } from 'react'
import MovieCard from '@/components/ui/MovieCard'
import { searchMovies } from '@/lib/utils'

interface Movie {
  id: number
  title: string
  poster_path: string
  vote_average: number
}

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Movie[]>([])

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }
    const t = setTimeout(() => {
      searchMovies(query).then((d) => setResults(d.results ?? []))
    }, 300)
    return () => clearTimeout(t)
  }, [query])

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-full p-2 rounded border mb-4 text-black dark:text-white"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
