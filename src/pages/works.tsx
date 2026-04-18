import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import WorkCarousel from "../components/WorkCarousel";
import ProjectsCarousel from "../components/ProjectsCarousel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Works() {
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
        <title>Projects — Hovsep Babayan</title>
        <meta name="description" content="Selected works and projects by Hovsep Babayan." />
      </Head>
      <main className="px-6 sm:px-8 md:px-12 py-10 max-w-5xl mx-auto">
        <header className="animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-3 text-foreground/80">Some of my completed projects.</p>
        </header>

        <ProjectsCarousel />

        <div className="mt-12 space-y-12">
          <WorkCarousel images={aygiImages} title="Aygi.Ai" />
          <WorkCarousel images={jermTravelImages} title="JermTravel.com" />
        </div>
      </main>
    </div>
  );
}
