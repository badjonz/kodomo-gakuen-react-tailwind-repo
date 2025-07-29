import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";
import  Header  from "@/components/Header/Header";// Import your Header component

const noto = Noto_Sans_JP({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Kodomo Gakuen",
  description: "Template created by Jon Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(noto.className, "antialiased bg-[#FAF9F9]")}>
        {/* Persistent Header */}
        <Header />
        
        {/* Page Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}