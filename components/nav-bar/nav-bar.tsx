import { NAV_BAR_ITEMS } from "@/constants";
import NavbarLinks from "./nav-bar-links";
// import NavbarRight from "./nav-bar-right";
import ResponsiveNavSidebar from "./responsive-sidebar-nav";
import logo3 from "@/public/logo3.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-20">
        <Link href="/" className="flex items-center">
          <div className="w-14 md:w-18 overflow-hidden">
            <Image
              src={logo3}
              alt="logo-dark"
              className="w-full"
              sizes="20vw"
              priority
            />
          </div>
          <span className="ml-1 font-bold text-xl text-light">Jovlog</span>
        </Link>
        <NavbarLinks links={NAV_BAR_ITEMS} />
        {/* <div className="hidden md:flex">
          <NavbarRight />
        </div> */}
        <div className="flex md:hidden">
          <ResponsiveNavSidebar />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
