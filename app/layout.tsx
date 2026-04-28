import type { Metadata } from "next";
import "./globals.css";
import { JazzProvider } from "@/components/jazz-provider";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "My Jazz App",
  description: "Built with Jazz and Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>
        <JazzProvider>{children}</JazzProvider>
      </body>
    </html>
  );
}
