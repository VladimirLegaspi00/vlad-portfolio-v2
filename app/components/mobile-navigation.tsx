"use client";

import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navigation = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "Projects", href: "#projects" },
  { number: "03", label: "Skills", href: "#skills" },
  { number: "04", label: "About", href: "#about" },
] as const;

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className={`relative z-[70] grid h-11 w-11 place-items-center rounded-full border text-white shadow-lg transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8fafc] ${
          isOpen
            ? "border-teal-300 bg-[#14b8a6] text-[#07131f]"
            : "border-white/10 bg-[#0b1220] hover:-translate-y-0.5 hover:bg-[#14b8a6] hover:text-[#07131f]"
        }`}
      >
        {isOpen ? (
          <FiX aria-hidden="true" className="h-5 w-5" />
        ) : (
          <FiMenu aria-hidden="true" className="h-5 w-5" />
        )}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="fixed inset-0 top-20 z-[55] cursor-default bg-[#07131f]/35 backdrop-blur-[2px]"
          />

          <div
            id="mobile-navigation"
            className="mobile-menu-reveal fixed left-4 right-4 top-[5.75rem] z-[60] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b1220] p-3 text-white shadow-2xl shadow-slate-950/35"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3 pt-1">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-teal-300">
                  Navigate portfolio
                </p>
                <p className="mt-1 text-sm font-extrabold">Vladimir Legaspi</p>
              </div>

              <span className="rounded-full border border-teal-300/20 bg-teal-300/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-teal-200">
                Menu
              </span>
            </div>

            <nav aria-label="Mobile navigation" className="mt-2 grid gap-1">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-xl px-3 py-3.5 transition hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-300"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[9px] font-black tracking-[0.12em] text-teal-300">
                      {item.number}
                    </span>
                    <span className="text-sm font-extrabold">{item.label}</span>
                  </span>

                  <FiArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-500 transition group-hover:text-teal-300"
                  />
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="group mt-1 flex items-center justify-between rounded-xl bg-[#14b8a6] px-3 py-3.5 text-[#07131f] transition hover:bg-[#2dd4bf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[9px] font-black tracking-[0.12em]">05</span>
                  <span className="text-sm font-black">Contact Me</span>
                </span>

                <FiArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
