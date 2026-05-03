"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open)
  }
    , [open])
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Al-Khalifah International School"
                fill
                style={{
                  borderRadius: '50%'
                }}
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="font-serif text-primary font-semibold text-base leading-none">
                Al-Khalifah
              </p>
              <p className="text-[10px] uppercase tracking-widest text-accent font-medium">
                International School
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md
                    ${active
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                    }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/admissions"
              className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-primary-light transition-colors duration-200"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-primary"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "border-t border-primary/10" : "max-h-0"}`}>
        <nav className="px-4 py-4 flex flex-col gap-1 bg-white">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors
                  ${active
                    ? "bg-primary/5 text-primary border-l-2 border-accent"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/admissions"
            onClick={() => setOpen(false)}
            className="mt-2 bg-primary text-white text-sm font-medium px-4 py-3 rounded-md text-center hover:bg-primary-light transition-colors"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}