import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuyerBench — Built for Buyers. You Decide. We Guide.",
  description:
    "BuyerBench helps buyers make better decisions on property, vehicles, construction and interiors. Independent guidance built exclusively for buyers.",
  keywords: [
    "BuyerBench",
    "independent buyer guidance",
    "property advice for buyers",
    "vehicle buying advice",
    "home construction support",
    "second opinion for buyers",
    "negotiation guidance",
  ],
  openGraph: {
    title: "BuyerBench — Built for Buyers. You Decide. We Guide.",
    description:
      "BuyerBench helps buyers make better decisions on property, vehicles, construction and interiors. Independent guidance built exclusively for buyers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}

