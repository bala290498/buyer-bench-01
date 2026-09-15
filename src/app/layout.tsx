import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://buyerbench.com"),
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "BuyerBench — Built for Buyers. You Decide. We Guide.",
    description:
      "BuyerBench helps buyers make better decisions on property, vehicles, construction and interiors. Independent guidance built exclusively for buyers.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BuyerBench — Built for Buyers. You Decide. We Guide.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyerBench — Built for Buyers. You Decide. We Guide.",
    description:
      "BuyerBench helps buyers make better decisions on property, vehicles, construction and interiors.",
    images: ["/og-image.jpg"],
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

