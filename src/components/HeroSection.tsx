import NavBar from "./NavBar";
import Poster from "../assets/Poster.png";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <NavBar />
      {/* hero section */}
      <div className="bg-cover relative text-white px-10 py-24 font-Dm_sans ">
        <Image
          src={Poster.src}
          quality={40}
          fill
          objectFit="cover"
          alt="johnWick"
          priority
        />
        <div className=" container mx-auto relative">
          <div className="w-[400px]  flex flex-col gap-3 ">
            <h1 className="text-5xl leading-[56px] font-bold">
              John Wick 3: Parabellum
            </h1>
            {/* rating */}
            <div></div>
            {/* description */}
            <p className="text-sm w-[300px] font-medium leading-[18px]">
              John Wick is on the run after killing a member of the
              international assassins guild, and with a $14 million price tag on
              his head, he is the target of hit men and women everywhere.
            </p>
            {/* button */}
            <button className="bg-[#BE123C] text-xl rounded-xl w-fit flex items-center justify-between px-[6px] py-4 space-x-4">
              <FaPlayCircle />
              <span> WATCH TRAILER</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
