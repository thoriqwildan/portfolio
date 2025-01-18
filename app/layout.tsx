import type { Metadata } from "next";
import "./globals.css";
import { dm_sans } from "./ui/fonts";
import { BackgroundBeams } from "./ui/background-beams";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster, toast } from 'sonner'

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
    <html lang="en" className="!scroll-smooth dark:bg-bgprimary-100">
      <body
        className={`${dm_sans.className}`}
      >
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <BackgroundBeams/>
          <Toaster expand={true} richColors position="top-center"/>
        </ThemeProvider>
      </body>
    </html>
  );
}
