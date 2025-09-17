import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/shared/Footer";
import ScrollToTopButton from "@/components/shared/ScrollToTop";
import Header from "@/components/shared/Header";
import Image from "next/image";
import gradientImg from "@/public/images/gradient.webp";
const font = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || theme === null) {
          document.documentElement.classList.add('dark');
        }
      })();
    `,
          }}
        />
      </head>
      <body
        className={` ${font.className} relative dark:bg-[#080b0f] dark:text-zinc-50 `}
      >
        <Image
          className="absolute left-0 md:left-1/2 -top-28 -z-10 -translate-x-1/2 lg:scale-100 object-cover w-full"
          src={gradientImg}
          alt="Gradient background"
          priority
        />
        <div className="container max-w-3xl mx-auto">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
