import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Phone, Hotel, GraduationCap, Anchor, Microscope, ChevronRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay },
});

const PROCESS = [
  {
    icon: ShieldCheck,
    title: "Hydroxylbehandling",
    body: "Luftrening och ytbehandling med hydroxylgenerator. Ingen evakuering krävs.",
  },
  {
    icon: ShieldCheck,
    title: "Inokulösa desinfektionsmedel",
    body: "Certifierade produkter säkra för alla miljöer — barn, äldre, djur, elektronik.",
  },
  {
    icon: ShieldCheck,
    title: "Långtidsverkande antimikrobiellt ytskydd",
    body: "Behandling som bromsar återkolonisering av bakterier och mögel på utsatta ytor efter utförd rengöring.",
  },
  {
    icon: ShieldCheck,
    title: "Vägglössbehandling med torrånga",
    body: "Ånga vid hög temperatur (upp till 173°C, 8 bar) eliminerar vägglöss och ägg på tillgängliga ytor — textilier, sömmar, madrasser, sängramar och möbler. Kräver inte kemikalier.",
  },
  {
    icon: ShieldCheck,
    title: "Dokumentation",
    body: "Protokoll efter varje insats — metod, ytor och kontrollpunkter.",
  },
];

const SEGMENTS = [
  {
    icon: Hotel,
    title: "Hotell, Airbnb & sommarstugor",
    tag: "Boende & uthyrning",
    body:
      "Förebyggande hygieninsats för rum, gemensamma ytor, toaletter och hygienutrymmen i uthyrningsboenden. Inkluderar ATP-mätning som kontrollpunkt, hydroxylbehandling och dokumentation. Sommarstugor och privatbostäder: engångsinsats inför eller efter säsong.",
  },
  {
    icon: GraduationCap,
    title: "Skolor, förskolor & stödcentrum",
    tag: "Känsliga miljöer",
    body:
      "Miljöer med barn, äldre och personer med funktionsnedsättning. Särskilt fokus på toaletter, hygienutrymmen och kontaktintensiva ytor. Insatsen planeras efter verksamhetens tider — skolan behöver inte stänga.",
  },
  {
    icon: ShieldCheck,
    title: "Gym & träningsanläggningar",
    tag: "Hög belastning",
    body:
      "Hygieninsatser för gym, omklädningsrum, duschar, toaletter och andra högtrafikerade hygienutrymmen. Fokus på kontaktintensiva ytor, svettpåverkade miljöer och luktproblematik.",
  },
  {
    icon: Anchor,
    title: "Båtar, färjor & marin miljö",
    tag: "Marin hygien",
    body:
      "Interiör, hytter, toaletter, hygienutrymmen och slutna utrymmen på fritidsbåtar, fartyg och färjor. Inför och efter säsong, eller vid behov under drift.",
  },
];

export default function TechnicalCleaningB2B() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Teknisk hygienbehandling | Prio Sanering AB</title>
        <meta
          name="description"
          content="Teknisk hygienbehandling för hotell, skolor, förskolor, gym, sommarstugor och båtar. Hydroxyl, inokulösa desinfektionsmedel och ATP-mätning. Stockholm."
        />
        <meta
          name="keywords"
          content="teknisk rengöring, hygienkontroll hotell, skola sanering, gym hygien, förskola desinfektion, sommarstuga hygien, båt sanering, hydroxylbehandling, ATP-mätning Stockholm"
        />
      </Helmet>

      {/* ── Hero ── */}
      <motion.div className="mb-16 md:mb-20" {...fadeUp(0)}>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-accent uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Teknisk hygienbehandling</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-midnight leading-tight mb-6 max-w-3xl">
          Samma process.<br />
          <span className="text-cyan-accent">Anpassad efter miljön.</span>
        </h1>

        <p className="text-lg md:text-xl text-midnight/60 font-light leading-relaxed max-w-2xl">
          Teknisk hygienbehandling för hotell, skolor, förskolor, gym, sommarstugor, toaletter med hög användningsgrad och marin miljö.
          Vi använder samma certifierade metoder oavsett miljö — anpassat efter varje uppdrag och verksamhetens förutsättningar.
        </p>
      </motion.div>

      {/* ── Tree ── */}
      <motion.div className="mb-20" {...fadeUp(0.1)}>
        <div className="flex justify-center mb-0">
          <div className="w-full max-w-3xl bg-midnight rounded-2xl px-8 py-8">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-accent mb-4 text-center">
              Vad vi gör — alltid
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {PROCESS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="text-center">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-4 h-4 text-cyan-accent" />
                  </div>
                  <p className="text-white text-xs font-bold mb-1">{title}</p>
                  <p className="text-white/45 text-xs font-light leading-snug">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Segments */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SEGMENTS.map(({ icon: Icon, title, tag, body }, i) => (
            <motion.div
              key={title}
              className="flex flex-col bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-cyan-accent/30 transition-all"
              {...fadeUp(0.2 + i * 0.07)}
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
              <p className="text-midnight/60 font-light text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── CTA ── */}
      <motion.div
        className="bg-midnight rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        {...fadeUp(0.35)}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Boka en teknisk bedömning
          </h2>
          <p className="text-white/50 font-light leading-relaxed mb-6">
            Vi tittar på lokalen, verksamheten och behovet — och föreslår
            en insats anpassad efter era förutsättningar. Ingen bindning.
          </p>

          <ul className="space-y-2">
            {[
              "Hotell, Airbnb, sommarstugor och uthyrningsboenden",
              "Skolor, förskolor, gym och LSS-boenden",
              "Sommarstugor och vilohem",
              "Båtar, fartyg, färjor och marin miljö",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                <span className="text-white/60 font-light text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-white/40 text-sm font-medium mb-6">
            Kontakta oss för en första bedömning
          </p>

          <a
            href="tel:0101234567"
            className="flex items-center justify-center gap-3 bg-cyan-accent text-white px-10 py-4 rounded-full font-bold hover:bg-cyan-accent/90 transition-all w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            010-XXX XX XX
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
