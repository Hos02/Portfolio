import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight animate-fadeInUp">HB</Link>
        <button
          className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded border hover:bg-foreground hover:text-background transition-colors"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i-[menu]">≡</span>
        </button>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link className="hover:underline underline-offset-4 transition-opacity hover:opacity-80 animate-fadeInUp-delayed" href="/about">About</Link>
          <Link className="hover:underline underline-offset-4 transition-opacity hover:opacity-80 animate-fadeInUp-delayed" href="/works">Works</Link>
          <Link className="hover:underline underline-offset-4 transition-opacity hover:opacity-80 animate-fadeInUp-delayed" href="/contact">Contact</Link>
        </div>
      </div>
      {open && (
        <div className="sm:hidden border-t animate-fadeInUp">
          <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-3 text-sm">
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/works" onClick={() => setOpen(false)}>Works</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
