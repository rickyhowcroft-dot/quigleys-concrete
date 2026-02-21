import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quigley's Concrete | Patios & Sidewalks | Rochester, NY",
  description:
    "Family-owned concrete contractor serving the greater Rochester, NY area for over 20 years. Patios, sidewalks, driveways, stamped concrete, and more. Call (585) 831-7241 for a free estimate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
