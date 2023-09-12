import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type LogoProps = {
  Logo: string;
};
const LogoP: React.FC<LogoProps> = ({ Logo }) => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2 lg:space-x-4  font-Dm_sans ">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <p>MovieBox</p>
      </div>
    </Link>
  );
};
export default LogoP;
