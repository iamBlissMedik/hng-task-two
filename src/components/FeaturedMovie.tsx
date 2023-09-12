import Link from "next/link";
import MovieCard from "./MovieCard";
import { IMovie } from "@/types/IMovie";

type FeaturedMovieProp = {
  movies: IMovie[];
};
const FeaturedMovie: React.FC<FeaturedMovieProp> = ({ movies }) => {
  return (
    <div className="py-10 px-10">
      <div className="container mx-auto font-Dm_sans">
        <div className="flex justify-between items-center mb-4">
          {/* title */}
          <h1 className="font-bold text-4xl">Featured Movie</h1>
          {/* button see more */}
          <Link href="#" className="text-[#BE123C] text-lg font-normal">
            See more<span>&gt;</span>
          </Link>
        </div>

        {/* movies */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeaturedMovie;
