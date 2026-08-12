import type { Metadata } from "next";
import { Geist, Geist_Mono, Elms_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { Toaster } from "sonner";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const elmsSans = Elms_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rawdon Noronha",
  description:
    "Rawdon Noronha is a software developer specializing in React, Next.js, TypeScript, ASP.NET, and modern web development.",
  keywords: [
    "Rawdon Noronha",
    "Rawdon Arvino Jobais Noronha",
    "Rawdon Noronha developer",
    "Rawdon Noronha software developer",
    "Rawdon Noronha portfolio",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Rawdon Noronha" }],
  creator: "Rawdon Noronha",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${elmsSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
