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

export default function About() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans`}> 
      <Head>
        <title>About — Hovsep Babayan</title>
      </Head>
      <main className="px-6 sm:px-8 md:px-12 py-10 max-w-5xl mx-auto space-y-12">
        <header className="animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h1>
          <p className="mt-3 text-foreground/80">Web Application Developer • Yerevan, Armenia</p>
          <div className="mt-3 text-sm text-foreground/70">Born 02/11/2001 • Armenian</div>
        </header>

        <section className="animate-fadeInUp-delayed">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            Web Application Developer with hands‑on experience building responsive, accessible, and performant apps using React and Next.js. Strong background in mentoring and leading teams, and co‑founding an AI startup from concept to launch.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-xl font-semibold">Work Experience</h2>
          <div className="mt-6 space-y-8">
            <div className="card animate-fadeInUp">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">AltaHub — Web Application Developer</h3>
                <span className="text-sm text-foreground/70">12/2024 – Present • Yerevan, Armenia</span>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-foreground/80">
                <li>Develop and maintain frontend interfaces with HTML, CSS, JavaScript, TypeScript, React.js, and Next.js.</li>
                <li>Implement responsive design and ensure cross‑browser compatibility.</li>
                <li>Integrate frontend with backend APIs for dynamic and secure data handling.</li>
                <li>Optimize performance, accessibility, and SEO for better user experience.</li>
              </ul>
            </div>

            <div className="card animate-fadeInUp">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">Think Engineering — Software Developer / Instructor</h3>
                <span className="text-sm text-foreground/70">06/2024 – Present • Yerevan, Armenia</span>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-foreground/80">
                <li>Delivered interactive programming lessons and one‑on‑one mentorship.</li>
                <li>Guided students through practical coding projects and assessments.</li>
                <li>Organized group activities and coding challenges to improve teamwork.</li>
              </ul>
            </div>

            <div className="card animate-fadeInUp">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">Aygi.ai — Co‑Founder</h3>
                <span className="text-sm text-foreground/70">02/2024 – 10/2024 • Yerevan, Armenia</span>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-foreground/80">
                <li>Founded and managed the startup from concept to launch.</li>
                <li>Led development, aligning product work with strategic goals.</li>
                <li>Oversaw design and implementation of AI‑driven solutions.</li>
                <li>Conducted market research and executed business strategies.</li>
              </ul>
            </div>

            <div className="card animate-fadeInUp">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">Smartbet Studio — Software Developer</h3>
                <span className="text-sm text-foreground/70">03/2022 – 10/2022 • Yerevan, Armenia</span>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-foreground/80">
                <li>Installed and maintained technical equipment per guidelines.</li>
                <li>Handled studio property maintenance and technical processes.</li>
                <li>Monitored performance of cameras, sound systems, lighting, and equipment.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-xl font-semibold">Education & Training</h2>
          <div className="mt-6 space-y-6 text-foreground/80">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p>
                Bachelor’s Degree — National University of Architecture and Construction of Armenia
                <span className="ml-2 text-foreground/60">(2019 – Present)</span>
              </p>
              <a className="text-sm underline underline-offset-4" href="https://nuaca.am" target="_blank" rel="noreferrer">nuaca.am</a>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p>
                Web Developer Program — Tumo Center for Creative Technologies
                <span className="ml-2 text-foreground/60">(2016 – 2018)</span>
              </p>
              <a className="text-sm underline underline-offset-4" href="https://tumo.org" target="_blank" rel="noreferrer">tumo.org</a>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p>
                Software Engineer Program — Picsart Academy
                <span className="ml-2 text-foreground/60">(2023 – Present)</span>
              </p>
              <a className="text-sm underline underline-offset-4" href="https://picsartacademy.am" target="_blank" rel="noreferrer">picsartacademy.am</a>
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-foreground/80">
            <div>
              <h3 className="font-medium">Programming</h3>
              <p className="mt-2">JavaScript (Node.js, Express.js), React, Next.js, React Native, HTML5, CSS, jQuery</p>
            </div>
            <div>
              <h3 className="font-medium">Concepts</h3>
              <p className="mt-2">OOP, Data Structures, UML, Algorithmic Thinking, OOAD</p>
            </div>
            <div>
              <h3 className="font-medium">Tools</h3>
              <p className="mt-2">Microsoft Word, Linux (command line & OS basics)</p>
            </div>
            <div>
              <h3 className="font-medium">Management & Soft Skills</h3>
              <p className="mt-2">Mentorship, Facilitation, Executive Control, Team Collaboration</p>
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-xl font-semibold">Languages</h2>
          <p className="mt-3 text-foreground/80">Armenian — Native; English — B2; Russian — C1</p>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <a className="rounded border px-3 py-2 hover:bg-foreground hover:text-background transition-colors" href="mailto:hovsepbabayan55@gmail.com">Email</a>
            <a className="rounded border px-3 py-2 hover:bg-foreground hover:text-background transition-colors" href="tel:+37477958827">Call</a>
            <a className="rounded border px-3 py-2 hover:bg-foreground hover:text-background transition-colors" href="https://maps.google.com/?q=Yerevan, Armenia" target="_blank" rel="noreferrer">Location</a>
          </div>
        </section>
      </main>
    </div>
  );
}


