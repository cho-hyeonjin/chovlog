"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NAV_LINK } from "@/types";
import Link from "next/link";

interface IHeaderLinks {
  links: NAV_LINK[];
  className?: string;
}

const HeaderLinks: React.FC<IHeaderLinks> = ({ links, className }) => {
  return (
    <NavigationMenu className={cn("hidden md:flex", className)}>
      <NavigationMenuList className={className}>
        {links.map(({ id, name, path }) => {
          return (
            <Link href={path} key={id}>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderLinks;
