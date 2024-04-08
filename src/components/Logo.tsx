import Image from "next/image";
import Link from "next/link";
import logo0 from "../../public/logo0.png";
import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import logo3 from "../../public/logo3.png";

const Logo = ({ mode }) => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-16 md:w-20 overflow-hidden">
        {mode === "light" ? (
          <Image
            src={logo2}
            alt="CodeBucks logo"
            className="w-full"
            sizes="20vw"
            priority
          />
        ) : (
          <Image
            src={logo3}
            alt="CodeBucks logo"
            className="w-full"
            sizes="20vw"
            priority
          />
        )}
      </div>
      <span className="ml-1 font-bold text-3xl dark:font-semibold">
        chovlog
      </span>
    </Link>
  );
};

export default Logo;
