import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Activity,
  HeartHandshake,
  Wind,
  ArrowRight,
  ArrowLeft,
  Maximize,
  Box,
  Sparkles,
  ShieldCheck,
  Users,
  Users2,
  Clock,
  Lock,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const },
};

const coreServices = [
  {
    title: "Sanering vid obevakat dödsfall",
    description:
      "Diskret och professionell sanering efter obevakade dödsfall. Vi hanterar biologiskt material, lukt, dokumentation och återställande åtgärder med respekt och säkerhet.",
    icon: <HeartHandshake className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/sanering-dodstall",
  },
  {
    title: "Socialsanering & hoarder-städning",
    description:
      "Vi utför professionell socialsanering och hoarder-städning — rensning och sanering av kraftigt nedskräpade bostäder med biologisk belastning, extrem uppsamling och luktpåverkan. Diskret, metodisk och med full utrustning.",
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

const preventativeServices = [
  {
    title: "Traumasanering",
    description:
      "Sanering efter blodspill, olyckor, våldshändelser eller biologiska föroreningar. Planerad tjänst under förberedelse.",
    icon: <Activity className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/traumasanering",
    status: "Planerad",
  },
  {
    title: "Förebyggande hygienbehandling",
    description:
      "Teknisk behandling med torrånga och hydroxylteknik för utrymmen med luktproblem, stillastående miljöer eller behov av förebyggande hygieninsats på utvalda ytor.",
    icon: <Sparkles className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/forebyggande-hygienbehandling",
    status: "Planerad",
  },
  {
    title: "Teknisk rengöring & hygienkontroll",
    description:
      "Diskret och noggrant utförd teknisk rengöring för hotell, konferensmiljöer och andra verksamheter med höga krav på hygien, dokumentation och återställning.",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/technical-cleaning-b2b",
    status: "Planerad",
  },
  {
    title: "Svåråtkomliga ytor",
    description:
      "Specialiserad rengöring och desinfektion av dolda eller svåråtkomliga utrymmen där standardinsatser inte räcker.",
    icon: <Maximize className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/svaratkomliga-ytor",
    status: "Planerad",
  },
  {
    title: "Bastu Hygienkontroll",
    description:
      "Specialiserad hygienbehandling av bastu- och wellnessmiljöer med hög värme och fukt. Fokus på porösa träytor, kontaktytor och områden där biofilm och organiskt material ackumuleras över tid. Anpassad för gym, spa och hotellmiljöer.",
    icon: <Wind className="w-5 h-5 text-cyan-accent" />,
    link: "/tjanster/bastu-hygienkontroll",
    status: "Planerad",
  },
];

type ServiceCarouselProps = {
  id: string;
  label: string;
  children: ReactNode;
  desktopColumns: string;
};

function ServiceCarousel({ id, label, children, desktopColumns }: ServiceCarouselProps) {
  const cards = Children.toArray(children);
  const count = cards.length;
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
  }, [count]);

  const goToService = (index: number) => {
    const track = servicesRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(index, count - 1));
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
    <div className="min-w-0">
      <div
        id={id}
        ref={servicesRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.currentTarget.scrollWidth <= event.currentTarget.clientWidth + 1) return;
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goToService(activeService + 1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            goToService(activeService - 1);
          } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            goToService(event.key === "Home" ? 0 : count - 1);
          }
        }}
        className={`relative flex items-stretch gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-accent md:grid md:overflow-visible md:pb-0 ${desktopColumns}`}
      >
        {cards}
      </div>
      {count > 1 && (
        <div className="flex items-center justify-between gap-3 mt-3 md:hidden">
          <span className="text-xs text-midnight/60">Svep för fler tjänster</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={`Föregående tjänst – ${label}`}
              aria-controls={id}
              disabled={activeService === 0}
              onClick={() => goToService(activeService - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-midnight hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <span className="min-w-[3rem] text-center text-sm tabular-nums text-midnight/70" aria-live="polite" aria-atomic="true">
              {activeService + 1} / {count}
            </span>
            <button
              type="button"
              aria-label={`Nästa tjänst – ${label}`}
              aria-controls={id}
              disabled={activeService === count - 1}
              onClick={() => goToService(activeService + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-midnight hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent"
            >
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Våra tjänster | NEXE SPECIALSANERING</title>
        <meta
          name="description"
          content="Utforska våra specialiserade tjänster inom biologisk sanering, traumasanering, luktsanering, socialsanering, förebyggande hygienbehandling med torrånga och hydroxylteknik, teknisk rengöring och sanering av svåråtkomliga ytor."
        />
        <meta
          name="keywords"
          content="saneringstjänster, traumasanering, luktsanering, dödsfallssanering, socialsanering, hoarder städning, förebyggande hygienbehandling, torrånga, hydroxylteknik, teknisk rengöring, svåråtkomliga ytor, personliga tillhörigheter"
        />
      </Helmet>

      <motion.div className="text-center mb-10 sm:mb-12" {...fadeInUp}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-midnight mb-3 leading-tight">
          Våra tjänster
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-midnight/60 max-w-2xl mx-auto font-light leading-relaxed">
          Vi erbjuder specialiserade saneringstjänster med fokus på säkerhet,
          teknisk noggrannhet, dokumentation och diskret hantering.
        </p>
      </motion.div>

      {/* Kärntjänster */}
      <div className="mb-12 sm:mb-14">
        <div className="border-b border-midnight/10 pb-3 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-midnight">
            Kärntjänster
          </h2>
        </div>

        <ServiceCarousel id="core-services" label="Kärntjänster" desktopColumns="md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="min-w-0 basis-[86%] shrink-0 snap-start md:basis-auto group bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-cyan-accent/40 hover:shadow-md transition-all duration-300 flex flex-col"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.06 }}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3.5 shrink-0">
                {service.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-2 text-midnight leading-snug">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-midnight/70 font-light leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              <div className="pt-3 border-t border-slate-100 mt-auto">
                <Link
                  to={service.link}
                  aria-label={`Läs mer om ${service.title}`}
                  className="text-cyan-accent font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  Läs mer om tjänsten <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>
            </motion.div>
          ))}
        </ServiceCarousel>
      </div>

      {/* Planerade tjänster */}
      <div className="mb-12 sm:mb-16">
        <div className="border-b border-midnight/10 pb-3 mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-accent uppercase tracking-wider mb-1">
              <Lock className="w-3 h-3" />
              Planerade tjänster
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-midnight">
              Planerade tjänster
            </h2>
          </div>
          <span className="text-xs text-midnight/50 font-medium">
            Ej tillgängliga för bokning än
          </span>
        </div>

        <p className="text-xs sm:text-sm text-midnight/65 font-light leading-relaxed max-w-2xl mb-5">
          Följande tjänster är planerade och förbereds inför framtida lansering.
        </p>

        <ServiceCarousel id="planned-services" label="Planerade tjänster" desktopColumns="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {preventativeServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="min-w-0 basis-[86%] shrink-0 snap-start md:basis-auto relative bg-slate-50/70 p-4 sm:p-5 rounded-xl border border-dashed border-slate-300 opacity-60 hover:opacity-75 transition-opacity duration-300 flex flex-col cursor-not-allowed select-none"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="opacity-60 text-cyan-accent">{service.icon}</div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/80 text-midnight/60">
                  <Lock className="w-2.5 h-2.5 text-midnight/50" />
                  Planerad
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold mb-1.5 text-midnight/80 leading-snug">
                {service.title}
              </h3>

              <p className="text-xs text-midnight/60 font-light leading-relaxed mb-3 flex-grow line-clamp-3">
                {service.description}
              </p>

              <div className="pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-midnight/40 font-medium mt-auto">
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3 text-midnight/35" />
                  Planerad
                </span>
                <span className="bg-slate-200/60 px-1.5 py-0.5 rounded text-[10px] inline-flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" /> Låst
                </span>
              </div>
            </motion.div>
          ))}
        </ServiceCarousel>
      </div>

      <section className="bg-midnight text-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem]">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-accent mx-auto mb-6 sm:mb-7 md:mb-8" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 md:mb-8 leading-tight">
            Varför välja NEXE SPECIALSANERING?
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed opacity-90 mb-8 sm:mb-10 md:mb-12">
            Vi arbetar strukturerat och med tydliga rutiner i varje uppdrag.
            Målet är att genomföra saneringen med så liten påverkan som möjligt
            för boende, verksamhet och omgivning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 text-left">
            <div className="bg-white/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent text-base sm:text-lg">
                Struktur
              </h4>
              <p className="text-sm sm:text-base opacity-70 leading-relaxed">
                Tydliga arbetsmoment, dokumentation och planering i varje
                uppdrag.
              </p>
            </div>

            <div className="bg-white/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent text-base sm:text-lg">
                Diskretion
              </h4>
              <p className="text-sm sm:text-base opacity-70 leading-relaxed">
                Respektfull och lågmäld hantering i känsliga eller utsatta
                situationer.
              </p>
            </div>

            <div className="bg-white/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent text-base sm:text-lg">
                Noggrannhet
              </h4>
              <p className="text-sm sm:text-base opacity-70 leading-relaxed">
                Metodval och utförande anpassas efter miljö, material och
                behov.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
