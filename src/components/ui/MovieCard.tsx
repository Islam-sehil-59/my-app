import Image from 'next/image'
import Link from 'next/link'

export interface Movie {
  id: number
  title: string
  poster_path: string
  vote_average: number
}

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="rounded-xl shadow-md hover:scale-105 transition">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="w-full"
        />
        <div className="p-2 text-center">
          <h3 className="font-medium">{movie.title}</h3>
          <p className="text-sm text-muted-foreground">{movie.vote_average} ★</p>
        </div>
      </div>
    </Link>
  )
}
