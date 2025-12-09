import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Crimson_Pro, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
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
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson-pro",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/InterVariable.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const interTight = localFont({
  src: "../public/fonts/InterTight-VariableFont_wght.ttf",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
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
        className={`${satoshi.variable} ${optima.variable} ${crimsonPro.variable} ${bricolageGrotesque.variable} ${inter.variable} ${interTight.variable} antialiased`}
      >
        {/* Gradient background visible sur les côtés */}
        <div
          className="min-h-screen flex justify-center"
          style={{ background: 'linear-gradient(to bottom, #F5EBE1 50%, #FFFFFF 100%)' }}
        >
          {/* Container 550px centré - transform crée un containing block pour les éléments fixed */}
          <div
            className="w-full md:max-w-[550px] min-h-screen relative"
            style={{ transform: 'translateZ(0)' }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
