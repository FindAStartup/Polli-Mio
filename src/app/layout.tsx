import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  alternates: {
    canonical: "https://www.pollomio.in",
  },

  title: {
    default: "Best Fried Chicken in Kattanam | Pollomio",
    template: "%s | Pollo Mio",
  },
  description: "Enjoy the best fried chicken in Kattanam at Pollomio. Crispy chicken, tasty burgers, and fresh meals served daily. Visit today for great taste and quality now",

  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "Best Fried Chicken in Kattanam | Pollomio",
    description: "Enjoy the best fried chicken in Kattanam at Pollomio. Crispy chicken, tasty burgers, and fresh meals served daily. Visit today for great taste and quality now",
    url: "https://www.pollomio.in",
    siteName: "Pollo Mio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fried Chicken in Kattanam | Pollomio",
    description: "Enjoy the best fried chicken in Kattanam at Pollomio. Crispy chicken, tasty burgers, and fresh meals served daily. Visit today for great taste and quality now",
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WRKT9KV5');
          `}
        </Script>

        {/* End Google Tag Manager */}

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pollomio - Fried Chicken & Burgers" />
        <meta property="og:description" content="Delicious fried chicken, burgers and fast food." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pollomio.in/" />
        <meta property="og:image" content=" " />


      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased over`}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRKT9KV5"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
