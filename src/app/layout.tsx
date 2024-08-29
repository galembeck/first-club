import type { Metadata } from "next";
import { Alfa_Slab_One, Bungee_Inline, Poppins } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { SITE_CONFIG } from "@/config";

import { cn } from "@/lib/utils";

import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

import "./globals.css";

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-poppins',
});
const bungeeInline = Bungee_Inline({ 
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-bungee-inline',
});
const alfaSlabOne = Alfa_Slab_One({ 
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-alfa-slab-one',
});

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body className={cn(
        poppins.className, 
        bungeeInline.variable, 
        alfaSlabOne.variable, 
        "min-h-screen bg-slate-950 text-white antialiased")}
      >
        <ClerkProvider appearance={{baseTheme: dark}}>
          <Header />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
