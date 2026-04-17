import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { CursorLayer } from "./components/ux/CursorLayer";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
  title: "BusyGrowth Studio | Jaipur-Based Performance Agency",
  description: "We build digital experiences that print leads on autopilot using reels, ads & automation.",
  icons: { icon: '/icon.png' },
  openGraph: {
    title: "BusyGrowth Studio | Scale Your Brand",
    description: "Performance marketing, content & automation for founders and creators.",
    url: "https://busygrowth.studio",
    siteName: "BusyGrowth Studio",
    images: [{ url: "https://busygrowth.studio/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BusyGrowth Studio",
    description: "Performance marketing agency for founders & creators",
    images: ["https://busygrowth.studio/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="relative min-h-screen bg-bg-light font-sans text-text-dark antialiased">
        {/* Base Gradient Background */}
        <div className="fixed inset-0 z-0 bg-linear-to-br from-slate-50 via-white to-amber-50/30" />
        
        {/* Grid Pattern Overlay */}
        <div className="fixed inset-0 z-0 bg-grid-pattern" />
        
        {/* DM-Related Background Images */}
        <div 
          className="fixed -right-40 top-20 z-0 h-150 w-150 rounded-full bg-cover bg-center opacity-8 blur-3xl"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800')" }}
        />
        <div 
          className="fixed -left-40 bottom-20 z-0 h-150 w-150 rounded-full bg-cover bg-center opacity-6 blur-3xl"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800')" }}
        />
        <div 
          className="fixed left-1/4 top-1/3 z-0 h-150 w-150 rounded-full bg-cover bg-center opacity-4 blur-3xl"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800')" }}
        />
        <div 
          className="fixed right-1/4 bottom-1/4 z-0 h-150 w-150 rounded-full bg-cover bg-center opacity-5 blur-3xl"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800')" }}
        />
        
        <CursorLayer />
        <Header />
        <main className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}