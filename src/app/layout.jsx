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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="relative min-h-screen bg-bg-light font-sans text-text-dark antialiased">
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30" />
        <div className="fixed inset-0 z-0 bg-grid-pattern" />
        <div className="fixed -right-40 top-20 z-0 h-[600px] w-[600px] rounded-full bg-cover bg-center opacity-8 blur-3xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800')" }} />
        <div className="fixed -left-40 bottom-20 z-0 h-[500px] w-[500px] rounded-full bg-cover bg-center opacity-6 blur-3xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800')" }} />
        
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