import { Inter } from "next/font/google";
import HeaderNav from "@/components/header-nav";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto HEIWA",
  description: "CIBERDEM: Projeto HEIWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialised`}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
