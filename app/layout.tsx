import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import MenuBar from "@/components/menuBar/MenuBar";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/scrollToTop/scrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Umapathi K | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-background text-foreground`}>
        <MenuBar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
