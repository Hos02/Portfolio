import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen`}> 
      <Head>
        <title>Hovsep Babayan — Portfolio</title>
        <meta name="description" content="Web Application Developer in Yerevan, Armenia. React, Next.js, TypeScript." />
      </Head>
      <main className="relative overflow-hidden">
        {/* floating confetti accents */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <div className="absolute left-6 top-10 h-2 w-8 rounded-full bg-foreground/30 animate-float"></div>
          <div className="absolute left-16 bottom-10 h-2 w-10 rounded-full bg-foreground/20 animate-float" style={{animationDelay:'0.6s'}}></div>
          <div className="absolute right-10 top-20 h-2 w-6 rounded-full bg-foreground/25 animate-float" style={{animationDelay:'1s'}}></div>
        </div>

        <section className="px-6 sm:px-8 md:px-12 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left animate-fadeInUp">
            <p className="uppercase tracking-[.35em] text-sm text-foreground/60">Creative Developer</p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight">
              Hovsep Babayan
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-foreground/80">
              Sensible to frontend. Building delightful web apps with React, Next.js and TypeScript.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Link className="rounded border px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors" href="/about">About me</Link>
              <Link className="rounded border px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors" href="/works">Works</Link>
              <Link className="rounded border px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors" href="/contact">Contact</Link>
            </div>
          </div>
          <div className="order-1 md:order-2 relative mx-auto animate-fadeInUp">
            <div className="relative h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] mx-auto">
              {/* Stylized blob mask with user's photo. Replace src with your actual photo path in /public */}
              <div className="absolute inset-0 rounded-[46%_54%_60%_40%/40%_40%_60%_60%] bg-foreground/10 blur-2xl" />
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[46%_54%_60%_40%/40%_40%_60%_60%] bg-foreground/10 blur-xl" />
              <Image
                src="/hovsep.jpg"
                alt="Portrait"
                fill
                sizes="(max-width: 768px) 340px, 420px"
                className="relative z-10 object-cover rounded-[46%_54%_60%_40%/40%_40%_60%_60%] shadow-xl border border-foreground/15"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
