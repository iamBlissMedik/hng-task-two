import { IMovie } from "@/types/IMovie";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import Genre from "./Genre";
type MovieCardDetailsProps = {
  movie?: IMovie;
};

const MovieCardDetails: React.FC<MovieCardDetailsProps> = ({ movie }) => {
  return (
    <div className="px-3 flex flex-col gap-3">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        width={1000}
        height={600}
        className="rounded-md"
        alt={(movie?.title as string) || ""}
      />
      <div className=" px-3 py-4  ">
        <div className=" md:flex items-center font-bold text-base lg:text-[23px] leading-[34px] md:space-x-2 ">
          <h1 className="font-bold " data-testid="movie-title">
            {movie?.title}
          </h1>
          <div className="hidden md:block">
            <LuDot />
          </div>
          <p className="font-bold" data-testid="movie-release-date">
            {movie?.release_date}
          </p>
          <div className="hidden md:block">
            <LuDot />
          </div>
          <p data-testid="movie-runtime">{movie?.runtime}m</p>
          <div className="md:px-3 flex gap-2">
            {movie?.genres.map((genre, index) => (
              <Genre genre={genre} key={index} />
            ))}
          </div>
        </div>
        <p className=" text-xl mt-4" data-testid="movie-overview">
          {movie?.overview}
        </p>
      </div>
    </div>
  );
};
export default MovieCardDetails;
