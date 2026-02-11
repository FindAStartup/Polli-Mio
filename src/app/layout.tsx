import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pollo Mio",
  description: "Pollo Mio Chicken & Sides",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="NC6T0M4-d6kx3bi-D_J6F8851kVi8e-pUK2m1NyEqVc" />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased over`}
      >
        {children}
      </body>
    </html>
  );
}
