import { NAV_BAR_ITEMS } from "@/constants";
import HeaderLinks from "./nav-bar-links";
// import HeaderRight from "./nav-bar-right";
import ResponsiveNavSidebar from "./responsive-sidebar-nav";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-20">
        <div>Logo</div>
        <HeaderLinks links={NAV_BAR_ITEMS} />
        {/* <div className="hidden md:flex">
          <HeaderRight />
        </div> */}
        <div className="flex md:hidden">
          <ResponsiveNavSidebar />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
