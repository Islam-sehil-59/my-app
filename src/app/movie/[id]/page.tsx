import Image from 'next/image'
import { fetchMovieDetails } from '@/lib/utils'

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await fetchMovieDetails(params.id)

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
        className="w-full"
      />
      <div>
        <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
        <p className="text-muted-foreground mb-4">{movie.overview}</p>
        <p>Rating: {movie.vote_average} ★</p>
      </div>
    </div>
  )
}
