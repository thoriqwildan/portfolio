import type { Metadata } from "next";
import "./globals.css";
import { dm_sans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Thoriq Wildan - Portfolio",
  description: "Thoriq's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${dm_sans.className} bg-bgprimary-100 `}
      >
        {children}
      </body>
    </html>
  );
}
