import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import "./print.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Al-Khalifah International School | Surulere, Lagos",
  description:
    "Al-Khalifah International School (ALKHIS) — Knowledge with Faith, Character with Excellence. Crèche through Primary 6 in Surulere, Lagos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${caveat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}