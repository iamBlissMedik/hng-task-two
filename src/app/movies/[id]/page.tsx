"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import Image from "next/image";

import { server } from "../../../../config";

import { IMovie } from "@/types/IMovie";
import Genre from "@/components/Genre";
import SideNav from "@/components/SideNav";
import MovieCardDetails from "@/components/MovieCardDetails";
import Loading from "@/components/Loading";
// import Meta from "../../../components/Meta";
type PageProps = {
  params: {
    id: number;
  };
};

const Movie: React.FC<PageProps> = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  useEffect(() => {
    const getMovie = async () => {
      const res = await axios(
        `${server}/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
      );
      const movieRes = await res.data;
      console.log(movieRes);
      setMovie(movieRes);
      setIsLoading(false);
    };
    getMovie();
  }, [params.id]);

  return (
    <div className="flex ">
      <SideNav />
      <div className="container max-w-4xl mx-auto pt-6 font-poppins">
        {isLoading ? <Loading /> : <MovieCardDetails movie={movie} />}
      </div>
    </div>
  );
};

export default Movie;
