import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Wind,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
};

export default function BastuHygienkontroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 md:py-24 px-4 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Bastu – teknisk hygienbehandling</title>
      </Helmet>

      {/* HERO */}
      <motion.section {...fade}>
        <div className="flex items-center gap-2 text-cyan-accent mb-4">
          <Wind className="w-5 h-5" />
          <span className="uppercase text-xs tracking-widest font-bold">
            Bastu & wellness
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-midnight max-w-4xl">
          Hygien i bastumiljöer kräver teknisk precision
        </h1>

        <p className="mt-5 text-midnight/60 max-w-2xl text-lg">
          Porösa träytor och fuktiga miljöer skapar hygienproblem som inte
          syns – men som påverkar upplevelse och standard.
        </p>
      </motion.section>

      {/* PROBLEM – IMPACT BLOCK */}
      <motion.section {...fade} className="mt-20">
        <h2 className="text-3xl font-bold text-midnight mb-8">
          Vad som faktiskt händer i en bastu
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Biofilm byggs upp i träytor",
            "Lukt fastnar i fuktiga zoner",
            "Kontaktytor blir snabbt kontaminerade",
          ].map((t) => (
            <div className="bg-slate-50 p-6 rounded-3xl" key={t}>
              <div className="w-2 h-2 bg-cyan-accent rounded-full mb-4" />
              {t}
            </div>
          ))}
        </div>

        <p className="mt-6 font-bold text-midnight">
          Standardstädning adresserar inte orsaken.
        </p>
      </motion.section>

      {/* SOLUTION – PHILOSOPHY */}
      <motion.section
        {...fade}
        className="mt-20 bg-midnight text-white p-12 rounded-3xl"
      >
        <h2 className="text-3xl font-bold mb-6">
          Teknisk hygienbehandling
        </h2>

        <p className="text-white/70 max-w-2xl mb-10">
          Vi arbetar inte med ytrengöring. Vi arbetar med hygiennivåer i
          material, kontaktzoner och fuktpåverkade strukturer.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-white/80">
          <div>• Termisk behandling (ånga)</div>
          <div>• Mekanisk borttagning av beläggning</div>
          <div>• Riktad ythygien</div>
          <div>• Verifiering vid behov</div>
        </div>
      </motion.section>

      {/* AREAS */}
      <motion.section {...fade} className="mt-20">
        <h2 className="text-3xl font-bold text-midnight mb-8">
          Miljöer där detta behövs
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Gym",
            "Spa",
            "Bastu",
            "Hotell",
            "Omklädning",
            "Fuktutrymmen",
          ].map((a) => (
            <span
              key={a}
              className="px-4 py-2 bg-slate-50 rounded-full text-midnight/70"
            >
              {a}
            </span>
          ))}
        </div>
      </motion.section>

      {/* SERVICE FOCUS */}
      <motion.section
        {...fade}
        className="mt-20 border-t pt-16"
      >
        <h2 className="text-3xl font-bold text-midnight mb-6">
          Bastuhygien som teknisk tjänst
        </h2>

        <p className="text-midnight/60 max-w-2xl mb-10">
          En bastu är en av de mest krävande hygienmiljöerna: värme,
          fukt och organiskt material i konstant kombination.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">Process</h3>
            <p className="text-midnight/60">
              Inspektion → behandling → djup rengöring → kontroll
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Resultat</h3>
            <p className="text-midnight/60">
              Stabil hygiennivå, minskad lukt, förbättrad känsla
            </p>
          </div>
        </div>
      </motion.section>

      {/* WHY US – MANIFEST */}
      <motion.section
        {...fade}
        className="mt-20 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-midnight mb-6">
          Varför oss
        </h2>

        <div className="space-y-4 text-midnight/70">
          <p>Teknisk hygien, inte kosmetisk städning</p>
          <p>Fokus på material och mikrobelastning</p>
          <p>Metodbaserad kvalitet, inte subjektiv känsla</p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...fade}
        className="mt-20 bg-cyan-accent text-white p-12 rounded-3xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Behöver du bastuhygienbehandling?
        </h2>

        <a
          href="tel:0101234567"
          className="bg-white text-midnight px-8 py-4 rounded-full font-bold inline-block"
        >
          Kontakta oss
        </a>
      </motion.section>
    </motion.div>
  );
}
