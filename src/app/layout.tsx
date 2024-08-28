import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { SITE_CONFIG } from "@/config";

import { cn } from "@/lib/utils";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body className={cn(poppins.className, "min-h-screen bg-slate-950 text-white antialiased")}>
        <ClerkProvider appearance={{baseTheme: dark}}>
          <Header />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
