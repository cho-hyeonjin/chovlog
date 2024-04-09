import Link from "next/link";
import { Github, LinkedinIcon, Mail, Youtube, YoutubeIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full text-center mt-auto">
      <div className="flex items-center justify-center gap-2">
        <hr />

        <Link href="https://github.com/cho-hyeonjin" target="_blank">
          <Github size={14} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/hyeonjin-cho-%EC%A1%B0%ED%98%84%EC%A7%84-3b85b2238/"
          target="_blank"
        >
          <LinkedinIcon size={14} />
        </Link>
        <Link href="mailto:gusls2005@gmail.com" target="_blank">
          <Mail size={14} />
        </Link>
        <Link href="https://youtube.com/@justdoiteveryday" target="_blank">
          <Youtube size={14} />
        </Link>
      </div>
      <span className="text-xs">
        Copyright © {new Date().getFullYear()} JoHyunJin
      </span>
    </footer>
  );
};

export default Footer;
