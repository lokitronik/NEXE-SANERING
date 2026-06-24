import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Wind, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
};

export default function Bastu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-28"
    >
      <Helmet>
        <title>Bastu hygien</title>
      </Helmet>

      {/* HERO — CLEAN EDITORIAL */}
      <motion.section {...fade} className="max-w-4xl">
        <div className="flex items-center gap-2 text-cyan-accent mb-4">
          <Wind className="w-5 h-5" />
          <span className="uppercase text-xs tracking-widest font-bold">
            Bastu & wellness
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-midnight leading-tight">
          Teknisk hygien för bastu- och wellnessmiljöer
        </h1>

        <p className="mt-6 text-lg text-midnight/60 max-w-2xl">
          Djupgående behandling av träytor och fuktutsatta miljöer där
          standardstädning inte räcker.
        </p>
      </motion.section>

      {/* SPLIT SECTION — PROBLEM */}
      <motion.section
        {...fade}
        className="mt-24 grid md:grid-cols-2 gap-12 items-start"
      >
        <div>
          <h2 className="text-3xl font-bold text-midnight mb-6">
            Problemet
          </h2>

          <div className="space-y-6 text-midnight/70">
            <p>Biofilm utvecklas i porösa träytor</p>
            <p>Lukt fastnar i fuktiga miljöer</p>
            <p>Kontaktytor återkontamineras snabbt</p>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-3xl">
          <AlertTriangle className="text-cyan-accent mb-4" />
          <p className="text-midnight/70 leading-relaxed">
            Standardstädning tar endast bort det synliga.
            Problemen ligger djupt i material och struktur.
          </p>
        </div>
      </motion.section>

      {/* DARK FEATURE BLOCK — SOLUTION */}
      <motion.section
        {...fade}
        className="mt-24 bg-midnight text-white rounded-[2.5rem] p-14"
      >
        <h2 className="text-3xl font-bold mb-6">
          Teknisk hygienbehandling
        </h2>

        <p className="text-white/70 max-w-2xl mb-10">
          Vi arbetar på materialnivå, inte ytnivå.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-white/80">
          <p>• Termisk behandling (ånga)</p>
          <p>• Mekanisk borttagning av beläggning</p>
          <p>• Riktad hygienbehandling</p>
          <p>• Verifiering vid behov</p>
        </div>
      </motion.section>

      {/* FULL WIDTH AREA BLOCK — CLEAN GRID */}
      <motion.section {...fade} className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-midnight">
          Användningsområden
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Gym",
            "Spa",
            "Bastu",
            "Hotell",
            "Omklädning",
            "Fuktmiljöer",
          ].map((x) => (
            <div
              key={x}
              className="border border-midnight/10 rounded-2xl p-5 hover:shadow-sm transition"
            >
              {x}
            </div>
          ))}
        </div>
      </motion.section>

      {/* SERVICE DEEP FOCUS — NO CARDS */}
      <motion.section
        {...fade}
        className="mt-24 border-t pt-20 max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-6">
          Bastuhygien som teknisk tjänst
        </h2>

        <p className="text-midnight/60 leading-relaxed">
          En bastu är en av de mest krävande hygienmiljöerna.
          Kombinationen av värme, fukt och organiskt material kräver
          metodisk behandling på djup nivå.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold mb-2">Process</h3>
            <p className="text-midnight/60">
              Inspektion → behandling → rengöring → kontroll
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Resultat</h3>
            <p className="text-midnight/60">
              Stabil hygiennivå och förbättrad miljökvalitet
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA — BIG AND CLEAN */}
      <motion.section
        {...fade}
        className="mt-28 text-center"
      >
        <div className="bg-cyan-accent text-white rounded-[2.5rem] p-14">
          <h2 className="text-3xl font-bold mb-4">
            Behöver du bastuhygien?
          </h2>

          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            För professionella miljöer där hygienstandard är avgörande.
          </p>

          <a
            href="tel:0101234567"
            className="bg-white text-midnight px-8 py-4 rounded-full font-bold inline-block"
          >
            Kontakta oss
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}
