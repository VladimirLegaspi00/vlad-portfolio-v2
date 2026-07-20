import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiExternalLink,
  FiFolder,
  FiGitBranch,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiPlay,
} from "react-icons/fi";

type Project = {
  number: string;
  title: string;
  description: string;
  videoId: string;
  youtubeUrl: string;
  tags: string[];
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

type ToolGroup = {
  label: string;
  tools: string[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "GoHighLevel CRM Workflow",
    description:
      "A portfolio walkthrough of a CRM-focused automation build created in GoHighLevel, centered on organizing leads, pipeline actions, and follow-up steps.",
    videoId: "UhqExlUGIgU",
    youtubeUrl: "https://youtu.be/UhqExlUGIgU",
    tags: ["GoHighLevel", "CRM Workflow", "Automation"],
  },
  {
    number: "02",
    title: "EcomOpsAI",
    description:
      "An AI-assisted ecommerce operations demo that connects request handling, workflow logic, structured information, and automated actions.",
    videoId: "Vwvy7PJZmXw",
    youtubeUrl: "https://youtu.be/Vwvy7PJZmXw",
    tags: ["Ecommerce Ops", "AI Processing", "Workflow Logic"],
  },
  {
    number: "03",
    title: "SiteOpsAI",
    description:
      "An n8n system for construction and site operations using Telegram commands, Airtable records, progress updates, risk detection, alerts, logging, and daily monitoring.",
    videoId: "uDH3mEe-buA",
    youtubeUrl: "https://youtu.be/uDH3mEe-buA",
    tags: ["n8n", "Airtable", "Telegram", "JavaScript"],
  },
];

const capabilities: Capability[] = [
  {
    title: "Workflow Automation",
    description:
      "Trigger-action flows, branching, validation, error handling, logging, and scheduled monitoring.",
    icon: FiGitBranch,
  },
  {
    title: "AI-Assisted Processing",
    description:
      "Classification, summarization, data extraction, lead scoring, and decision routing.",
    icon: FiCpu,
  },
  {
    title: "CRM & Lead Workflows",
    description:
      "Lead capture, qualification, pipeline updates, routing, reminders, and follow-up logic.",
    icon: FiBarChart2,
  },
  {
    title: "Chatbot Automation",
    description:
      "Telegram command flows, request handling, smart replies, and operational alerts.",
    icon: FiMessageCircle,
  },
  {
    title: "Data & Integrations",
    description:
      "Connected records across Airtable, Google Sheets, email, APIs, and webhooks.",
    icon: FiDatabase,
  },
  {
    title: "Modern Web Solutions",
    description:
      "Responsive portfolio and landing-page interfaces built with modern web technologies.",
    icon: FiCode,
  },
];

const toolGroups: ToolGroup[] = [
  {
    label: "Automation Platforms",
    tools: ["n8n", "Make", "Zapier", "GoHighLevel"],
  },
  {
    label: "Integrations & Data",
    tools: [
      "Airtable",
      "Telegram",
      "Google Sheets",
      "Email",
      "Discord",
      "APIs & Webhooks",
    ],
  },
  {
    label: "Web Build",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function PortfolioSections() {
  return (
    <>
      <section id="projects" className="relative bg-white py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0f9f93]">
                Selected automation builds
              </p>

              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.035em] text-[#0b1220] sm:text-5xl">
                Three systems. Three complete demo walkthroughs.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-600">
              These are portfolio and practice projects built to demonstrate my
              workflow planning, automation logic, integrations, and ability to
              explain how a system works from input to output.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] shadow-lg shadow-slate-200/40 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden bg-[#0b1220]">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
                    title={`${project.title} video walkthrough`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-[#0f9f93]">
                      Project {project.number}
                    </span>

                    <FiPlay aria-hidden="true" className="h-4 w-4 text-[#14b8a6]" />
                  </div>

                  <h3 className="mt-4 text-2xl font-black tracking-tight text-[#0b1220]">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0f766e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-[#0b1220] transition hover:border-teal-300 hover:text-[#0f766e]"
                  >
                    Watch on YouTube
                    <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative bg-[#0b1220] py-20 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                Skills & capabilities
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
                Practical skills for connected automation systems.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-300 lg:justify-self-end">
              My focus is building clear, testable workflows that connect
              business tools, organize information, and move work to the right
              next step.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const CapabilityIcon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-300/35 hover:bg-white/[0.075]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-300 text-[#07131f]">
                    <CapabilityIcon aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {capability.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {toolGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-white/10 bg-[#111c2d] p-5"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-teal-300">
                  {group.label}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-bold text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-teal-200/60 to-sky-100 blur-2xl"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-slate-300/50">
              <Image
                src="/vladimir-legaspi.png"
                alt="Vladimir Legaspi wearing professional attire"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top"
              />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-[#0b1220]/90 p-4 text-white backdrop-blur-md">
                <p className="font-extrabold">Vladimir Legaspi</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-teal-300">
                  AI Automation Builder
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0f9f93]">
              About me
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.035em] text-[#0b1220] sm:text-5xl">
              I turn workflow ideas into systems people can understand and use.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>
                I&apos;m Vladimir Legaspi, an AI Automation Builder focused on
                turning repetitive work into structured, understandable
                systems. My hands-on portfolio covers CRM workflows, ecommerce
                operations, construction and site operations, Telegram bots,
                data integrations, and modern web interfaces.
              </p>

              <p>
                My process starts by mapping the real workflow: its inputs,
                decisions, records, alerts, and outputs. I then build and test
                each route and document the result through clear demo
                walkthroughs, so employers and collaborators can see how the
                system works—not only how it looks.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                "Hands-on portfolio builds",
                "Business-focused workflows",
                "Clear system walkthroughs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700"
                >
                  <FiCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-[#14b8a6]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/john-vladimir-legaspi-a23309234/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1220] px-6 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#14b8a6] hover:text-[#07131f]"
              >
                <FiLinkedin aria-hidden="true" className="h-4 w-4" />
                View LinkedIn
              </a>

              <a
                href="https://drive.google.com/drive/folders/1KHsGNc_1glNt7Rq3f2SC58Skkxnk-xig?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-extrabold text-[#0b1220] transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-[#0f766e]"
              >
                <FiFolder aria-hidden="true" className="h-4 w-4" />
                View Project Files
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 pb-8 pt-10 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b1220] px-6 py-12 text-white shadow-2xl shadow-slate-300/40 sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-teal-200">
                <span className="h-2 w-2 rounded-full bg-teal-300" />
                Available for opportunities
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
                Let&apos;s build something useful.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                I&apos;m open to opportunities, project conversations, and
                collaborations involving AI automation, CRM workflows, and
                modern web solutions.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:engrvladimirlegaspi@gmail.com"
                className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-0.5 hover:border-teal-300/35 hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-300 text-[#07131f]">
                    <FiMail aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-500 transition group-hover:text-teal-300"
                  />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                  Email
                </p>
                <p className="mt-1 break-all text-sm font-extrabold text-white">
                  engrvladimirlegaspi@gmail.com
                </p>
              </a>

              <a
                href="tel:+639322457160"
                className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-0.5 hover:border-teal-300/35 hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-300 text-[#07131f]">
                    <FiPhone aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-500 transition group-hover:text-teal-300"
                  />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                  Phone
                </p>
                <p className="mt-1 text-sm font-extrabold text-white">
                  +63 932 245 7160
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/john-vladimir-legaspi-a23309234/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-0.5 hover:border-teal-300/35 hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-300 text-[#07131f]">
                    <FiLinkedin aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <FiExternalLink
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-500 transition group-hover:text-teal-300"
                  />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                  Professional profile
                </p>
                <p className="mt-1 text-sm font-extrabold text-white">
                  LinkedIn
                </p>
              </a>

              <a
                href="https://drive.google.com/drive/folders/1KHsGNc_1glNt7Rq3f2SC58Skkxnk-xig?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-0.5 hover:border-teal-300/35 hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-300 text-[#07131f]">
                    <FiFolder aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <FiExternalLink
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-500 transition group-hover:text-teal-300"
                  />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                  Supporting files
                </p>
                <p className="mt-1 text-sm font-extrabold text-white">
                  Google Drive
                </p>
              </a>
            </div>
          </div>
        </div>

        <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-1 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vladimir Legaspi. All rights reserved.</p>
          <p>AI Automation Builder · Built with Next.js & TypeScript</p>
        </footer>
      </section>
    </>
  );
}
