import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Crimson_Pro, Bricolage_Grotesque } from "next/font/google";
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
      <body
        className={`${satoshi.variable} ${optima.variable} ${crimsonPro.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
