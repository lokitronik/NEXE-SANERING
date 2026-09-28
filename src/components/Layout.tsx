import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { Phone, Menu, X, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Logo } from "./Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-midnight font-sans antialiased">
      {/* Global Sticky Header */}
      <nav className="fixed top-0 w-full z-[9999] bg-white/70 backdrop-blur-xl border-b border-midnight/5 py-3 sm:py-4 px-6 sm:px-8 md:px-14 flex justify-between items-center">
        <Link to="/" className="flex items-center min-w-0" id="header-brand-logo">
          <Logo imgClassName="h-12 sm:h-14 md:h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold">
          <Link
            to="/"
            className={`hover:text-cyan-accent transition-colors ${
              location.pathname === "/" ? "text-cyan-accent" : ""
            }`}
          >
            Hem
          </Link>

          <Link
            to="/tjanster"
            className={`hover:text-cyan-accent transition-colors ${
              location.pathname.startsWith("/tjanster")
                ? "text-cyan-accent"
                : ""
            }`}
          >
            Tjänster
          </Link>

          <Link
            to="/om-oss"
            className={`hover:text-cyan-accent transition-colors ${
              location.pathname === "/om-oss" ? "text-cyan-accent" : ""
            }`}
          >
            Om oss
          </Link>

          <Link
            to="/kontakt"
            className={`hover:text-cyan-accent transition-colors ${
              location.pathname === "/kontakt" ? "text-cyan-accent" : ""
            }`}
          >
            Kontakt
          </Link>

          <span className="pulse-cyan bg-cyan-accent text-white px-5 lg:px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 whitespace-nowrap">
            <Phone className="w-4 h-4" />
            010-XXX XX XX
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-midnight p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-[9998] bg-white pt-24 px-6 flex flex-col gap-6 text-lg sm:text-xl font-bold"
        >
          <Link to="/">Hem</Link>
          <Link to="/tjanster">Tjänster</Link>
          <Link to="/om-oss">Om oss</Link>
          <Link to="/kontakt">Kontakt</Link>

          <span className="text-cyan-accent flex items-center gap-2 pt-2">
            <Phone className="w-5 h-5" />
            010-XXX XX XX
          </span>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            <a
              href="https://www.linkedin.com/company/nexe-group-ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40 text-slate-500 hover:text-[#0A66C2] transition-all duration-200 shadow-xs hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
              translate="no"
              aria-label="Besök NEXE GROUP AB på LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/nexegroupab"
              target="_blank"
              rel="noopener noreferrer"
              className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-pink-500/15 hover:border-pink-500/40 text-slate-500 hover:text-pink-500 transition-all duration-200 shadow-xs hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              translate="no"
              aria-label="Besök NEXE GROUP AB på Instagram"
              title="Instagram"
            >
              <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="pt-20 sm:pt-24">{children}</main>

      {/* Compact footer */}
      <footer className="bg-slate-50 border-t border-slate-200 px-4 sm:px-6 md:px-12 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link to="/" className="inline-flex shrink-0" id="footer-brand-logo" aria-label="NEXE SPECIALSANERING – startsida">
                <Logo imgClassName="h-10 w-auto" />
              </Link>
              <p className="text-xs text-midnight/65">
                En del av{" "}
                <a
                  href="https://nexegroup.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  translate="no"
                  className="notranslate font-semibold text-midnight hover:text-cyan-accent transition-colors"
                >
                  NEXE GROUP AB
                </a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-6 gap-y-2">
              <nav aria-label="Sidfotsmeny" className="flex flex-wrap items-center gap-x-5 text-sm font-medium text-midnight/75">
                <Link to="/tjanster" className="inline-flex items-center min-h-11 hover:text-cyan-accent transition-colors">
                  Tjänster
                </Link>
                <Link to="/om-oss" className="inline-flex items-center min-h-11 hover:text-cyan-accent transition-colors">
                  Om oss
                </Link>
                <Link to="/kontakt" className="inline-flex items-center min-h-11 hover:text-cyan-accent transition-colors">
                  Kontakt
                </Link>
              </nav>
              <div className="text-sm text-midnight/70">
                <a
                  href="mailto:kontakt@nexegroup.se"
                  translate="no"
                  className="notranslate inline-flex items-center min-h-11 hover:text-cyan-accent transition-colors"
                >
                  kontakt@nexegroup.se
                </a>
                <p className="text-xs leading-relaxed">Jour dygnet runt: 010-XXX XX XX</p>
              </div>

              <div className="flex items-center gap-2 pt-1 sm:pt-0">
                <a
                  href="https://www.linkedin.com/company/nexe-group-ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-slate-300 bg-white hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/50 text-slate-500 hover:text-[#0A66C2] transition-all duration-200 shadow-xs hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
                  translate="no"
                  aria-label="Besök NEXE GROUP AB på LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="https://www.instagram.com/nexegroupab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-slate-300 bg-white hover:bg-pink-500/15 hover:border-pink-500/50 text-slate-500 hover:text-pink-500 transition-all duration-200 shadow-xs hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                  translate="no"
                  aria-label="Besök NEXE GROUP AB på Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>

                <motion.button
                  type="button"
                  onClick={scrollToTop}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-midnight px-2.5 py-1.5 rounded-lg bg-slate-200/70 hover:bg-slate-200 border border-slate-300 transition-colors ml-1 cursor-pointer"
                  aria-label="Till toppen"
                >
                  <span className="whitespace-nowrap">Till toppen</span>
                  <ArrowUp className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </motion.button>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-x-6 gap-y-1 text-xs text-midnight/65">
            <p className="leading-relaxed">
              © {new Date().getFullYear()} NEXE GROUP AB
              <span className="mx-2" aria-hidden="true">·</span>
              Org.nr: 559602-9404
            </p>
            <div className="flex flex-wrap gap-x-5">
              <Link to="/integritetspolicy" className="inline-flex items-center min-h-11 hover:text-midnight transition-colors">
                Integritetspolicy
              </Link>
              <Link to="/allmanna-villkor" className="inline-flex items-center min-h-11 hover:text-midnight transition-colors">
                Allmänna villkor
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
