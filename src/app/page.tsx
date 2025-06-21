import MovieCard from '@/components/ui/MovieCard'
import { fetchTrendingMovies } from '@/lib/utils'

interface Movie {
  id: number
  title: string
  poster_path: string
  vote_average: number
}

export default async function Home() {
  const data = await fetchTrendingMovies()
  const movies: Movie[] = data.results ?? []

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
