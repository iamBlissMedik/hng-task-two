import { IMovie } from "@/types/IMovie";
import Image from "next/image";
import Link from "next/link";
type MovieCardProps = {
  movie: IMovie;
};
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`} passHref>
      <div
        className="bg-white shadow-sm rounded-md cursor-pointer h-full flex flex-col gap-3 items-center text-center"
        data-testid="movie-card"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          alt={movie.title}
          data-testid="movie-poster"
        />

        <p
          className="text-gray-700 text-base mb-1"
          data-testid="movie-release-date"
        >
          {movie.release_date}
        </p>
        <p className="font-bold text-xl mb-1 " data-testid="movie-title">
          {movie.title}
        </p>
      </div>
    </Link>
  );
};
export default MovieCard;
