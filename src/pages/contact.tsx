import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact — Hovsep Babayan</title>
        <meta name="description" content="Get in touch with Hovsep Babayan." />
      </Head>
      <main className="px-6 sm:px-8 md:px-12 py-12 max-w-xl mx-auto">
        <header className="animate-fadeInUp text-center">
          <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
          <p className="mt-2 text-foreground/80 text-sm">Say hello — I usually reply within a day.</p>
        </header>

        <section className="mt-8 grid gap-3">
          <a href="mailto:hovsepbabayan55@gmail.com" className="card flex items-center gap-3 hover:opacity-90 transition-opacity">
            <span aria-hidden className="h-8 w-8 grid place-items-center rounded-full bg-foreground text-background">@</span>
            <div>
              <div className="text-sm font-medium">Email</div>
              <div className="text-xs text-foreground/70">hovsepbabayan55@gmail.com</div>
            </div>
          </a>

          <a href="https://t.me/" target="_blank" rel="noreferrer" className="card flex items-center gap-3 hover:opacity-90 transition-opacity">
            <span aria-hidden className="h-8 w-8 grid place-items-center rounded-full bg-foreground text-background">✈</span>
            <div>
              <div className="text-sm font-medium">Telegram</div>
              <div className="text-xs text-foreground/70">DM me on Telegram</div>
            </div>
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="card flex items-center gap-3 hover:opacity-90 transition-opacity">
            <span aria-hidden className="h-8 w-8 grid place-items-center rounded-full bg-foreground text-background">in</span>
            <div>
              <div className="text-sm font-medium">LinkedIn</div>
              <div className="text-xs text-foreground/70">Let’s connect professionally</div>
            </div>
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer" className="card flex items-center gap-3 hover:opacity-90 transition-opacity">
            <span aria-hidden className="h-8 w-8 grid place-items-center rounded-full bg-foreground text-background">GH</span>
            <div>
              <div className="text-sm font-medium">GitHub</div>
              <div className="text-xs text-foreground/70">Projects and snippets</div>
            </div>
          </a>

          <div className="text-center text-xs text-foreground/60 mt-2">Based in Yerevan, Armenia</div>
        </section>

        <footer className="mt-8 text-center text-xs text-foreground/60">
          <Link className="link-underline" href="/">← Back to home</Link>
        </footer>
      </main>
    </div>
  );
}


