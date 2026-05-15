import Image from "next/image";
import Link from "next/link";
import { MetricNumber } from "@/components/MetricNumber";

type Project = {
  title: string;
  context: string;
  story: string;
  metric?: { value: string; label: string };
};

const projects: Project[] = [
  {
    title: "AI Screening for Hiring Assistant",
    context: "LinkedIn · 2024 – now",
    story:
      "Leading UI for AI-powered candidate screening inside LinkedIn's Hiring Assistant — turning recruiter intent into automated evaluation without losing the human in the loop.",
  },
  {
    title: "Project Copy",
    context: "LinkedIn Recruiter · 2024",
    story:
      "Built the frontend that lets recruiters duplicate hiring projects in a click. A small affordance with an outsized commercial impact.",
    metric: { value: "+20%", label: "new projects created" },
  },
  {
    title: "Quick Promote — advanced targeting",
    context: "LinkedIn Jobs · 2022",
    story:
      "Designed and shipped the targeting controls that let posters reach the right candidates. Adoption was immediate.",
    metric: { value: "+119%", label: "Quick Promote usage in Q1" },
  },
  {
    title: "Project Information Architecture",
    context: "LinkedIn Recruiter · 2022 – 23",
    story:
      "Led the redesign of Recruiter's project navigation — a modern, client-friendly IA that became the platform's everyday surface.",
  },
  {
    title: "Eureka — clinical AI explorer",
    context: "TeraRecon · 2019 – 21",
    story:
      "Designed and built an interactive visualization tool for healthcare AI outputs. Wrote the contour-pushing algorithm and the control-point interpolation that became the demo every sales call leaned on.",
  },
  {
    title: "Cloud simulation platform",
    context: "AMC Bridge · 2017 – 18",
    story:
      "Took fluid- and air-simulation software from desktop-only to the browser, including VNC delivery and remote execution. Mentored a junior engineer through the WebVR add-in for Autodesk Inventor.",
    metric: { value: "+100%", label: "company revenue" },
  },
];

type SkillGroup = { label: string; items: string[] };

const skillGroups: SkillGroup[] = [
  {
    label: "AI & LLMs",
    items: [
      "Prompt design",
      "Prompt engineering",
      "LLM applications",
      "Generative AI",
    ],
  },
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Ember.js",
      "Angular",
      "Redux",
      "RxJS",
      "HTML / CSS",
      "UI design",
    ],
  },
  {
    label: "Backend & data",
    items: [
      "Node.js",
      "Java",
      "C# / ASP.NET Core",
      "Groovy / Grails",
      "GraphQL",
      "REST",
      "SQL",
      "Microservices",
    ],
  },
  {
    label: "Tooling",
    items: ["Git", "Docker", "Jenkins", "IntelliJ", "Agile", "Mentoring"],
  },
];

const photos = [
  {
    src: "/photos/colorado-mtb.jpg",
    alt: "Mountain biker carving a corner through an autumn forest trail",
    caption: "Colorado · summer",
    width: 1600,
    height: 1066,
  },
  {
    src: "/photos/colorado-ski.jpg",
    alt: "Skier on a snow-covered Colorado mountain",
    caption: "Colorado · winter",
    width: 1600,
    height: 1068,
  },
  {
    src: "/photos/la-sailing.jpg",
    alt: "Sailboat on the water near Los Angeles",
    caption: "Los Angeles · when the wind cooperates",
    width: 1600,
    height: 1143,
  },
];

export default function Home() {
  return (
    <main className="bg-bg text-ink">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-12">
        <Hero />
        <About />
        <SelectedWork />
        <Testimonials />
        <Skills />
        <Background />
        <Outside />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <header className="pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12 items-start">
        <div className="md:col-span-8 order-2 md:order-1 mt-8 md:mt-0">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-6">
            Alex Vovchuk · Staff Software Engineer
          </p>
          <h1 className="font-serif text-[44px] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-medium">
            I&rsquo;m building the UI for AI inside{" "}
            <span className="text-accent">LinkedIn Recruiter</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-muted leading-relaxed">
            Ten years of shipping web products — most recently the surfaces where
            recruiters meet AI. I care about software that respects the human on
            the other side of the screen.
          </p>
          <p className="mt-8 font-mono text-xs sm:text-sm text-muted">
            <span className="text-accent">●</span>{" "}
            Currently shipping Screening for Hiring Assistant · based in Denver ·
            between ski and bike season.
          </p>
        </div>
        <div className="md:col-span-4 order-1 md:order-2">
          <div className="relative aspect-[5/6] overflow-hidden rounded-sm bg-surface ring-1 ring-rule">
            <Image
              src="/portrait.jpg"
              alt="Portrait of Alex Vovchuk"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="border-t border-rule py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <SectionLabel>About</SectionLabel>
      <div className="md:col-span-9 space-y-6 text-lg leading-relaxed text-ink/90 max-w-2xl">
        <p>
          I&rsquo;m a Staff Software Engineer at LinkedIn, where I lead the
          frontend for AI features inside Recruiter — most recently the
          Screening surface for LinkedIn&rsquo;s Hiring Assistant. Before that I
          worked on Project Copy, Project Information Architecture, and Quick
          Promote, where small UI moves drove outsized product outcomes.
        </p>
        <p>
          The path here wasn&rsquo;t a straight line. I started in
          pharmaceutical sales in Ukraine, picked up a CS master&rsquo;s while
          working as a full-stack developer at AMC Bridge, and then spent two
          years in North Carolina building healthcare visualization software at
          TeraRecon. I joined LinkedIn in 2021. The throughline has always been
          the same: making complex systems feel obvious to the person using
          them.
        </p>
        <p className="text-muted">
          Off the keyboard, I&rsquo;m usually on a mountain bike, a pair of
          skis, or a sailboat.
        </p>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="border-t border-rule py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10">
        <SectionLabel>Selected work</SectionLabel>
        <p className="md:col-span-9 text-base text-muted max-w-xl">
          Six things I&rsquo;ve worked on that I&rsquo;m still proud of. Most of
          them shipped to millions of recruiters or clinicians.
        </p>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {projects.map((p, i) => (
          <li key={p.title} className="group">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-xs text-muted tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {p.context}
              </p>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl leading-tight tracking-tight mb-3">
              {p.title}
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-ink/85 max-w-prose">
              {p.story}
            </p>
            {p.metric && (
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-mono text-3xl sm:text-4xl text-accent tracking-tight">
                  <MetricNumber value={p.metric.value} />
                </span>
                <span className="text-sm text-muted">{p.metric.label}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-rule py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <SectionLabel>In their words</SectionLabel>
      <div className="md:col-span-9 space-y-12 max-w-2xl">
        <Quote
          body="Persistent and goal-oriented is the phrase that comes to mind when I think about Alex. I was impressed with his ability to dig his way through inconsistent and sometimes weird problems, and provide an educated solution."
          name="Serhii Vinichuk"
          title="Senior Frontend Developer · former engineering lead at AMC Bridge"
        />
        <Quote
          body="Alex is a very talented and dedicated developer — a frontend expert who works hard and delivers ahead of time. It is a complete joy working with him."
          name="Shreyas Kantharajan"
          title="Software Architect · former senior at TeraRecon"
        />
      </div>
    </section>
  );
}

function Quote({
  body,
  name,
  title,
}: {
  body: string;
  name: string;
  title: string;
}) {
  return (
    <figure>
      <blockquote className="font-serif text-xl sm:text-2xl leading-snug text-ink/90 italic">
        &ldquo;{body}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        <span className="text-ink">{name}</span> · {title}
      </figcaption>
    </figure>
  );
}

function Skills() {
  return (
    <section className="border-t border-rule py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <SectionLabel>What I work with</SectionLabel>
      <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-2xl">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
              {g.label}
            </h3>
            <ul className="space-y-1.5 text-base text-ink/85">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Background() {
  return (
    <section className="border-t border-rule py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <SectionLabel>Background</SectionLabel>
      <div className="md:col-span-9 max-w-2xl space-y-10">
        <Timeline
          heading="Experience"
          rows={[
            {
              when: "2023 — now",
              what: "Staff Software Engineer",
              where: "LinkedIn · Denver · Remote",
            },
            {
              when: "2021 — 2023",
              what: "Senior Software Engineer",
              where: "LinkedIn · San Francisco Bay Area",
            },
            {
              when: "2019 — 2021",
              what: "Software Engineer",
              where: "TeraRecon · Raleigh-Durham",
            },
            {
              when: "2015 — 2019",
              what: "Full-Stack Software Engineer",
              where: "AMC Bridge · Khmelnytsky, Ukraine",
            },
            {
              when: "2012 — 2014",
              what: "Medical Sales Representative",
              where: "Servier · Khmelnytsky, Ukraine",
            },
          ]}
        />
        <Timeline
          heading="Education"
          rows={[
            {
              when: "2016 — 2018",
              what: "MS, Computer Science",
              where: "Khmelnytskyi National University",
            },
            {
              when: "2001 — 2007",
              what: "MS, Pharmacy",
              where: "I.Ya. Horbachevsky Ternopil National Medical University",
            },
          ]}
        />
        <Timeline
          heading="Certifications"
          rows={[
            {
              when: "2025",
              what: "Generative AI with Large Language Models",
              where: "DeepLearning.AI",
            },
            {
              when: "2025",
              what: "Generative AI vs. Traditional AI",
              where: "LinkedIn",
            },
          ]}
        />
      </div>
    </section>
  );
}

function Timeline({
  heading,
  rows,
}: {
  heading: string;
  rows: { when: string; what: string; where: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
        {heading}
      </h3>
      <ul className="divide-y divide-rule">
        {rows.map((r) => (
          <li
            key={`${r.when}-${r.what}`}
            className="py-3 grid grid-cols-12 gap-3 text-sm sm:text-base"
          >
            <span className="col-span-3 font-mono text-xs sm:text-sm text-muted tabular-nums pt-1">
              {r.when}
            </span>
            <span className="col-span-9">
              <span className="block text-ink">{r.what}</span>
              <span className="block text-muted text-sm">{r.where}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Outside() {
  return (
    <section className="border-t border-rule py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-8">
        <SectionLabel>Outside</SectionLabel>
        <p className="md:col-span-9 text-base text-muted max-w-xl">
          Colorado, mostly. Sometimes Los Angeles when the wind cooperates.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {photos.map((photo) => (
          <figure key={photo.src} className="space-y-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface ring-1 ring-rule">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <figcaption className="font-mono text-xs text-muted">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-rule py-16 sm:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
    >
      <SectionLabel>Reach me</SectionLabel>
      <div className="md:col-span-9 max-w-2xl">
        <p className="font-serif text-2xl sm:text-3xl leading-snug">
          Best place to find me is LinkedIn. Code lives on GitHub.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-base">
          <li>
            <a
              href="https://www.linkedin.com/in/alexvovchuk/"
              className="border-b border-accent/40 hover:border-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Zordaxy"
              className="border-b border-accent/40 hover:border-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-rule py-10 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs font-mono text-muted">
        <span>
          Built in Denver, with heart in Ukraine{" "}
          <span aria-hidden>🇺🇦</span>.
        </span>
        <span>
          <Link
            href="/now"
            className="border-b border-accent/40 hover:border-accent transition-colors"
          >
            /now
          </Link>
          {" · "}Last updated May 2026.
        </span>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:col-span-3">
      <p className="font-mono text-xs uppercase tracking-widest text-muted sticky top-6">
        {children}
      </p>
    </div>
  );
}
