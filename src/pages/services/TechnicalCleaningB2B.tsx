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

// ── Segment data ────────────────────────────────────────────────────────────

const SEGMENTS = [
  {
    icon: Hotel,
    title: "Hotell & Airbnb",
    tag: "Boende & uthyrning",
    body: "Teknisk hygienbehandling för rum, gemensamma utrymmen och tillfälliga boenden. Packs med fasta månatliga besök — lukt, textilier, ATP-mätning och dokumentation.",
  },
  {
    icon: GraduationCap,
    title: "Skolor, förskolor & stödcentrum",
    tag: "Känsliga miljöer",
    body: "Hygienbehandling anpassad för miljöer med barn, äldre och personer med funktionsnedsättning. Certifierade metoder, säkra produkter och protokoll som uppfyller krav för offentliga verksamheter.",
  },
  {
    icon: Anchor,
    title: "Båtar, kabyss & marin miljö",
    tag: "Marin hygien",
    body: "Hygienbehandling och bioprotektorer för kabyss, hytt, toalett och slutna utrymmen på fartyg och fritidsbåtar. Fuktig miljö kräver specifika metoder och produkter.",
  },
  {
    icon: Microscope,
    title: "ATP-mätning & dokumentation",
    tag: "Verifiering",
    body: "Mätning av organiska rester på utvalda ytor. Ger ett mätbart underlag för hygienkontroll före och efter insats — tydligare än visuell bedömning.",
  },
];

// ── Schools detail ───────────────────────────────────────────────────────────

const SCHOOL_POINTS = [
  "Förskolor, grundskolor och gymnasier",
  "LSS-boenden och daglig verksamhet",
  "Äldreboenden och serviceboenden",
  "HVB-hem och stödboenden",
  "Fritidshem och öppen verksamhet",
];

const SCHOOL_METHOD = [
  {
    title: "Säkra produkter",
    body: "Vi använder certifierade desinfektionsmedel och metoder godkända för miljöer med barn och sköra grupper.",
  },
  {
    title: "Hydroxylbehandling inomhus",
    body: "Luftrening med hydroxylgenerator (TITAN 4000) utan evakuering — lämplig under eller efter verksamhetstid.",
  },
  {
    title: "Fokus på kontaktytor",
    body: "Handtag, räcken, toaletter, leksaker, bänkytor — de ytor som bär störst smittrisk behandlas systematiskt.",
  },
  {
    title: "Dokumenterad insats",
    body: "Protokoll och rapport efter varje insats för intern kontroll, tillsyn eller kvalitetsuppföljning.",
  },
];

// ── Marine detail ────────────────────────────────────────────────────────────

const MARINE_POINTS = [
  "Kabyss och köksutrymmen ombord",
  "Hytter och sovutrymmen",
  "Toaletter och WC-utrymmen",
  "Förvaringsutrymmen med fuktproblem",
  "Fritidsbåtar inför eller efter säsong",
  "Charterbåtar och uthyrningsfarkoster",
];

const MARINE_METHOD = [
  {
    title: "Bioprotektorer",
    body: "Behandling med bioprotektorer som bildar ett skyddande skikt på ytor och hindrar återväxt av bakterier, mögel och biofilm under längre tid.",
  },
  {
    title: "Mögel och fukt",
    body: "Slutna utrymmen med hög luftfuktighet är särskilt utsatta. Vi behandlar och dokumenterar för att förhindra återkomst.",
  },
  {
    title: "Luktsanering ombord",
    body: "Kabyss och hytt samlar lukter från mat, fukt och biologiska källor. Hydroxyl och ozon anpassas efter utrymmets storlek och ventilation.",
  },
  {
    title: "Inför och efter säsong",
    body: "Hygienbehandling inför sjösättning eller uppläggning — ett naturligt steg i båtens underhållsrutin.",
  },
];

// ── Why B2B ──────────────────────────────────────────────────────────────────

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
    body: "Metod, behandlade ytor, kontrollpunkter och mätresultat — spårbarhet för fastighetsägare och driftansvariga.",
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
          content="Teknisk rengöring för hotell, skolor, förskolor, LSS-boenden och båtar. Hygienbehandling, bioprotektorer och ATP-mätning. Stockholm."
        />
        <meta
          name="keywords"
          content="teknisk rengöring, hygienkontroll hotell, skola sanering, förskola desinfection, LSS hygien, båt sanering, bioprotektorer, ATP-mätning, B2B sanering Stockholm"
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
          Riktade hygieninsatser för hotell, skolor, förskolor, LSS-boenden och marin miljö.
          Vi kombinerar teknisk rengöring, bioprotektorer, ATP-mätning och dokumentation
          anpassat efter varje verksamhets specifika krav.
        </p>
      </motion.div>

      {/* ── Segment cards ── */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20" {...fadeUp(0.1)}>
        {SEGMENTS.map(({ icon: Icon, title, tag, body }, i) => (
          <motion.div
            key={title}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-cyan-accent/30 transition-all"
            {...fadeUp(0.1 + i * 0.07)}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-cyan-accent" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">
                {tag}
              </span>
            </div>
            <h3 className="text-xl font-bold text-midnight mb-3">{title}</h3>
            <p className="text-midnight/65 font-light leading-relaxed text-sm">{body}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Schools & Care centers ── */}
      <motion.div className="mb-20" {...fadeUp(0.15)}>
        <div className="flex items-center gap-3 mb-3">
          <GraduationCap className="w-6 h-6 text-cyan-accent" />
          <h2 className="text-3xl font-bold text-midnight">
            Skolor, förskolor & stödcentrum
          </h2>
        </div>
        <p className="text-midnight/55 font-light mb-10 max-w-2xl">
          Känsliga miljöer kräver extra omsorg. Barn, äldre och personer med
          funktionsnedsättning är mer sårbara för hygienbrister — och ställer
          höga krav på metod, produktval och dokumentation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — who */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-midnight/40 mb-5">
              Verksamheter vi arbetar med
            </p>
            <ul className="space-y-3">
              {SCHOOL_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                  <span className="text-midnight/70 font-light">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — how */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SCHOOL_METHOD.map(({ title, body }) => (
              <div
                key={title}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
              >
                <h4 className="font-bold text-midnight mb-2 text-sm">{title}</h4>
                <p className="text-midnight/60 font-light text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Marine ── */}
      <motion.div className="mb-20" {...fadeUp(0.2)}>
        <div className="bg-midnight rounded-3xl p-8 md:p-14">
          <div className="flex items-center gap-3 mb-3">
            <Anchor className="w-6 h-6 text-cyan-accent" />
            <h2 className="text-3xl font-bold text-white">
              Båtar, kabyss & marin miljö
            </h2>
          </div>
          <p className="text-white/55 font-light mb-10 max-w-2xl">
            Slutna utrymmen med hög luftfuktighet, salt och organiska rester kräver
            specifika metoder. Vi erbjuder hygienbehandling och bioprotektorer
            anpassade för marin miljö.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — where */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
                Utrymmen & farkoster
              </p>
              <ul className="space-y-3">
                {MARINE_POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                    <span className="text-white/70 font-light text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MARINE_METHOD.map(({ title, body }) => (
                <div
                  key={title}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <h4 className="font-bold text-cyan-accent mb-2 text-sm">{title}</h4>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Why B2B + CTA ── */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        {...fadeUp(0.25)}
      >
        {/* Why */}
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

        {/* CTA */}
        <div className="bg-midnight rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Boka en konsultation</h3>
          <p className="text-white/50 text-sm font-light mb-8 leading-relaxed">
            Kontakta oss för en första bedömning av lokal, verksamhet, behov
            och lämplig hygieninsats. Ingen bindning.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Hotell, Airbnb och uthyrningsboenden",
              "Skolor, förskolor och LSS-boenden",
              "Båtar, kabyss och marin miljö",
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
