import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavbarLinks from "./nav-bar-links";
import { NAV_BAR_ITEMS } from "@/constants";
// import NavbarRight from './nav-bar-right';
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const ResponsiveNavSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="max-w-[400px] min-h-screen flex flex-col justify-between bg-deep-purple-blue-200"
      >
        <div>logo</div>
        <NavbarLinks
          links={NAV_BAR_ITEMS}
          className="flex flex-col  gap-4 text-white"
        />
        {/* <NavbarRight /> */}
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveNavSidebar;
