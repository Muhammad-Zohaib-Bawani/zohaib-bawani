import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zohaib Bawani | Full Stack Software Engineer",
  description: "Modern portfolio of Zohaib Bawani, a Full Stack Software Engineer specializing in Next.js, .NET, and Scalable Applications.",
  keywords: ["Full Stack Engineer", "React Developer", ".NET Core", "Next.js Portfolio", "Software Engineer Pakistan"],
};

import { ThemeProvider } from "@/components/theme-provider";
import { MagicalBackground } from "@/components/MagicalBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MagicalBackground />
          <div className="fixed top-20 right-6 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
