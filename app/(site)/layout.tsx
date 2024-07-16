"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Bricolage_Grotesque, Kameron, Lora } from "next/font/google";
import "../globals.css";
const kameron = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-lora",
  display: "swap",
});

import ToasterContext from "../context/ToastContext";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-background ${kameron.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
