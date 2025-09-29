import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Imago Sacra Coaching",
  description: "A sacred circle of growth and transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
