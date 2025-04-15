import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { InteractiveElements } from "@/components/interactive-elements";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "John Doe | Full Stack Developer",
  description: "Portfolio website showcasing my work and experience as a Full Stack Developer",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className={`${inter.variable} ${montserrat.variable} font-sans overflow-x-hidden bg-background text-foreground`}>
        <Providers>
          <div className="relative min-h-screen w-full">
            {children}
            <InteractiveElements />
          </div>
        </Providers>
      </body>
    </html>
  );
}
