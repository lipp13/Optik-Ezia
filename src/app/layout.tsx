import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Optik Ezia — See the World Differently",
  description:
    "Where precision eye care meets contemporary eyewear. Explore luxury titanium frames, ZEISS digital wavefront vision examinations, and store boutiques across Indonesia.",
  keywords: [
    "Optik Ezia",
    "Luxury Eyewear Indonesia",
    "Optical Store Jakarta",
    "Titanium Frames",
    "ZEISS Lens Care",
    "Eye Examination Indonesia",
  ],
  authors: [{ name: "Optik Ezia Creative Team" }],
  openGraph: {
    title: "Optik Ezia — See the World Differently",
    description:
      "Where precision eye care meets contemporary eyewear. Explore luxury titanium frames and optical care in Indonesia.",
    url: "https://www.optikezia.id",
    siteName: "Optik Ezia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optik Ezia — See the World Differently",
    description:
      "Where precision eye care meets contemporary eyewear.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth dark`}>
      <body className="bg-ezia-black text-ezia-ivory antialiased selection:bg-ezia-champagne selection:text-ezia-black bg-grain">
        <Preloader />
        <CustomCursor />
        <SmoothScrollProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
