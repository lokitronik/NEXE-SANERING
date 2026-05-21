import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Wind, Zap, Phone, ChevronRight, AlertTriangle } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay },
});

const METHODS = [
  {
    icon: Wind,
    title: "Hydroxylbehandling",
    tag: "Primär metod",
    tagColor: "bg-cyan-accent/10 text-cyan-accent",
    body:
      "Hydroxylgeneratorn producerar hydroxylradikaler — samma mekanism som solens naturliga luftrening. Behandlar lukt i luft, textilier och ytor utan att utrymma lokalen. Lämplig för bostäder, hotell, Airbnb, sommarstugor och kontor med pågående verksamhet.",
    note: "Ingen evakuering krävs. Säkert för textilier, elektronik och husdjur.",
    primary: true,
  },
  {
    icon: Zap,
    title: "Ozonbehandling",
    tag: "Svåra fall",
    tagColor: "bg-amber-100 text-amber-700",
    body:
      "Ozon är en kraftfull oxidant som bryter ner luktkällor på molekylär nivå och når in i porösa material — gips, trä, textilier. Används när hydroxyl inte är tillräckligt: kraftig brandlukt, biologiska rester efter dödsfall, eller djup organisk kontaminering.",
    note: "Kräver utrymning. Alltid med säkerhetsprotokoll och bekräftad reentradstid.",
    primary: false,
  },
];

const CASES_HYDROXYL = [
  "Stängda sommarstugor och outhyrda lägenheter",
  "Hotelrum och Airbnb med kvarstående lukt",
  "Fukt och instängt luft i källare eller kontor",
  "Lukt efter intensiv husdjurshållning (ej extremfall)",
  "Kvarstående olukt efter städning eller renovering",
  "Förebyggande luftbehandling inför uthyrning",
];

const CASES_OZONE = [
  "Brand och intensiv rökutveckling",
  "Obevakade dödsfall och biologiskt förfall",
  "Diogenes-sanering med kraftig organisk kontaminering",
  "Tobaksrök med djup inlagring i väggar och tak",
  "Extrema fall av djurhållning",
];

const PROCESS = [
  {
    step: "01",
    title: "Bedömning på plats",
    body: "Vi identifierar luktkällan, bedömer material och ventilation och väljer rätt metod. Hydroxyl i första hand — ozon när situationen kräver det.",
  },
  {
    step: "02",
    title: "Behandling med protokoll",
    body: "Alltid med säkerhetsrutiner, dokumentation och tydlig information om reentrad om ozon används.",
  },
  {
    step: "03",
    title: "Ventilation och verifiering",
    body: "Kontrollerad ventilation efter behandlingen. Vi bekräftar resultatet innan uppdraget stängs.",
  },
];

export default function OdorSanitization() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Luktsanering | Prio Sanering AB — Hydroxyl & Ozon</title>
        <meta
          name="description"
          content="Professionell luktsanering med hydroxylgenerator (TITAN 4000) och ozon. Hydroxyl för vardagliga fall utan evakuering — ozon för de svåraste situationerna. Stockholm."
        />
        <meta
          name="keywords"
          content="luktsanering, hydroxylbehandling, ozonsanering, ta bort röklukt, sanera mögellukt, luktneutralisering Stockholm, TITAN 4000"
        />
      </Helmet>

      {/* ── Hero ── */}
      <motion.div className="mb-24" {...fadeUp(0)}>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-accent uppercase tracking-widest mb-6">
          <Wind className="w-4 h-4" />
          <span>Luktsanering</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight leading-tight mb-6 max-w-3xl">
          Rätt teknik för<br />
          <span className="text-cyan-accent">varje luktsituation</span>
        </h1>
        <p className="text-xl text-midnight/60 font-light leading-relaxed max-w-2xl">
          Vi maskerar inte lukter — vi eliminerar källan. Med hydroxylgenerator som primärt
          verktyg och ozon som komplement vid svåra fall väljer vi alltid den metod som
          passar situationen, inte den enklaste.
        </p>
      </motion.div>

      {/* ── Methods ── */}
      <motion.div className="mb-24" {...fadeUp(0.1)}>
        <h2 className="text-3xl font-bold text-midnight mb-4">Tekniska metoder</h2>
        <p className="text-midnight/55 font-light mb-10 max-w-xl">
          Hydroxyl är vår primära metod — skonsam och effektiv utan evakuering. Ozon
          reserveras för de fall där det verkligen krävs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {METHODS.map(({ icon: Icon, title, tag, tagColor, body, note, primary }, i) => (
            <motion.div
              key={title}
              className={`flex flex-col rounded-2xl p-8 border ${
                primary
                  ? "bg-midnight text-white border-midnight"
                  : "bg-slate-50 text-midnight border-slate-100"
              }`}
              {...fadeUp(0.1 + i * 0.08)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${primary ? "bg-white/10" : "bg-cyan-accent/10"}`}>
                  <Icon className={`w-5 h-5 ${primary ? "text-cyan-accent" : "text-amber-500"}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${tagColor}`}>
                  {tag}
                </span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${primary ? "text-white" : "text-midnight"}`}>
                {title}
              </h3>
              <p className={`font-light leading-relaxed flex-1 ${primary ? "text-white/70" : "text-midnight/65"}`}>
                {body}
              </p>
              <div className={`mt-6 pt-6 border-t ${primary ? "border-white/10" : "border-slate-200"}`}>
                <p className={`text-xs font-medium leading-snug ${primary ? "text-cyan-accent" : "text-amber-600"}`}>
                  {note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Cases + Process ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

        {/* Cases */}
        <motion.div {...fadeUp(0.2)}>
          <h2 className="text-3xl font-bold text-midnight mb-8">Vanliga fall</h2>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Wind className="w-4 h-4 text-cyan-accent" />
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-accent">
                Hydroxyl — utan evakuering
              </span>
            </div>
            <ul className="space-y-2.5">
              {CASES_HYDROXYL.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <span className="text-midnight/70 font-light text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Ozon — svåra och extrema fall
              </span>
            </div>
            <ul className="space-y-2.5">
              {CASES_OZONE.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-midnight/70 font-light text-sm">{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 font-light leading-relaxed">
                Ozonbehandling kräver utrymning. Vi informerar alltid om säkerhetsrutiner
                och bekräftar reentradstid skriftligt.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process + CTA */}
        <motion.div {...fadeUp(0.25)}>
          <h2 className="text-3xl font-bold text-midnight mb-8">Så arbetar vi</h2>
          <div className="space-y-6 mb-10">
            {PROCESS.map(({ step, title, body }) => (
              <div key={step} className="flex gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-midnight flex items-center justify-center">
                  <span className="text-xs font-bold text-cyan-accent">{step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-midnight mb-1">{title}</h3>
                  <p className="text-midnight/60 font-light leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-midnight rounded-2xl p-8">
            <p className="text-white/50 text-sm font-medium mb-1">
              Lukten sitter kvar?
            </p>
            <p className="text-white font-bold text-xl mb-4">
              Boka en teknisk bedömning
            </p>
            <p className="text-white/45 text-sm font-light mb-6 leading-relaxed">
              Vi tittar på platsen, väljer rätt metod och ger ett fast pris
              innan vi börjar. Ingen bindning vid bedömningen.
            </p>
            <a
              href="tel:0101234567"
              className="flex items-center justify-center gap-3 bg-cyan-accent text-white py-4 rounded-full font-bold hover:bg-cyan-accent/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              010-XXX XX XX
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
