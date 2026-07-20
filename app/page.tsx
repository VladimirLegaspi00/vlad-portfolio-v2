import Image from "next/image";
import InteractiveSystemShowcase from "./components/interactive-system-showcase";
import MobileNavigation from "./components/mobile-navigation";
import PortfolioSections from "./components/portfolio-sections";

type NavigationItem = {
  label: string;
  href: `#${string}`;
};

type Metric = {
  value: string;
  label: string;
  detail: string;
};

const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

const metrics: Metric[] = [
  {
    value: "10+",
    label: "Workflow Builds",
    detail: "Portfolio & practice automations",
  },
  {
    value: "3",
    label: "Featured Systems",
    detail: "With demo walkthroughs",
  },
  {
    value: "4",
    label: "Automation Platforms",
    detail: "n8n / Make / Zapier / GHL",
  },
  {
    value: "10+",
    label: "Integrations Used",
    detail: "Apps / APIs / Webhooks",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fafc] text-[#0b1220]">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f8fafc]/85 backdrop-blur-xl">
        <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
  <a
    href="#home"
    className="flex items-center gap-3"
    aria-label="Vladimir Legaspi home"
  >
    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border-2 border-[#0b1220] bg-white shadow-lg shadow-slate-900/15">
      <Image
        src="/vladimir-legaspi.png"
        alt="Portrait of Vladimir Legaspi"
        fill
        sizes="44px"
        className="origin-[50%_38%] scale-[1.3] object-cover"
        priority
      />
    </span>

    <span>
      <span className="hidden whitespace-nowrap text-[13px] font-extrabold tracking-[0.14em] text-[#0b1220] sm:block">
        VLADIMIR LEGASPI
      </span>

      <span className="block whitespace-nowrap text-[13px] font-extrabold tracking-[0.14em] text-[#0b1220] sm:hidden">
        VLADIMIR
      </span>

      <span className="hidden whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#0f9f93] sm:block">
        AI Automation Builder
      </span>
    </span>
  </a>

  <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
    {navigation.map((item) => (
      <a
        key={item.label}
        href={item.href}
        className="text-sm font-semibold text-slate-600 transition hover:text-[#0f9f93]"
      >
        {item.label}
      </a>
    ))}
  </div>

  <div className="flex items-center gap-2">
    <a
      href="#contact"
      aria-label="Go to contact section"
      className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#0b1220] px-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-[#14b8a6] min-[390px]:px-4 sm:px-5"
    >
      <span className="hidden min-[390px]:inline">Let&apos;s Talk</span>
      <span className="min-[390px]:hidden">Talk</span>

      <span
        aria-hidden="true"
        className="transition group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </a>

    <MobileNavigation />
  </div>
</nav>
      </header>

      <main>
        <section id="home" className="relative isolate">
          <div
            aria-hidden="true"
            className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-70"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-teal-200/40 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-sky-100 blur-3xl"
          />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-14 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:pb-16 lg:pt-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#14b8a6] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#14b8a6]" />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0f766e]">
                  Available for opportunities
                </span>
              </div>

              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-[#0f9f93]">
                AI Automation / CRM Workflows / Web Solutions
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.03] tracking-[-0.045em] text-[#0b1220] sm:text-6xl lg:text-7xl">
                I build smart systems that make work

                <span className="relative ml-3 inline-block text-[#0f9f93]">
                  flow.

                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 w-full text-teal-300"
                    viewBox="0 0 220 12"
                    fill="none"
                  >
                    <path
                      d="M3 8.5C48 2.5 105 2.5 217 6"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                I design practical AI automations, CRM workflows, and modern web
                solutions that connect tools, organize information, and reduce
                repetitive work.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#14b8a6] px-7 py-4 text-sm font-extrabold text-[#07131f] shadow-xl shadow-teal-500/20 transition hover:-translate-y-1 hover:bg-[#2dd4bf]"
                >
                  View Featured Systems

                  <span
                    aria-hidden="true"
                    className="transition group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-sm font-extrabold text-[#0b1220] transition hover:-translate-y-1 hover:border-teal-400 hover:text-[#0f766e]"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="text-[#14b8a6]">&#10003;</span>
                  Workflow thinking
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-[#14b8a6]">&#10003;</span>
                  Business-focused builds
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-[#14b8a6]">&#10003;</span>
                  Clear demo walkthroughs
                </span>
              </div>
            </div>

            <InteractiveSystemShowcase />
          </div>

          <div
            id="metrics"
            className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10"
          >
            <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-200/50 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="relative bg-white p-6 sm:p-7"
                >
                  <p className="text-3xl font-black tracking-tight text-[#0f9f93]">
                    {metric.value}
                  </p>

                  <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.08em] text-[#0b1220]">
                    {metric.label}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioSections />
      </main>
    </div>
  );
}
