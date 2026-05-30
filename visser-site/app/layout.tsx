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

export const metadata = {
  title: "Stephan Visser | International Automotive Executive",
  description:
    "Executive leadership across global automotive, commercial vehicle and OEM operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020817] text-white">
  <header className="border-b border-gray-900">
    <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a
        href="/"
        className="text-lg font-semibold tracking-wide hover:text-gray-300 transition"
      >
        Visser One
      </a>

      <div className="flex gap-6 text-sm">
        <a
          href="/"
          className="hover:text-gray-300 transition"
        >
          Home
        </a>

        <a
          href="/automotive-careers"
          className="hover:text-gray-300 transition"
        >
          Automotive Careers
        </a>
      </div>
    </nav>
  </header>

  <main className="flex-1">
    {children}
  </main>
</body>
    </html>
  );
}
