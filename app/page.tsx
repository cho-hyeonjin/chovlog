import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/nav-bar/nav-bar";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] pb-10">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
