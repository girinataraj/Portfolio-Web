"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  { href: "/projects/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/#open-source", label: "Open source" },
];
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const desktop = matchMedia("(min-width: 761px)");
    let focusedArea: "mobile" | "desktop" | null = null;
    const trackFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      focusedArea =
        target === toggleRef.current || menuRef.current?.contains(target)
          ? "mobile"
          : target.closest(".desktop-nav")
            ? "desktop"
            : null;
    };
    const restore = () => {
      if (
        (desktop.matches && focusedArea === "mobile") ||
        (!desktop.matches && focusedArea === "desktop")
      )
        brandRef.current?.focus();
    };
    document.addEventListener("focusin", trackFocus);
    desktop.addEventListener("change", restore);
    return () => {
      document.removeEventListener("focusin", trackFocus);
      desktop.removeEventListener("change", restore);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    const desktop = matchMedia("(min-width: 761px)");
    const resize = () => {
      if (desktop.matches) {
        if (menuRef.current?.contains(document.activeElement))
          brandRef.current?.focus();
        setOpen(false);
      }
    };
    desktop.addEventListener("change", resize);
    return () => {
      window.removeEventListener("keydown", close);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          ref={brandRef}
          href="/"
          className="wordmark"
          aria-label="giri.ns — Giri N S, home"
          onClick={() => setOpen(false)}
        >
          giri<span className="accent">.</span>
          <span className="brand-ns">ns</span>
          <span className="wordmark-suffix" aria-hidden="true">
            OBSIDIAN / V3
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact/"
          className="header-contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav
        ref={menuRef}
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact/" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
