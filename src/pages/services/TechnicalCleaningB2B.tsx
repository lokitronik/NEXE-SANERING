import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Phone,
  Hotel,
  Microscope,
  GraduationCap,
  Anchor,
  ChevronRight,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay },
});

// ── Service cards ────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Hotel,
    title: "Hotell & Airbnb",
    tag: "Boende & uthyrning",
    intro:
      "Teknisk hygienbehandling för rum och gemensamma utrymmen där vanlig städning inte räcker.",
    points: [
      "Packs med fasta månatliga besök",
      "Behandling av lukt, textilier och ytor",
      "ATP-mätning och dokumentation vid behov",
      "Planeras efter beläggning och verksamhet",
    ],
  },
  {
    icon: GraduationCap,
    title: "Skolor, förskolor & stödcentrum",
    tag: "Känsliga miljöer",
    intro:
      "Hygienbehandling anpassad för miljöer med barn, äldre och personer med funktionsnedsättning.",
    points: [
      "Inokulösa desinfektionsmedel — säkra för känsliga grupper",
      "Hydroxylbehandling utan evakuering",
      "Anpassat efter verksamhetens tider och behov",
      "Dokumentation för intern kontroll eller tillsyn",
    ],
  },
  {
    icon: Anchor,
    title: "Båtar & marin miljö",
    tag: "Marin hygien",
    intro:
      "Hygienbehandling för interiör, hytter och slutna utrymmen på fartyg och fritidsbåtar.",
    points: [
      "Hydroxylbehandling och inokulösa desinfektionsmedel för marin miljö",
      "Behandling av mögel och fuktrelaterade problem",
      "Luktsanering i hytter, kök och WC-utrymmen",
      "Mikrobiellt konserveringsmedel på utsatta ytor",
    ],
  },
];

const WHY_POINTS = [
  {
    icon: ShieldCheck,
    title: "Minimal störning i verksamheten",
    body: "Arbetet planeras efter lokalens användning, beläggning och praktiska förutsättningar.",
  },
  {
    icon: Microscope,
    title: "Mätbar hygienkontroll",
    body: "ATP-mätning på utvalda ytor ger ett objektivt underlag utöver visuell bedömning.",
  },
  {
    icon: ShieldCheck,
    title: "Dokumentation efter insats",
    body: "Metod, behandlade ytor och kontrollpunkter — spårbarhet för fastighetsägare och driftansvariga.",
  },
];

// ────────────────────────────────────────────────────────────────────────────

export default function TechnicalCleaningB2B() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Teknisk rengöring B2B | Prio Sanering AB</title>
        <meta
          name="description"
          content="Teknisk rengöring för hotell, skolor, förskolor, LSS-boenden och båtar. Hygienbehandling med hydroxyl, inokulösa desinfektionsmedel och ATP-mätning. Stockholm."
        />
        <meta
          name="keywords"
          content="teknisk rengöring, hygienkontroll hotell, skola sanering, förskola desinfektion, LSS hygien, båt sanering, hydroxylbehandling, ATP-mätning, B2B sanering Stockholm"
        />
      </Helmet>

      {/* ── Hero ── */}
      <motion.div className="mb-16 md:mb-20" {...fadeUp(0)}>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-accent uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Teknisk rengöring B2B</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-midnight leading-tight mb-6 max-w-3xl">
          Hygieninsatser där<br />
          <span className="text-cyan-accent">vanlig städning inte räcker</span>
        </h1>
        <p className="text-lg md:text-xl text-midnight/60 font-light leading-relaxed max-w-2xl">
          Riktade hygieninsatser för verksamheter med specifika krav på metod,
          produktval och dokumentation. Vi kombinerar hydroxylbehandling,
          inokulösa desinfektionsmedel och ATP-mätning — anpassat efter varje uppdrag.
        </p>
      </motion.div>

      {/* ── Service tree ── */}
      <motion.div className="mb-20" {...fadeUp(0.1)}>

        {/* Root node */}
        <div className="flex flex-col items-center mb-0">
          <div className="w-full max-w-2xl bg-midnight text-white rounded-2xl px-10 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-accent mb-3">
              Teknisk rengöring B2B
            </p>
            <p className="text-white/70 font-light leading-relaxed text-sm">
              Hygienbehandling med hydroxylgenerator, inokulösa desinfektionsmedel
              och ATP-mätning. Alltid med förhandsbedömning, säkerhetsprotokoll
              och dokumentation efter utförd insats.
            </p>
          </div>

          {/* Connector lines */}
          <div className="hidden sm:grid sm:grid-cols-3 w-full max-w-4xl">
            {/* Left branch */}
            <div className="flex flex-col items-center">
              <div className="w-px h-6 bg-slate-300" />
              <div className="w-full h-px bg-slate-300" style={{ marginRight: '-1px' }} />
              <div className="w-px h-6 bg-slate-300" />
            </div>
            {/* Center branch */}
            <div className="flex flex-col items-center">
              <div className="w-px h-12 bg-slate-300" />
            </div>
            {/* Right branch */}
            <div className="flex flex-col items-center">
              <div className="w-px h-6 bg-slate-300" />
              <div className="w-full h-px bg-slate-300" style={{ marginLeft: '-1px' }} />
              <div className="w-px h-6 bg-slate-300" />
            </div>
          </div>

          {/* Mobile connector */}
          <div className="sm:hidden w-px h-8 bg-slate-300" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, tag, intro, points }, i) => (
            <motion.div
              key={title}
              className="flex flex-col bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-cyan-accent/30 transition-all"
              {...fadeUp(0.15 + i * 0.07)}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-cyan-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-cyan-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">
                  {tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-midnight mb-3">{title}</h3>
              <p className="text-midnight/60 font-light text-sm leading-relaxed mb-5">
                {intro}
              </p>
              <ul className="space-y-2 mt-auto">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-accent flex-shrink-0 mt-0.5" />
                    <span className="text-midnight/60 font-light text-xs leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Why B2B + CTA ── */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        {...fadeUp(0.3)}
      >
        <div>
          <h2 className="text-3xl font-bold text-midnight mb-8">
            Varför teknisk rengöring B2B?
          </h2>
          <div className="space-y-6">
            {WHY_POINTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-cyan-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-midnight mb-1">{title}</h4>
                  <p className="text-midnight/60 font-light text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-midnight rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Boka en konsultation</h3>
          <p className="text-white/50 text-sm font-light mb-8 leading-relaxed">
            Kontakta oss för en första bedömning av lokal, verksamhet och
            lämplig hygieninsats. Ingen bindning.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Hotell, Airbnb och uthyrningsboenden",
              "Skolor, förskolor och LSS-boenden",
              "Båtar, fartyg och marin miljö",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                <span className="text-white/65 font-light text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="tel:0101234567"
            className="flex items-center justify-center gap-3 bg-cyan-accent text-white py-4 rounded-full font-bold hover:bg-cyan-accent/90 transition-all"
          >
            <Phone className="w-5 h-5" />
            010-XXX XX XX
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
