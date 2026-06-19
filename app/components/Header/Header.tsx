"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [soundEnabled, setSoundEnabled] = useState(false);

  const navItems = [
    { href: "/", label: "Intro" },
    { href: "/projects", label: "Projects" },
    { href: "/thoughts", label: "Thoughts" },
  ];

  return (
    <>
      <header className="sticky top-0 left-0 z-10 flex w-full flex-col overflow-clip">
        {/* Gradient fade overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80" />
        
        {/* Progressive blur layers */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(12)].map((_, i) => {
            const startPercent = (i * 100) / 13;
            const midStart = ((i + 1) * 100) / 13;
            const midEnd = ((i + 2) * 100) / 13;
            const endPercent = ((i + 3) * 100) / 13;
            const blurAmount = i * 0.5;
            
            return (
              <div
                key={i}
                className="pointer-events-none absolute inset-0 rounded-[inherit]"
                style={{
                  maskImage: `linear-gradient(0deg, rgba(255,255,255,0) ${startPercent}%, rgba(255,255,255,1) ${midStart}%, rgba(255,255,255,1) ${midEnd}%, rgba(255,255,255,0) ${endPercent}%)`,
                  WebkitMaskImage: `linear-gradient(0deg, rgba(255,255,255,0) ${startPercent}%, rgba(255,255,255,1) ${midStart}%, rgba(255,255,255,1) ${midEnd}%, rgba(255,255,255,0) ${endPercent}%)`,
                  backdropFilter: `blur(${blurAmount}px)`,
                  WebkitBackdropFilter: `blur(${blurAmount}px)`,
                }}
              />
            );
          })}
        </div>

        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="absolute top-0 left-4 z-[100] -translate-y-14 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition duration-200 ease-out focus-visible:translate-y-7 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 dark:bg-white dark:text-gray-900"
        >
          Skip to main content
        </a>

        {/* Main header content */}
        <div className="relative z-[2] container mx-auto flex h-16 px-6">
          <div className="mx-auto flex w-full max-w-5xl items-center">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Go to homepage"
              className="group flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white"
            >
              <svg
                viewBox="0 0 39 20"
                xmlns="[w3.org](http://www.w3.org/2000/svg)"
                className="h-5 w-auto fill-gray-900 transition-colors duration-200 dark:fill-white"
                aria-hidden="true"
              >
                {/* Heart icon with animation */}
                <path
                  className="origin-center transition-transform duration-[1500ms] group-hover:animate-pulse"
                  d="M8.36308 5.18164H11.5457V2H17.909V11.5459H14.7273V14.7275H11.5457V17.9092H8.36308V14.7275H5.18144V11.5459H1.9998V2H8.36308V5.18164Z"
                />
                {/* Face icon with shake animation */}
                <g className="transition-transform duration-[1500ms] group-hover:animate-[shake_0.5s_ease-in-out]">
                  <path d="M37.0001 17.9092H21.0909V2H37.0001V17.9092ZM27.4522 8.36133H24.2726V8.36328H27.4542V5.18164H27.4522V8.36133ZM30.6368 8.36328H33.8185V8.36133H30.6397V5.18164H30.6368V8.36328Z" />
                  <g transform="translate(1.5, 3)">
                    <rect
                      className="fill-white dark:fill-gray-900"
                      x="24.27"
                      y="5.17999"
                      width="3.18182"
                      height="3.18182"
                    />
                    <rect
                      className="fill-white dark:fill-gray-900"
                      x="30.64"
                      y="5.17999"
                      width="3.18182"
                      height="3.18182"
                    />
                  </g>
                </g>
              </svg>
            </Link>

            {/* Right side: Navigation + Sound toggle */}
            <div className="ml-auto flex items-center gap-4">
              {/* Desktop navigation */}
              <nav aria-label="Primary navigation" className="hidden lg:flex">
                <ul className="flex gap-0.5">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        data-active={pathname === item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="relative inline-flex shrink-0 items-center justify-center rounded-sm px-3 py-1.5 font-mono text-sm font-medium uppercase tracking-wider text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 data-[active=true]:text-gray-900 dark:text-gray-400 dark:hover:text-white dark:focus-visible:ring-white dark:data-[active=true]:text-white"
                      >
                        <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Sound toggle button (desktop) */}
              <div className="hidden lg:flex">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  aria-label={soundEnabled ? "Disable sounds" : "Enable sounds"}
                  data-selected={soundEnabled}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white dark:focus-visible:ring-white"
                >
                  <SoundIcon muted={!soundEnabled} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile bottom navigation */}
        <nav aria-label="Primary navigation" className="lg:hidden">
          <div className="fixed inset-x-0 bottom-0 z-[100] flex h-16 overflow-hidden pb-[max(0px,env(safe-area-inset-bottom))]">
            <div className="relative z-[2] container mx-auto flex w-full items-center px-6">
              <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4">
                {/* Navigation pills */}
                <div className="flex flex-1">
                  <div className="w-full rounded-lg border border-gray-200 p-1 backdrop-blur-sm dark:border-gray-700">
                    <ul className="flex flex-1 items-stretch justify-between rounded-sm bg-white font-mono text-base font-medium uppercase tracking-wider dark:bg-gray-900 sm:gap-2">
                      {navItems.map((item) => (
                        <li key={item.href} className="flex-1">
                          <Link
                            href={item.href}
                            data-active={pathname === item.href}
                            aria-current={pathname === item.href ? "page" : undefined}
                            className="relative inline-flex w-full items-center justify-center rounded-sm px-3 py-2.5 text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 data-[active=true]:text-gray-900 dark:text-gray-400 dark:hover:text-white dark:focus-visible:ring-white dark:data-[active=true]:text-white"
                          >
                            <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sound toggle (mobile) */}
                <div className="flex shrink-0 items-center">
                  <div className="rounded-lg border border-gray-200 p-1 backdrop-blur-sm dark:border-gray-700">
                    <div className="rounded-sm bg-white dark:bg-gray-900">
                      <button
                        onClick={() => setSoundEnabled(!soundEnabled)}
                        aria-label={soundEnabled ? "Disable sounds" : "Enable sounds"}
                        data-selected={soundEnabled}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white dark:focus-visible:ring-white"
                      >
                        <SoundIcon muted={!soundEnabled} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg
      fill="none"
      height="16"
      width="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="[w3.org](http://www.w3.org/2000/svg)"
    >
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      {muted ? (
        <>
          <line x1="22" x2="16" y1="9" y2="15" />
          <line x1="16" x2="22" y1="9" y2="15" />
        </>
      ) : (
        <>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </>
      )}
    </svg>
  );
}
