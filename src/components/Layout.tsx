import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
        </motion.div>
      )}

      {/* Main Content */}
      <main className="pt-20 sm:pt-24">{children}</main>

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-3" id="footer-brand-logo">
             <Logo imgClassName="h-12 sm:h-14 w-auto" />
            </Link>

            <p className="text-xs text-midnight/60 font-light leading-relaxed max-w-xs mb-3">
              Specialiserade på sanering i känsliga och krävande miljöer med
              teknisk precision, diskretion och respekt.
            </p>

            <div className="text-xs font-medium text-midnight/70">
              En del av{" "}
              <a
                href="https://nexegroup.se"
                target="_blank"
                rel="noopener noreferrer"
                translate="no"
                className="notranslate font-semibold text-midnight hover:text-cyan-accent transition-colors underline underline-offset-2"
              >
                NEXE GROUP AB
              </a>
            </div>
          </div>

          {/* Kärntjänster */}
          <div>
            <h4 className="font-bold mb-3 uppercase tracking-wider text-xs text-midnight/40">
              Kärntjänster
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm font-medium text-midnight/70">
              <li>
                <Link
                  to="/tjanster/sanering-dodstall"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Sanering vid dödsfall
                </Link>
              </li>

              <li>
                <Link
                  to="/tjanster/traumasanering"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Traumasanering
                </Link>
              </li>

              <li>
                <Link
                  to="/tjanster/socialsanering"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Socialsanering & hoarder
                </Link>
              </li>

              <li>
                <Link
                  to="/tjanster/luktsanering"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Luktsanering
                </Link>
              </li>
            </ul>
          </div>

          {/* Förebyggande */}
          <div>
            <h4 className="font-bold mb-3 uppercase tracking-wider text-xs text-midnight/40">
              Förebyggande
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm font-medium text-midnight/70">
              <li>
                <Link
                  to="/tjanster/forebyggande-hygienbehandling"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Förebyggande hygienbehandling
                </Link>
              </li>

              <li>
                <Link
                  to="/tjanster/technical-cleaning-b2b"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Teknisk rengöring & hygien
                </Link>
              </li>

              <li>
                <Link
                  to="/tjanster/svaratkomliga-ytor"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Svåråtkomliga ytor
                </Link>
              </li>

              <li>
                <Link
                  to="/tjanster/bastu-hygienkontroll"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Bastu Hygienkontroll
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-3 uppercase tracking-wider text-xs text-midnight/40">
              Företaget
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm font-medium text-midnight/70">
              <li>
                <Link
                  to="/om-oss"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Om oss
                </Link>
              </li>

              <li>
                <Link
                  to="/kontakt"
                  className="hover:text-cyan-accent transition-colors"
                >
                  Kontakt
                </Link>
              </li>

              <li>
                <a
                  href="mailto:kontakt@nexegroup.se"
                  translate="no"
                  className="notranslate hover:text-cyan-accent transition-colors"
                >
                  kontakt@nexegroup.se
                </a>
              </li>

              <li>
                <span className="inline-flex items-center gap-1.5 text-cyan-accent font-semibold">
                  Jour dygnet runt: 010-XXX XX XX
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="max-w-7xl mx-auto pt-4 sm:pt-5 border-t border-midnight/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-midnight/40">
          <div>
            © {new Date().getFullYear()} NEXE GROUP AB. Alla rättigheter
            förbehållna.
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              to="/integritetspolicy"
              className="hover:text-midnight transition-colors"
            >
              Integritetspolicy
            </Link>

            <Link
              to="/allmanna-villkor"
              className="hover:text-midnight transition-colors"
            >
              Allmänna villkor
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
