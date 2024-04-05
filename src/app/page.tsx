import FeaturedPosts from "@/components/FeaturedPosts";
import React from "react";

const HomePage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6 text-neutral-200 border">
        chovlog
      </h2>
      <FeaturedPosts />
    </>
  );
};

export default HomePage;
