import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import WorkCarousel from "../components/WorkCarousel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Works() {
  // Sample images for each work - replace with actual images
  const aygiImages = [
    {
      src: "/5411582368768188404.jpg",
      alt: "AI-powered plant disease detection interface",
      title: "Plant Disease Detection Interface",
    },
    {
      src: "/5222145650697823784.jpg",
      alt: "Farmers using mobile app in field",
      title: "Mobile App in Action",
    },
    {
      src: "/5334922429509786321.jpg",
      alt: "AI analysis results dashboard",
      title: "Analysis Dashboard",
    },
    {
      src: "/5463355051310440798.jpg",
      alt: "AI analysis results dashboard",
      title: "Analysis Dashboard",
    },
  ];

  const jermTravelImages = [
    {
      src: "/jerm1.png",
      alt: "Armenian landscape and mountains",
      title: "Armenian Landscapes",
    },
    {
      src: "/jerm2.png",
      alt: "Cultural heritage sites in Armenia",
      title: "Cultural Heritage",
    },
  ];

  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans`}>
      <Head>
        <title>Works — Hovsep Babayan</title>
        <meta name="description" content="Selected works and projects by Hovsep Babayan." />
      </Head>
      <main className="px-6 sm:px-8 md:px-12 py-10 max-w-5xl mx-auto">
        <header className="animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Works</h1>
          <p className="mt-3 text-foreground/80">Some of my completed projects.</p>
        </header>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <article className="card animate-fadeInUp">
            <h2 className="font-semibold">Aygi.Ai</h2>
            <p className="mt-2 text-sm text-foreground/80">
              Aygi.ai is an Armenian AgTech startup that uses artificial intelligence to help
              farmers diagnose and treat plant diseases. By simply uploading a photo, farmers
              receive AI-powered insights and expert recommendations, combining technology with
              human expertise to ensure healthier crops and more sustainable agriculture.
            </p>
            <div className="mt-3 text-sm flex gap-4">
              <a
                className="link-underline text-green-400"
                href="https://aygi-ai-vercel.vercel.app/"
              >
                Live
              </a>
            </div>
          </article>

          <article className="card animate-fadeInUp">
            <h2 className="font-semibold">JermTravel.com</h2>
            <p className="mt-2 text-sm text-foreground/80">
              JermTravel.com is a tour operator based in Armenia, offering private tours, transfers,
              and customizable travel packages across Armenia and Georgia. Their mission is to make
              every guest feel at home while showcasing the region&apos;s scenic beauty, cultural
              richness, and warm hospitality.
            </p>

            <div className="mt-3 text-sm flex gap-4">
              <a className="link-underline text-amber-400" href="https://jermtravel.com/">
                Live
              </a>
            </div>
          </article>
        </div>

        {/* Carousels for each work */}
        <div className="mt-12 space-y-12">
          <WorkCarousel images={aygiImages} title="Aygi.Ai" />
          <WorkCarousel images={jermTravelImages} title="JermTravel.com" />
        </div>
      </main>
    </div>
  );
}
