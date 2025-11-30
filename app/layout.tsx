import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Crimson_Pro, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "300 900",
});

const optima = localFont({
  src: [
    {
      path: "../public/fonts/OPTIMA.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Optima_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/OPTIMA_B.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-optima",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson-pro",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "Quiz ByeBail",
  description: "Questionnaire ByeBail",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TK2NX5XJ');`,
          }}
        />
      </head>
      <body
        className={`${satoshi.variable} ${optima.variable} ${crimsonPro.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TK2NX5XJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
