import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  HeartHandshake,
  ArrowRight,
  ArrowLeft,
  Wind,
  Box,
  Users2,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] as const },
};

const coreServices = [
  {
    title: "Sanering vid obevakat dödsfall",
    description:
      "Diskret och professionell sanering efter obevakade dödsfall med fokus på biologiskt material, lukt och återställande åtgärder.",
    icon: <HeartHandshake className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/sanering-dodstall",
  },
  {
    title: "Socialsanering & hoarder-städning",
    description:
      "Rensning och sanering av kraftigt nedskräpade bostäder med omfattande ansamling av föremål, lukt och biologisk belastning.",
    icon: <Users2 className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/socialsanering",
  },
  {
    title: "Luktsanering",
    description:
      "Teknisk behandling av svåra och kvarvarande lukter i bostäder, lokaler och andra miljöer där vanlig rengöring inte räcker.",
    icon: <Wind className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/luktsanering",
  },
  {
    title: "Hantering av personliga tillhörigheter",
    description:
      "Respektfull identifiering, sortering och hantering av personliga tillhörigheter efter överenskommelse.",
    icon: <Box className="w-5 h-5 text-cyan-accent" />,
    link: "/hantering-av-personliga-tillhorigheter",
  },
];

// Sparas intakt för framtida återaktivering:
/*
  {
    title: "Traumasanering",
    description:
      "Snabb och säker sanering efter blodspill, olyckor, våldshändelser och andra akuta biologiska föroreningar.",
    icon: <Activity className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/traumasanering",
  },
*/

// Sparas intakt för framtida återaktivering:
/*
const preventativeServices = [
  {
    title: "Förebyggande hygienbehandling",
    description:
      "Teknisk behandling med torrånga och hydroxylteknik för utrymmen med luktproblem, stillastående miljöer eller behov av förebyggande hygieninsats på utvalda ytor.",
    link: "/tjanster/forebyggande-hygienbehandling",
  },
  {
    title: "Teknisk rengöring & hygienkontroll",
    description:
      "Diskret och noggrant utförd teknisk rengöring för hotell, konferensmiljöer och andra verksamheter med höga krav på hygien, dokumentation och återställning.",
    link: "/tjanster/technical-cleaning-b2b",
  },
  {
    title: "Svåråtkomliga ytor",
    description:
      "Specialiserad rengöring och desinfektion av dolda eller svåråtkomliga utrymmen där standardinsatser inte räcker.",
    link: "/tjanster/svaratkomliga-ytor",
  },
  {
    title: "Bastu Hygienkontroll",
    description:
      "Specialiserad hygienbehandling av bastu- och wellnessmiljöer med hög värme och fukt. Fokus på porösa träytor, kontaktytor och områden där biofilm och organiskt material ackumuleras över tid. Anpassad för gym, spa och hotellmiljöer.",
    link: "/tjanster/bastu-hygienkontroll",
  },
];
*/

const values = [
  {
    title: "Diskret hantering",
    description:
      "Vi arbetar med respekt för situationen och anpassar varje insats efter miljön och människorna omkring.",
  },
  {
    title: "Säker arbetsmetod",
    description:
      "Varje uppdrag utförs strukturerat med fokus på hygien, riskbedömning och kontrollerad hantering.",
  },
  {
    title: "Noggrann återställning",
    description:
      "Målet är inte bara att rengöra, utan att återställa miljön på ett tryggt och professionellt sätt.",
  },
];

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  // Track swipes, arrow navigation and viewport changes from the actual scroll position.
  useEffect(() => {
    const track = servicesRef.current;
    if (!track) return;

    const updateActiveService = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const start = cards[0]?.offsetLeft ?? 0;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const target = Math.min(card.offsetLeft - start, maxScroll);
        const distance = Math.abs(track.scrollLeft - target);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveService(closestIndex);
    };

    updateActiveService();
    track.addEventListener("scroll", updateActiveService, { passive: true });
    const observer = new ResizeObserver(updateActiveService);
    observer.observe(track);
    Array.from(track.children).forEach((card) => observer.observe(card));

    return () => {
      track.removeEventListener("scroll", updateActiveService);
      observer.disconnect();
    };
  }, []);

  const goToService = (index: number) => {
    const track = servicesRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(index, coreServices.length - 1));
    const card = track.children[next] as HTMLElement | undefined;
    const first = track.children[0] as HTMLElement | undefined;
    if (!card || !first) return;

    track.scrollTo({
      left: Math.min(
        card.offsetLeft - first.offsetLeft,
        Math.max(0, track.scrollWidth - track.clientWidth),
      ),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden bg-white"
    >
      <Helmet>
        <title>
          NEXE SPECIALSANERING | Traumasanering, sanering vid dödsfall och
          luktsanering
        </title>
        <meta
          name="description"
          content="NEXE SPECIALSANERING erbjuder specialiserade tjänster inom traumasanering, sanering vid dödsfall, socialsanering, luktsanering, förebyggande hygienbehandling med torrånga och hydroxylteknik, teknisk rengöring och sanering av svåråtkomliga ytor."
        />
        <meta
          name="keywords"
          content="traumasanering, sanering vid dödsfall, socialsanering, hoarder städning, luktsanering, förebyggande hygienbehandling, torrånga, hydroxylbehandling, hydroxylteknik, teknisk rengöring, svåråtkomliga ytor, biologisk sanering"
        />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/Bpsvbao.png"
            alt="Trygg och väl återställd miljö"
            className="w-full h-full object-cover object-center opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_30%)]" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="max-w-7xl mx-auto py-10 sm:py-12 lg:py-14">
            <motion.div {...fadeInUp} className="max-w-4xl">
              <span className="inline-flex items-center text-midnight/65 text-xs sm:text-sm font-semibold tracking-wide mb-3">
                Diskret · Säker · Professionell sanering
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight leading-tight tracking-tight mb-4 max-w-3xl">
                Specialsanering med omtanke och precision
              </h1>

              <p className="text-base sm:text-lg text-midnight/75 leading-relaxed max-w-2xl mb-5">
                Vi hjälper privatpersoner, fastighetsägare och verksamheter med
                sanering där diskretion, säkerhet och noggrannhet är avgörande.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:0101234567"
                  className="inline-flex items-center justify-center rounded-full bg-midnight text-white px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold hover:bg-midnight/90 transition-colors w-full sm:w-auto"
                >
                  Kontakta oss
                </a>

                <Link
                  to="/tjanster"
                  className="inline-flex items-center justify-center rounded-full border border-midnight/15 bg-white text-midnight px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold hover:border-midnight/30 transition-colors w-full sm:w-auto"
                >
                  Se våra tjänster
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kärntjänster */}
      <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-5 sm:mb-6"
            {...fadeInUp}
          >
            <h2 id="services-heading" className="text-2xl sm:text-3xl font-bold mb-2 text-midnight">
              Våra tjänster
            </h2>
            <p className="text-sm sm:text-base text-midnight/65 max-w-2xl leading-relaxed">
              När vanlig rengöring inte räcker.
            </p>
          </motion.div>

          <div
            id="services-track"
            ref={servicesRef}
            role="region"
            aria-labelledby="services-heading"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.target !== event.currentTarget) return;
              const track = event.currentTarget;
              if (track.scrollWidth <= track.clientWidth + 1) return;
              if (event.key === "ArrowRight") {
                event.preventDefault();
                goToService(activeService + 1);
              } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                goToService(activeService - 1);
              } else if (event.key === "Home" || event.key === "End") {
                event.preventDefault();
                goToService(event.key === "Home" ? 0 : coreServices.length - 1);
              }
            }}
            className={`relative flex items-stretch gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-accent md:grid md:grid-cols-2 md:overflow-visible md:pb-0 ${coreServices.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group min-w-0 basis-[86%] shrink-0 snap-start scroll-mx-0 bg-white p-5 rounded-2xl border border-slate-200 hover:border-cyan-accent/40 hover:shadow-md transition-shadow duration-300 flex flex-col md:basis-auto"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.06 }}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3.5 shrink-0">
                  {service.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold mb-2 text-midnight leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-midnight/70 leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <Link
                    to={service.link}
                    aria-label={`Läs mer om ${service.title}`}
                    className="text-cyan-accent font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all text-xs sm:text-sm"
                  >
                    Läs mer <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {coreServices.length > 1 && (
            <div className="flex items-center justify-between gap-4 mt-3 md:hidden">
              <span className="text-xs text-midnight/60">Svep för fler tjänster</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Föregående tjänst"
                  aria-controls="services-track"
                  disabled={activeService === 0}
                  onClick={() => goToService(activeService - 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-midnight transition-colors hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="min-w-[3rem] text-center text-sm tabular-nums text-midnight/70" aria-live="polite" aria-atomic="true">
                  {activeService + 1} / {coreServices.length}
                </span>
                <button
                  type="button"
                  aria-label="Nästa tjänst"
                  aria-controls="services-track"
                  disabled={activeService === coreServices.length - 1}
                  onClick={() => goToService(activeService + 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-midnight transition-colors hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Förebyggande tjänster döljs från startsidan enligt önskemål och sparas för framtida lansering */}
      {/* 
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          ...
        </div>
      </section> 
      */}

      {/* Values: one compact section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-5">
            <Shield className="w-6 h-6 text-cyan-accent shrink-0" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-bold text-midnight leading-snug">
              Trygg hantering i känsliga situationer
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.06 }}
                className="border-l-2 border-cyan-accent/40 pl-4"
              >
                <h3 className="text-base font-bold text-midnight mb-1.5">
                  {value.title}
                </h3>
                <p className="text-sm text-midnight/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact contact strip */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-14 bg-midnight text-white">
        <motion.div
          {...fadeInUp}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-snug">
              Behöver du hjälp?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Berätta vad du behöver hjälp med, så går vi igenom nästa steg tillsammans.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
            <a
              href="tel:0101234567"
              className="inline-flex items-center justify-center rounded-full bg-white text-midnight px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Ring oss
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:border-white/60 transition-colors"
            >
              Skriv till oss
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
