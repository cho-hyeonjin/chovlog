"use client";
import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../components/Icons";
import { useThemeSwitch } from "../components/Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "../utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full py-4 flex items-center justify-between">
      <Logo mode={mode} />

      {/* hamburger button - mobile size */}
      <button
        className="inline-block sm:hidden fixed right-10 z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      {/* 📱 mobile size */}
      <nav
        className={cx(
          "w-max mt-1.5 py-4 pl-20 text-sm font-medium capitalize items-center flex sm:hidden fixed top-6 right-1/4 translate-x-1/4 z-50 transition-all ease duration-300",
          mode === "light" ? "text-dark" : "text-light"
        )}
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link
          href="/"
          className={cx(
            "mr-1.5",
            mode === "light"
              ? "text-dark hover:text-violet-600"
              : "text-light hover:text-yellow-400"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cx(
            "mx-1.5",
            mode === "light"
              ? "text-dark hover:text-violet-600"
              : "text-light hover:text-yellow-400"
          )}
        >
          About
        </Link>
        {/* <Link
          href="/contact"
          className={cx(
            "mx-1.5",
            mode === "light"
              ? "text-dark hover:text-violet-600"
              : "text-light hover:text-yellow-400"
          )}
        >
          Contact
        </Link> */}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light"
              ? "bg-dark text-light hover:bg-violet-600 hover:text-ligth"
              : "bg-light text-dark hover:bg-yellow-500 hover:text-light"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      {/* 🖥️ wide size*/}
      <nav className="w-max font-medium text-xl capitalize items-center hidden sm:flex z-50">
        <Link
          href="/"
          className={cx(
            "mr-2",
            mode === "light"
              ? "text-dark hover:text-violet-600"
              : "text-light hover:text-yellow-400"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cx(
            "mx-2",
            mode === "light"
              ? "text-dark hover:text-violet-600"
              : "text-light hover:text-yellow-400"
          )}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={cx(
            "mx-2",
            mode === "light"
              ? "text-dark hover:text-violet-600"
              : "text-light hover:text-yellow-400"
          )}
        >
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-7 h-7 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light"
              ? "bg-dark text-light hover:bg-violet-600 hover:text-ligth"
              : "bg-light text-dark hover:bg-yellow-400 hover:text-light"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
};
export default Header;
