import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Movie } from '@/components/ui/MovieCard'

export default function Hero({ movie }: { movie: Movie & { backdrop_path?: string; overview?: string } }) {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden rounded-xl shadow-md">
      {movie.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-background/60 flex flex-col justify-end p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          {movie.title}
        </h1>
        {movie.overview && (
          <p className="mb-4 max-w-lg text-muted-foreground line-clamp-3">
            {movie.overview}
          </p>
        )}
        <div className="mb-4 flex items-center gap-2 text-yellow-400">
          <Star className="size-5" /> {movie.vote_average?.toFixed(1)}
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={`/movie/${movie.id}`}>Watch Now</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/movie/${movie.id}`}>Trailer</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
