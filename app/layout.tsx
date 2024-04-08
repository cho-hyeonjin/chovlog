import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jovlog",
  description: "Joy of 3D interactive Web Dev! ;D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "antialiased bg-dark pr-4 pl-4 flex items-center justify-center text-white"
        )}
      >
        <main className="max-w-[1628px] w-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}
