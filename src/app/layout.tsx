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
  metadataBase: new URL("https://www.pollomio.in"),
  title: {
    default: "Best Burger Shop in Kattanam | Pollomio",
    template: "%s | Pollo Mio",
  },
  description: "Looking for the best burger shop in Kattanam? Pollomio offers fresh, juicy burgers, loaded fries, and fast delivery for the ultimate tasty burger experience.",

  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "Best Burger Shop in Kattanam | Pollomio",
    description: "Looking for the best burger shop in Kattanam? Pollomio offers fresh, juicy burgers, loaded fries, and fast delivery for the ultimate tasty burger experience.",
    url: "https://www.pollomio.in",
    siteName: "Pollo Mio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Burger Shop in Kattanam | Pollomio",
    description: "Looking for the best burger shop in Kattanam? Pollomio offers fresh, juicy burgers, loaded fries, and fast delivery for the ultimate tasty burger experience.",
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
