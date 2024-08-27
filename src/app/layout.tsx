import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "First Club | Choose a club and receive a Olimpic Calendar",
  description: "First Club is a platform to choose a club between different moddalities such as chess, astronomy and olimpics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body className={cn(poppins.className, "min-h-screen bg-slate-950 text-white antialiased")}>
        {children}
      </body>
    </html>
  );
}
