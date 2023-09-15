import LogoP from "./LogoP";
import { AiOutlineHome } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
const SideNav = () => {
  return (
    <div className="px-4 flex  flex-col py-8 w-fit rounded-r-[45px] border border-solid border-gray-500 font-poppins min-h-screen">
      <LogoP Logo={"/tv.png"} />
      <div className="font-semibold text-xl flex flex-col items-center gap-4 text-[#666666] mt-24 ">
        <div className="flex gap-3 items-center ">
          <AiOutlineHome />
          <span>Home</span>
        </div>
        <div className="flex gap-3 items-center ">
          <BsCameraReels />
          <span>Movies</span>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
