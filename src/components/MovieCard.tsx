"use client";
import { IMovie } from "@/types/IMovie";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  movie: IMovie;
};
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="relative">
      <Link href={`/movies/${movie.id}`} passHref>
        <div
          className="bg-white  rounded-md cursor-pointer h-full flex flex-col gap-3 items-center text-center relative shadow-md"
          data-testid="movie-card"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width={700}
            height={800}
            blurDataURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            priority
            alt={movie.title}
            data-testid="movie-poster"
          />
          <p
            className="font-bold text-xl text-center h-full"
            data-testid="movie-title"
          >
            {movie.title}
          </p>
          <p
            className="text-gray-700 text-base py-2 "
            data-testid="movie-release-date"
          >
            {movie.release_date}
          </p>
        </div>
      </Link>
      <button
        onClick={() => setLiked(!liked)}
        className={` absolute top-3 text-2xl right-2 text-red-500  bg-white rounded-full p-[1px] ${
          liked ? "opacity-100" : "opacity-50"
        }`}
      >
        ❤️
      </button>
    </div>
  );
};
export default MovieCard;
