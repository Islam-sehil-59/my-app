import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const API_KEY = process.env.TMDB_API
const BASE = 'https://api.themoviedb.org/3'

export async function fetchTrendingMovies() {
  try {
    const res = await fetch(`${BASE}/trending/movie/week?api_key=${API_KEY}`)
    if (!res.ok) return { results: [] }
    return res.json()
  } catch {
    return { results: [] }
  }
}

export async function fetchMovieDetails(id: string) {
  try {
    const res = await fetch(
      `${BASE}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
    )
    if (!res.ok) throw new Error('failed')
    return res.json()
  } catch {
    return {
      poster_path: '',
      title: 'Unknown',
      overview: '',
      vote_average: 0,
    }
  }
}

export async function searchMovies(query: string) {
  try {
    const res = await fetch(
      `${BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    )
    if (!res.ok) return { results: [] }
    return res.json()
  } catch {
    return { results: [] }
  }
}
