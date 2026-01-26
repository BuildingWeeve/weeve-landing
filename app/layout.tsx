import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weeve - Your Universal Save Layer",
  description:
    "Instantly capture, organize, and return to anything you care about online. From products to recipes to content, Weeve turns every link into a structured, organized card.",
  keywords: ["bookmarking", "organization", "productivity", "AI", "save", "web clipper"],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "Weeve - Your Universal Save Layer",
    description: "Instantly capture, organize, and return to anything you care about online.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
