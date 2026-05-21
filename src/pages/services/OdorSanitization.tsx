import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Wind, Zap, Droplets, AlertTriangle, Phone, ChevronRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay },
});

const METHODS = [
  {
    icon: Zap,
    title: "Ozonbehandling",
    tag: "Aktiv oxidation",
    body: "Industriella ozongeneratorer producerar O₃ som tränger in i porösa material — textilier, gips, trä — och bryter ner luktkällorna på molekylär nivå. Effektivt mot starka organiska lukter, biologiska rester och mögel.",
    note: "Lokalen måste vara utrymmd under behandlingen.",
  },
  {
    icon: Wind,
    title: "Hydroxylbehandling",
    tag: "Skonsam luftrening",
    body: "Hydroxylgeneratorn (TITAN 4000) producerar hydroxylradikaler — samma mekanism som solens naturliga luftrening. Kan användas i bebodda utrymmen och är lämplig för hotell, Airbnb och kontor med pågående verksamhet.",
    note: "Ingen evakuering krävs. Säkert för textilier och elektronik.",
  },
  {
    icon: Droplets,
    title: "Thermal Fogging",
    tag: "Penetrerande dimning",
    body: "En fin, varm dimma av luktneutraliserande medel sprids i lokalen och når in i samma springor och porösa ytor där lukten har trängt in. Särskilt effektivt mot brandlukt, tobaksrök och kraftiga kemikalielukt.",
    note: "Kombineras ofta med ozon för maximal effekt.",
  },
];

const CASES = [
  "Brandskador och intensiv rökutveckling",
  "Obevakade dödsfall och biologiskt förfall",
  "Tobaksrök och nikotinbeläggning",
  "Extrema fall av djurhållning eller Diogenes-syndrom",
  "Fukt, mögel och källarlukt",
  "Stängda sommarstugor och outhyrda lokaler",
  "Matrester, avfall och organisk kontaminering",
  "Utrymmen med kvarstående lukt efter städning",
];

const PROCESS = [
  {
    step: "01",
    title: "Teknisk bedömning på plats",
    body: "Vi identifierar luktkällan, bedömer material och ventilation och väljer rätt metod. Ingen schablonlösning.",
  },
  {
    step: "02",
    title: "Behandling med rätt teknik",
    body: "Ozon, hydroxyl, thermal fogging — eller en kombination. Alltid med säkerhetsprotokoll och dokumentation.",
  },
  {
    step: "03",
    title: "Ventilation och verifiering",
    body: "Kontrollerad ventilation efter behandlingen. Vi återvänder inte förrän resultatet är verifierbart.",
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
        <title>Luktsanering | Prio Sanering AB — Ozon, Hydroxyl & Thermal Fogging</title>
        <meta
          name="description"
          content="Professionell luktsanering med ozon, hydroxyl och thermal fogging. Vi eliminerar lukter efter brand, dödsfall, mögel och djur på molekylär nivå. Stockholm."
        />
        <meta
          name="keywords"
          content="luktsanering, ozonsanering, hydroxylbehandling, thermal fogging, ta bort röklukt, sanera mögellukt, luktneutralisering Stockholm"
        />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.div className="mb-24" {...fadeUp(0)}>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-accent uppercase tracking-widest mb-6">
          <Wind className="w-4 h-4" />
          <span>Luktsanering</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight leading-tight mb-6 max-w-3xl">
          Vi tar bort lukten —<br />
          <span className="text-cyan-accent">inte maskar den</span>
        </h1>
        <p className="text-xl text-midnight/60 font-light leading-relaxed max-w-2xl">
          Professionell luktsanering med ozon, hydroxyl och thermal fogging. Vi identifierar
          källan, väljer rätt teknik och verifierar resultatet — alltid med förhandsbedömning
          och säkerhetsprotokoll.
        </p>
      </motion.div>

      {/* ── Methods ──────────────────────────────────────────────────────── */}
      <motion.div className="mb-24" {...fadeUp(0.1)}>
        <h2 className="text-3xl font-bold text-midnight mb-12">Tekniska metoder</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METHODS.map(({ icon: Icon, title, tag, body, note }, i) => (
            <motion.div
              key={title}
              className="flex flex-col bg-slate-50 rounded-2xl p-8 border border-slate-100"
              {...fadeUp(0.1 + i * 0.08)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-cyan-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">
                  {tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-midnight mb-3">{title}</h3>
              <p className="text-midnight/65 font-light leading-relaxed flex-1">{body}</p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs text-midnight/45 font-medium leading-snug">{note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── When + Process ───────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

        {/* When */}
        <motion.div {...fadeUp(0.2)}>
          <h2 className="text-3xl font-bold text-midnight mb-8">
            När behövs luktsanering?
          </h2>
          <ul className="space-y-3">
            {CASES.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-1" />
                <span className="text-midnight/70 font-light">{c}</span>
              </li>
            ))}
          </ul>

          {/* Note on ozone safety */}
          <div className="mt-8 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 font-light leading-relaxed">
              <strong className="font-semibold">Ozon:</strong> kräver att lokalen är utrymmd
              under behandlingen. Vi informerar alltid om säkerhetsrutiner innan start och
              bekräftar reentradstid skriftligt.
            </p>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div {...fadeUp(0.25)}>
          <h2 className="text-3xl font-bold text-midnight mb-8">Så arbetar vi</h2>
          <div className="space-y-6">
            {PROCESS.map(({ step, title, body }) => (
              <div key={step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-midnight flex items-center justify-center">
                  <span className="text-xs font-bold text-cyan-accent">{step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-midnight mb-1">{title}</h3>
                  <p className="text-midnight/65 font-light leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-midnight rounded-2xl p-8">
            <p className="text-white/60 text-sm font-medium mb-2">
              Lukten sitter kvar efter städning?
            </p>
            <p className="text-white font-bold text-xl mb-6">
              Boka en teknisk bedömning
            </p>
            <p className="text-white/50 text-sm font-light mb-6 leading-relaxed">
              Vi bedömer platsen, väljer metod och ger ett fast pris innan vi börjar.
              Ingen bindning vid bedömningen.
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
