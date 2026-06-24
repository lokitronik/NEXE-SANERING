import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Wind,
  ShieldAlert,
  Sparkles,
  CheckCircle,
  MapPin,
  Phone,
  FileCheck,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BastuHygienkontroll() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Bastuhygien – Teknisk mikrobiell kontroll</title>
        <meta
          name="description"
          content="Avancerad bastuhygien med teknisk desinfektion, ATP-verifiering och borttagning av biofilm i kommersiella miljöer."
        />
      </Helmet>

      {/* HERO */}
      <motion.section variants={fadeUpVariants} className="mb-16">
        <div className="flex items-center gap-2 text-cyan-accent mb-5">
          <Wind className="w-5 h-5" />
          <span className="uppercase text-sm font-bold tracking-widest">
            Teknisk Hygienkontroll
          </span>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-14">
          <h1 className="text-4xl md:text-6xl font-bold text-midnight leading-tight mb-6 max-w-4xl">
            Bastuhygien på mikrobiologisk nivå
          </h1>

          <p className="text-lg md:text-xl text-midnight/70 max-w-3xl leading-relaxed">
            Bastumiljöer är inte bara varma utrymmen. De är biologiska system där
            fukt, värme och organiskt material skapar en stabil miljö för
            biofilm, bakterier och svampsporer som inte försvinner med vanlig städning.
          </p>
        </div>
      </motion.section>

      {/* INSIGHT BLOCK */}
      <motion.section variants={fadeUpVariants} className="mb-20">
        <div className="bg-cyan-accent/5 border border-cyan-accent/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-4">
            Problemet som inte syns
          </h2>
          <p className="text-midnight/70 leading-relaxed max-w-3xl">
            De flesta bastur ser rena ut, men i verkligheten finns mikrobiella
            beläggningar djupt i träets porer. Dessa skapar lukt, återkommande
            kontaminering och en gradvis försämring av hygiennivån över tid.
          </p>
        </div>
      </motion.section>

      {/* PROBLEM */}
      <motion.section variants={fadeUpVariants} className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <ShieldAlert className="w-6 h-6 text-amber-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-midnight">
            Mikrobiella riskfaktorer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Biofilm i trästrukturer",
              desc: "Organiskt material tränger in i träets porer och skapar en skyddad miljö för bakterier."
            },
            {
              title: "Svampsporer i fuktzoner",
              desc: "Låg värmeexponering i golv och nedre lavar gör att sporer överlever och sprids."
            },
            {
              title: "Värmetoleranta bakterier",
              desc: "Mikroorganismer anpassar sig till värme och överlever normala bastucykler."
            },
            {
              title: "Ackumulerad luktbelastning",
              desc: "Lukt uppstår från biologisk nedbrytning i materialet, inte bara ytan."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-midnight mb-2">{item.title}</h3>
              <p className="text-sm text-midnight/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* METHOD */}
      <motion.section variants={fadeUpVariants} className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-cyan-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-midnight">
            Teknisk desinfektionsprocess
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "ATP-verifiering",
              desc: "Mätning av biologisk aktivitet före och efter behandling för objektiv hygienkontroll."
            },
            {
              title: "Termisk djupbehandling",
              desc: "Kontrollerad värme som penetrerar material utan att skada trästrukturen."
            },
            {
              title: "Mikrobiell nedbrytning",
              desc: "Desinfektion som bryter biofilm på biologisk nivå, inte bara ytmässigt."
            },
            {
              title: "Mekanisk precisionrengöring",
              desc: "Riktad rengöring av kontaktytor och dolda mikrozoner."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-midnight text-white rounded-2xl p-6"
            >
              <h3 className="text-cyan-accent font-bold mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* RESULTS */}
      <motion.section variants={fadeUpVariants} className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <CheckCircle className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-midnight">
            Mätbara resultat
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Reducerad mikrobiell belastning",
              desc: "Signifikant minskning av bakterier och svamp på testnivå."
            },
            {
              title: "Neutral luktprofil",
              desc: "Eliminering av biologiskt orsakad lukt i material och luft."
            },
            {
              title: "Förlängd materiallivslängd",
              desc: "Minskad nedbrytning av trä genom kontroll av fukt och biofilm."
            },
            {
              title: "Stabil hygiennivå",
              desc: "Dokumenterad och reproducerbar hygienstandard över tid."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
            >
              <h3 className="font-bold text-midnight mb-2">{item.title}</h3>
              <p className="text-sm text-midnight/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATION */}
      <motion.section variants={fadeUpVariants} className="mb-20">
        <div className="bg-cyan-accent/5 border border-cyan-accent/20 rounded-3xl p-8 md:p-10 flex gap-4">
          <FileCheck className="w-8 h-8 text-cyan-accent shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-midnight mb-2">
              Dokumenterad hygienkontroll
            </h3>
            <p className="text-midnight/70 leading-relaxed">
              Alla insatser kan kompletteras med ATP-protokoll och teknisk
              dokumentation för intern kontroll och myndighetskrav.
            </p>
          </div>
        </div>
      </motion.section>

      {/* AREAS */}
      <motion.section variants={fadeUpVariants} className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <MapPin className="w-6 h-6 text-slate-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-midnight">
            Användningsområden
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Gym & träningsanläggningar",
            "Spa & wellness",
            "Hotell & resort",
            "Privata premiumbastur"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-4 text-center"
            >
              <p className="text-sm font-semibold text-midnight/80">{item}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUpVariants}
        className="bg-midnight text-white rounded-3xl p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Säkra din hygiennivå
        </h2>

        <p className="text-white/60 mb-8 max-w-2xl mx-auto">
          Professionell bastuhygien med teknisk verifiering och dokumenterad process.
        </p>

        <a
          href="tel:0101234567"
          className="inline-flex items-center gap-2 bg-cyan-accent text-white px-10 py-4 rounded-full font-bold"
        >
          <Phone className="w-5 h-5" />
          Kontakta oss
        </a>
      </motion.section>
    </motion.div>
  );
}
