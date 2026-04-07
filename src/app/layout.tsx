import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innovation Lab | Regenerative Agriculture Solutions",
  description:
    "Innovation Lab designs and deploys smart IoT solutions for regenerative agriculture. From water level sensors to farm monitoring systems, we help farmers and land managers work smarter and restore soil health.",
  keywords: [
    "regenerative agriculture",
    "IoT",
    "smart farming",
    "water level sensor",
    "soil health",
    "farm technology",
    "agroforestry",
  ],
  openGraph: {
    title: "Innovation Lab | Regenerative Agriculture Solutions",
    description:
      "Smart IoT solutions for regenerative agriculture. Restoring soil health and helping farmers work smarter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
