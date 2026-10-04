"use client";

import Link from "next/link";
import { useState } from "react";
import { home } from "@/data/home";

const memberAreaUrl = "https://physioresearch-hub.vercel.app/login";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const regularLinks = home.nav.filter(
    (item) => item.label.toLowerCase() !== "kontakt"
  );

  const contactLink = home.nav.find(
    (item) => item.label.toLowerCase() === "kontakt"
  );

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="site-shell flex h-[84px] items-center justify-between md:h-[104px] lg:h-[136px]">
        <Link
          href="/"
          className="group flex max-w-[calc(100%-96px)] min-w-0 flex-1 items-center gap-2 sm:max-w-none md:gap-3"
          aria-label="Physio Research Review — strona główna"
        >
          <img
            src="/brand/logo1.svg"
            alt="PhysioResearchReview"
            className="h-[50px] w-auto shrink-0 md:h-[78px] lg:h-[120px]"
          />

          <div className="hidden min-w-0 min-[480px]:block">
            <span className="block truncate text-[11px] font-semibold tracking-[0.06em] text-black transition-colors sm:text-[12px] md:text-[14px] lg:text-[15px] lg:tracking-[0.08em]">
              Physio Research Review
            </span>
          </div>
        </Link>

        <nav className="hidden shrink-0 items-center gap-4 xl:flex">
          {regularLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-2 text-[12px] font-medium tracking-[0.015em] text-neutral-800 transition-colors hover:text-[#006B54]"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#006B54] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {contactLink ? (
            <a
              href={contactLink.href}
              className="border border-black/15 px-4 py-2 text-[12px] font-medium tracking-[0.015em] text-neutral-800 transition-colors hover:border-[#006B54] hover:text-[#006B54]"
            >
              {contactLink.label}
            </a>
          ) : null}
          <a
            href={memberAreaUrl}
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md bg-[#ff642b] px-4 py-2 text-[12px] font-semibold text-[#242528] transition-colors hover:bg-[#ff7b4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#242528]"
          >
            Strefa członków
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="ml-2 min-w-[88px] shrink-0 border border-black/15 px-2.5 py-2 text-center text-[10px] uppercase tracking-[0.16em] text-neutral-800 transition-colors hover:border-[#006B54] hover:text-[#006B54] sm:ml-3 sm:px-4 sm:text-[12px] sm:tracking-[0.22em] xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? "Zamknij" : "Menu"}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-black/10 bg-white xl:hidden"
        >
          <nav className="site-shell py-5">
            <div className="grid gap-0 border-y border-black/10">
              {home.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-black/10 py-4 text-[14px] font-medium tracking-[0.02em] text-neutral-900 transition-colors last:border-b-0 hover:text-[#006B54]"
                >
                  <span>{item.label}</span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                    przejdź
                  </span>
                </a>
              ))}
            </div>
            <a
              href={memberAreaUrl}
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex min-h-12 items-center justify-center rounded-md bg-[#ff642b] px-4 py-3 text-sm font-semibold text-[#242528] transition-colors hover:bg-[#ff7b4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#242528]"
            >
              Strefa członków
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
