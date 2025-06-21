import Hero from '@/components/hero'
import MovieCarousel from '@/components/movie-carousel'
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

  const [featured, ...rest] = movies

  return (
    <div className="space-y-8">
      {featured && <Hero movie={featured} />}
      <MovieCarousel movies={rest} title="Trending" />
    </div>
  )
}
