import type { Metadata } from "next";
import "./globals.css";
import { dm_sans } from "./ui/fonts";
import { ThemeProvider } from "./components/theme-provider";
import { BackgroundBeams } from "./ui/background-beams";

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
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <BackgroundBeams/>
      </body>
    </html>
  );
}
