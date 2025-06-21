import MovieCard, { Movie } from '@/components/ui/MovieCard'

export default function MovieCarousel({ movies, title }: { movies: Movie[]; title: string }) {
  if (!movies.length) return null
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2 hide-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}
