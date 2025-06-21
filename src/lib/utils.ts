import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const API_KEY = process.env.TMDB_API
const BASE = 'https://api.themoviedb.org/3'

export async function fetchTrendingMovies() {
  const res = await fetch(`${BASE}/trending/movie/week?api_key=${API_KEY}`)
  return res.json()
}

export async function fetchMovieDetails(id: string) {
  const res = await fetch(
    `${BASE}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
  )
  return res.json()
}

export async function searchMovies(query: string) {
  const res = await fetch(
    `${BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  )
  return res.json()
}
