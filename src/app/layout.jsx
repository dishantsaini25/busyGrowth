import { Inter, Reem_Kufi } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const reemKufi = Reem_Kufi({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-reem-kufi", display: "swap" });

export const metadata = {
  title: "BusyGrowth Studio | Performance Marketing Agency",
  description: "We help founders scale with Meta Ads, Google Ads & automation.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${reemKufi.variable}`}>
      <body className="relative min-h-screen bg-bg-light font-sans text-text-dark antialiased">

        {/* Main Gradient Background */}
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-teal-50/40" />

        {/* Grid Pattern */}
        <div className="fixed inset-0 z-0 bg-grid-pattern" />

        {/* Floating Orbs — exact logo colors */}
        <div className="fixed -right-40 top-20 z-0 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{ background: "rgba(37, 99, 235, 0.08)" }} />   {/* Brand Blue */}
        <div className="fixed -left-40 bottom-20 z-0 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(15, 184, 160, 0.07)" }} />  {/* Brand Teal */}
        <div className="fixed left-1/3 top-1/2 z-0 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{ background: "rgba(34, 197, 94, 0.06)" }} />   {/* Brand Green */}

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