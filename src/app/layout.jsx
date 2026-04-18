import { Inter, Reem_Kufi } from "next/font/google";
import "./globals.css";
import { CursorLayer } from "./components/ux/CursorLayer";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const reemKufi = Reem_Kufi({ weight: ['400', '500', '600', '700'], subsets: ["latin"], variable: "--font-reem-kufi", display: "swap" });

export const metadata = {
  title: "BusyGrowth Studio | Jaipur Performance Marketing Agency",
  description: "We help founders scale with Meta Ads, Google Ads & automation.",
  icons: { icon: '/icon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${reemKufi.variable}`}>
      <body className="relative min-h-screen bg-white font-sans text-[#0f172a] antialiased">
        <div className="fixed inset-0 z-0 bg-white" />
        <div className="fixed inset-0 z-0 bg-grid-pattern" />
        <div className="fixed -left-40 top-20 z-0 h-[500px] w-[500px] rounded-full bg-amber-50/50 blur-3xl" />
        <div className="fixed -right-40 bottom-20 z-0 h-[500px] w-[500px] rounded-full bg-yellow-50/50 blur-3xl" />

        <CursorLayer />
        <Header />
        <main className="relative z-10 mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}