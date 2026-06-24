import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";

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
      <nav className="fixed top-0 w-full z-[9999] bg-white/70 backdrop-blur-xl border-b border-midnight/5 py-3 sm:py-4 px-4 sm:px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center min-w-0">
          <Logo className="scale-75 sm:scale-80 md:scale-90 origin-left" />
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
              location.pathname.startsWith("/tjanster") ? "text-cyan-accent" : ""
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

          <a
            href="tel:0101234567"
            className="pulse-cyan bg-cyan-accent text-white px-5 lg:px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            010-XXX XX XX
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-midnight p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
          <a href="tel:0101234567" className="text-cyan-accent flex items-center gap-2 pt-2">
            <Phone className="w-5 h-5" />
            010-XXX XX XX
          </a>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="pt-20 sm:pt-20">{children}</main>

      {/* Footer */}
      <footer className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">

          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6 sm:mb-8">
              <Logo className="scale-75 sm:scale-80 md:scale-90 origin-left" />
            </Link>
            <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed max-w-md">
              Prio Sanering AB är specialiserat på sanering i känsliga och krävande miljöer.
              Vi arbetar med teknisk noggrannhet, diskret hantering och respekt för varje situation.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-5 sm:mb-6 uppercase tracking-widest text-xs text-midnight/40">
              Kärntjänster
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm font-medium text-midnight/70">
              <li>
                <Link to="/tjanster/sanering-dodstall" className="hover:text-cyan-accent">
                  Sanering vid dödsfall
                </Link>
              </li>
              <li>
                <Link to="/tjanster/traumasanering" className="hover:text-cyan-accent">
                  Traumasanering
                </Link>
              </li>
              <li>
                <Link to="/tjanster/socialsanering" className="hover:text-cyan-accent">
                  Socialsanering & hoarder-städning
                </Link>
              </li>
              <li>
                <Link to="/tjanster/luktsanering" className="hover:text-cyan-accent">
                  Luktsanering
                </Link>
              </li>

              <li>
                <Link
                  to="/tjanster/bastu-hygienkontroll"
                  className="hover:text-cyan-accent"
                >
                  Bastu Hygienkontroll
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mt-7 sm:mt-8 mb-5 sm:mb-6 uppercase tracking-widest text-xs text-midnight/40">
              Förebyggande
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm font-medium text-midnight/70">
              <li>
                <Link to="/tjanster/forebyggande-hygienbehandling" className="hover:text-cyan-accent">
                  Förebyggande hygienbehandling
                </Link>
              </li>
              <li>
                <Link to="/tjanster/technical-cleaning-b2b" className="hover:text-cyan-accent">
                  Teknisk rengöring & hygienkontroll
                </Link>
              </li>
              <li>
                <Link to="/tjanster/svaratkomliga-ytor" className="hover:text-cyan-accent">
                  Svåråtkomliga ytor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 sm:mb-6 uppercase tracking-widest text-xs text-midnight/40">
              Företaget
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm font-medium text-midnight/70">
              <li><Link to="/om-oss" className="hover:text-cyan-accent">Om oss</Link></li>
              <li><Link to="/kontakt" className="hover:text-cyan-accent">Kontakt</Link></li>
              <li><a href="tel:0101234567">Jour dygnet runt</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 sm:pt-8 border-t border-midnight/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-midnight/40">
          <div>© 2026 Prio Sanering AB. Alla rättigheter förbehållna.</div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/integritetspolicy">Integritetspolicy</Link>
            <Link to="/allmanna-villkor">Allmänna villkor</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
