import Link from "next/link";

const NavItems = () => {
  return (
    <div className="flex gap-10 items-center">
      <Link className="text-nowrap" href="#choose">
        Home
      </Link>
      <Link className="text-nowrap" href="#services">
        Services
      </Link>
      <Link className="text-nowrap" href="#about">
        About
      </Link>
      <Link className="text-nowrap" href="#contact">
        Contact Us
      </Link>

      <button className="px-6 py-4 border border-black rounded-md">
        Get a Consultation
      </button>
    </div>
  );
};

export default NavItems;
