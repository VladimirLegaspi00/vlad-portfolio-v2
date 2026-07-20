"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiBell,
  FiCpu,
  FiGitBranch,
  FiInbox,
  FiMail,
  FiMessageCircle,
  FiRefreshCw,
  FiSearch,
  FiSend,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { SiAirtable, SiN8N, SiTelegram } from "react-icons/si";

type SystemId = "telegram" | "leads" | "support";

type ShowcaseStep = {
  title: string;
  detail: string;
  icon: IconType;
};

type ShowcaseTool = {
  name: string;
  detail: string;
  color: string;
  icon: IconType;
};

type ShowcaseSystem = {
  id: SystemId;
  tab: string;
  title: string;
  description: string;
  tabIcon: IconType;
  steps: ShowcaseStep[];
  tools: ShowcaseTool[];
};

const systems: ShowcaseSystem[] = [
  {
    id: "telegram",
    tab: "Telegram Bot",
    title: "Telegram AI Assistant",
    description: "Turns conversations into useful automated actions.",
    tabIcon: FiSend,
    steps: [
      {
        title: "Telegram Message",
        detail: "Questions / Commands / Requests",
        icon: SiTelegram,
      },
      {
        title: "AI Understanding",
        detail: "Detect intent / Extract information",
        icon: FiCpu,
      },
      {
        title: "Business Action",
        detail: "Search data / Update records / Trigger workflow",
        icon: FiSettings,
      },
      {
        title: "Smart Response",
        detail: "Reply instantly / Log conversation",
        icon: FiMessageCircle,
      },
    ],
    tools: [
      {
        name: "Telegram",
        detail: "Messaging",
        color: "#38BDF8",
        icon: SiTelegram,
      },
      {
        name: "n8n",
        detail: "Workflow",
        color: "#EA4B71",
        icon: SiN8N,
      },
      {
        name: "AI Model",
        detail: "Intelligence",
        color: "#2DD4BF",
        icon: FiCpu,
      },
      {
        name: "Airtable",
        detail: "Data",
        color: "#FBBF24",
        icon: SiAirtable,
      },
    ],
  },
  {
    id: "leads",
    tab: "Lead & CRM",
    title: "AI Lead Qualification",
    description: "Captures, qualifies, routes, and follows up with leads.",
    tabIcon: FiUsers,
    steps: [
      {
        title: "Lead Captured",
        detail: "Forms / Email / Webhooks",
        icon: FiInbox,
      },
      {
        title: "AI Qualification",
        detail: "Score / Classify / Extract details",
        icon: FiCpu,
      },
      {
        title: "Smart Routing",
        detail: "Assign / Notify / Update pipeline",
        icon: FiGitBranch,
      },
      {
        title: "CRM Follow-up",
        detail: "Reminders / Sequences / Status updates",
        icon: FiRefreshCw,
      },
    ],
    tools: [
      {
        name: "Webhooks",
        detail: "Lead source",
        color: "#38BDF8",
        icon: FiGitBranch,
      },
      {
        name: "AI Model",
        detail: "Scoring",
        color: "#2DD4BF",
        icon: FiCpu,
      },
      {
        name: "HighLevel",
        detail: "CRM",
        color: "#38BDF8",
        icon: FiBarChart2,
      },
      {
        name: "Email",
        detail: "Follow-up",
        color: "#F59E0B",
        icon: FiMail,
      },
    ],
  },
  {
    id: "support",
    tab: "Support Ops",
    title: "Support Operations Automation",
    description: "Organizes requests and alerts the right people faster.",
    tabIcon: FiMessageCircle,
    steps: [
      {
        title: "New Request",
        detail: "Telegram / Email / Forms",
        icon: FiInbox,
      },
      {
        title: "Ticket Analysis",
        detail: "Category / Priority / Summary",
        icon: FiSearch,
      },
      {
        title: "Priority Routing",
        detail: "Assign / Escalate / Save record",
        icon: FiGitBranch,
      },
      {
        title: "Team Alert",
        detail: "Notify / Reply / Track status",
        icon: FiBell,
      },
    ],
    tools: [
      {
        name: "Telegram",
        detail: "Requests",
        color: "#38BDF8",
        icon: SiTelegram,
      },
      {
        name: "AI Model",
        detail: "Analysis",
        color: "#2DD4BF",
        icon: FiCpu,
      },
      {
        name: "Airtable",
        detail: "Ticket log",
        color: "#FBBF24",
        icon: SiAirtable,
      },
      {
        name: "Team Alerts",
        detail: "Notification",
        color: "#A78BFA",
        icon: FiBell,
      },
    ],
  },
];

export default function InteractiveSystemShowcase() {
  const [activeId, setActiveId] = useState<SystemId>("telegram");
  const activeSystem =
    systems.find((system) => system.id === activeId) ?? systems[0];

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();

    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % systems.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + systems.length) % systems.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = systems.length - 1;
    }

    setActiveId(systems[nextIndex].id);

    const tabList = event.currentTarget.parentElement;
    const tabs = tabList?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    tabs?.[nextIndex]?.focus();
  };

  return (
    <div
      id="workflow"
      className="relative mx-auto w-full max-w-3xl lg:mx-0 lg:ml-auto"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-teal-300/25 via-transparent to-sky-300/20 blur-2xl"
      />

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220] p-5 shadow-2xl shadow-slate-900/25 sm:p-7">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
              Explore my automation work
            </p>

            <h2 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              Interactive System Showcase
            </h2>
          </div>

          <p className="text-xs font-semibold text-slate-400">
            Select a system to explore
          </p>
        </div>

        <div
          className="mt-5 grid grid-cols-1 gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-2 sm:grid-cols-3"
          role="tablist"
          aria-label="Automation systems"
        >
          {systems.map((system, index) => {
            const TabIcon = system.tabIcon;
            const isActive = activeSystem.id === system.id;

            return (
              <button
                key={system.id}
                id={`system-tab-${system.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`system-panel-${system.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(system.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl px-3 py-3 text-xs font-black uppercase tracking-[0.06em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220] sm:text-[11px] ${
                  isActive
                    ? "bg-[#14b8a6] text-[#07131f] shadow-lg shadow-teal-500/20"
                    : "border border-white/5 bg-[#111c2d] text-slate-300 hover:-translate-y-0.5 hover:border-teal-300/30 hover:text-white"
                }`}
              >
                <TabIcon aria-hidden="true" className="h-5 w-5 shrink-0" />
                {system.tab}
              </button>
            );
          })}
        </div>

        <div
          key={activeSystem.id}
          id={`system-panel-${activeSystem.id}`}
          role="tabpanel"
          aria-labelledby={`system-tab-${activeSystem.id}`}
          className="showcase-reveal mt-5"
        >
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-extrabold text-white">{activeSystem.title}</h3>
            <p className="text-xs text-slate-400">{activeSystem.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {activeSystem.steps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <div key={step.title} className="relative min-w-0">
                  <div className="group flex h-full min-h-40 flex-col rounded-2xl border border-white/15 bg-[#111c2d] p-4 transition duration-300 hover:-translate-y-1 hover:border-teal-300/45 hover:bg-[#172438]">
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-teal-300/30 bg-teal-300/10 text-teal-300 transition group-hover:bg-teal-300 group-hover:text-[#07131f]">
                        <StepIcon aria-hidden="true" className="h-6 w-6" />
                      </span>

                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#14b8a6] text-[10px] font-black text-[#07131f]">
                        {index + 1}
                      </span>
                    </div>

                    <p className="mt-4 text-sm font-extrabold leading-5 text-white">
                      {step.title}
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-slate-400">
                      {step.detail}
                    </p>
                  </div>

                  {index < activeSystem.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="flow-connector absolute -right-3 top-12 z-10 hidden h-px w-3 xl:block"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              <p className="shrink-0 text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                Tools powering this system
              </p>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {activeSystem.tools.map((tool) => {
                const ToolIcon = tool.icon;

                return (
                  <div
                    key={tool.name}
                    className="group flex min-h-16 items-center gap-2.5 rounded-xl border border-white/10 bg-[#111c2d] p-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-[#172438]"
                  >
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border bg-white/[0.04]"
                      style={{ borderColor: `${tool.color}55` }}
                    >
                      <ToolIcon
                        aria-hidden="true"
                        className="h-[18px] w-[18px]"
                        style={{ color: tool.color }}
                      />
                    </span>

                    <span className="min-w-0">
                      <span className="block truncate text-[11px] font-extrabold text-white">
                        {tool.name}
                      </span>
                      <span className="mt-0.5 block truncate text-[9px] text-slate-500">
                        {tool.detail}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
