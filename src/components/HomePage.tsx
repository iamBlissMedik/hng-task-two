"use client";
import { useEffect, useState } from "react";
import FeaturedMovie from "./FeaturedMovie";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import axios from "axios";
import { server } from "../../config";
import { IMovie } from "@/types/IMovie";
import Loading from "./Loading";
import Footer from "./Footer";

const HomePage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios(
          `${server}/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
        );
        const moviesRes = res.data;
        // Limit the results to the top 10 movies
        const top10Movies = moviesRes.results.slice(0, 10);
        setMovies(top10Movies);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);
  console.log(movies);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <HeroSection />
          <FeaturedMovie movies={movies} />
          <Footer />
        </>
      )}
    </div>
  );
};
export default HomePage;
