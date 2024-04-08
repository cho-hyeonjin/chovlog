import { NAV_LINK } from "@/types";
import Link from "next/link";

interface IFooter {
  links: NAV_LINK[];
}

const Footer: React.FC<IFooter> = ({ links }) => {
  return (
    <div>
      <hr />
      <h1 className="text-center text-3xl font-semibold text-accentDark">
        Footer
      </h1>
    </div>
  );
};

export default Footer;
