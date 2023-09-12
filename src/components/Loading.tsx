import Image from "next/image";
import Spinner from "../assets/spinner4.gif";
const Loading = () => {
  return (
    <>
      <Image
        src={Spinner}
        alt="Loading..."
        className="w-[100px] h-[auto] mx-auto my-[40px] bg-transparent"
      />
    </>
  );
};
export default Loading;
