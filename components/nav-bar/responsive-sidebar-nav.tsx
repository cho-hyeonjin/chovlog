import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HeaderLinks from "./nav-bar-links";
import { NAV_BAR_ITEMS } from "@/constants";
// import HeaderRight from './nav-bar-right';
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
        <HeaderLinks
          links={NAV_BAR_ITEMS}
          className="flex flex-col  gap-4 text-white"
        />
        {/* <HeaderRight /> */}
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveNavSidebar;
