import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

const Preloader = dynamic(() => import("@/components/Preloader"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "Premium Digital Marketing Agency",
  description: "High-end digital marketing services to boost your brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexend.variable} font-inter bg-primary text-slate-100 antialiased`}
      >
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
