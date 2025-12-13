import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFH Property Advisor - 1713 Winterwood Drive",
  description: "Find optimal AFH providers and plan property conversion for Adult Family Home operation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-blue-900 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">AFH Property Advisor</h1>
              <div className="flex gap-4">
                <Link href="/" className="hover:text-blue-200">Dashboard</Link>
                <Link href="/scenarios" className="hover:text-blue-200">Scenarios</Link>
                <Link href="/floor-plan" className="hover:text-blue-200">Floor Plan</Link>
                <Link href="/timeline" className="hover:text-blue-200">Timeline & Budget</Link>
                <Link href="/marketing" className="hover:text-blue-200">Marketing</Link>
                <Link href="/providers" className="hover:text-blue-200">Provider Search</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
