import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-secondary flex w-full select-none items-end pt-8 pb-12">
      <nav>
        <Link href="/" className="mr-2" aria-label="logo">
          🏠Home
        </Link>
        <Link href="/posts" className="px-3 py-1.5">
          📑Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
