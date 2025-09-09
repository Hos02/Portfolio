import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Works() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans`}> 
      <Head>
        <title>Works — Hovsep Babayan</title>
        <meta name="description" content="Selected works and projects by Hovsep Babayan." />
      </Head>
      <main className="px-6 sm:px-8 md:px-12 py-10 max-w-5xl mx-auto">
        <header className="animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Works</h1>
          <p className="mt-3 text-foreground/80">A selection of projects. Send links and I’ll fill these in.</p>
        </header>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <article className="card animate-fadeInUp">
            <h2 className="font-semibold">Aygi.Ai</h2>
            <p className="mt-2 text-sm text-foreground/80">Aygi.ai is an Armenian AgTech startup that uses artificial intelligence to help farmers diagnose and treat plant diseases. By simply uploading a photo, farmers receive AI-powered insights and expert recommendations, combining technology with human expertise to ensure healthier crops and more sustainable agriculture.</p>
            <div className="mt-3 text-sm flex gap-4">
              <a className="link-underline text-green-400" href="https://aygi-ai-vercel.vercel.app/">Live</a>
            </div>
          </article>

          <article className="card animate-fadeInUp">
            <h2 className="font-semibold">JermTravel.com</h2>
            <p className="mt-2 text-sm text-foreground/80">JermTravel.com is a tour operator based in Armenia, offering private tours, transfers, and customizable travel packages across Armenia and Georgia. Their mission is to make every guest feel at home while showcasing the region’s scenic beauty, cultural richness, and warm hospitality.</p>
            <div className="mt-3 text-sm flex gap-4">
              <a className="link-underline text-amber-400" href="https://jermtravel.com/">Live</a>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}


