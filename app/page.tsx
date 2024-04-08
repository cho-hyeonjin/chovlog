import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/nav-bar/nav-bar";
import { NAV_BAR_ITEMS } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] pb-10">
      <Navbar />
      <Hero />
      <Footer links={NAV_BAR_ITEMS} />
    </div>
  );
}
