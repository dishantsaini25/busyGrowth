import { Inter, Reem_Kufi } from "next/font/google";
import "./globals.css";
import { CursorLayer } from "./components/ux/CursorLayer";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";


const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

const reemKufi = Reem_Kufi({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-reem-kufi",
  display: "swap"
});

export const metadata = {
  title: "BusyGrowth Studio | Performance Marketing Agency",
  description: "We help founders scale with Meta Ads, Google Ads & automation. Data-driven performance marketing.",
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
    <html lang="en" className={`${inter.variable} ${reemKufi.variable}`}>
      <body className="relative min-h-screen bg-bg-primary font-sans text-text-primary antialiased">
        {/* Background Layers */}
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" />
        <div className="fixed inset-0 z-0 bg-grid-pattern opacity-[0.12]" />
        <div className="fixed inset-0 z-0 bg-dot-pattern opacity-[0.06]" />
        
        {/* Colorful Floating Orbs */}
        <div className="fixed -left-40 top-20 z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-amber-300/20 to-orange-300/20 blur-3xl" />
        <div className="fixed -right-40 bottom-20 z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-rose-300/20 to-pink-300/20 blur-3xl" />
        <div className="fixed left-1/4 top-1/3 z-0 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-cyan-300/15 to-teal-300/15 blur-3xl" />
        <div className="fixed right-1/4 top-2/3 z-0 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-purple-300/15 to-indigo-300/15 blur-3xl" />
        
        <CursorLayer />
        <Header />
        <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}