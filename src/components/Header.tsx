import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1>{"chovlog"}</h1>
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
