import Image from "next/image";
import logo from "./../../../assets/logo.png";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="#" className="h-full">
      <Image src={logo} className="h-full object-contain" alt="logo" />
    </Link>
  );
};

export default Logo;
