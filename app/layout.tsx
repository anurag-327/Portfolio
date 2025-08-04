import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import gradientImg from "@/public/images/gradient.webp";
import { Footer } from "@/components/shared/Footer";
import ScrollToTopButton from "@/components/shared/ScrollToTop";
import Header from "@/components/shared/Header";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag Srivastav",
  description:
    "Anurag Srivastav - Founding Engineer at Codolio, Backend-focused Full-Stack Developer, and Tech Blogger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
              localStorage.getItem('theme') ==="dark" && document.documentElement.classList.add('dark') 
              })();
            `,
          }}
        />
      </head>
      <body
        className={` ${inter.className} relative dark:bg-black dark:text-white `}
      >
        <Image
          className="absolute left-0 md:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover w-full"
          src={gradientImg}
          alt="Gradient background"
          priority
        />
        <div className="container max-w-3xl mx-auto min-h-screen flex flex-col px-4 py-5">
          <Header />
          {children}
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
