import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Wind } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
};

export default function BastuHygienkontroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <Helmet>
        <title>Bastu – teknisk hygienbehandling</title>
      </Helmet>

      {/* HERO */}
      <motion.section
        {...fade}
        className="max-w-6xl mx-auto px-6 md:px-16 pt-28 pb-24"
      >
        <div className="flex items-center gap-2 text-cyan-accent mb-6">
          <Wind className="w-5 h-5" />
          <span className="uppercase tracking-[0.3em] text-xs font-semibold">
            Bastu & wellness
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-midnight leading-[1.05] max-w-4xl">
          Teknisk hygienbehandling för bastu- och wellnessmiljöer
        </h1>

        <p className="mt-10 text-xl text-midnight/60 max-w-2xl leading-relaxed">
          Vi arbetar där traditionell städning slutar: i materialets struktur,
          inte på ytan.
        </p>
      </motion.section>

      {/* PROBLEM */}
      <motion.section {...fade} className="bg-slate-50 py-28 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-midnight mb-12">
            Problemet
          </h2>

          <div className="space-y-8 text-midnight/70 text-lg leading-relaxed">
            <p>
              De flesta bastu- och wellnessmiljöer är inte hygieniskt
              kontrollerade – de är bara visuellt rena.
            </p>

            <p>
              Biofilm etableras i porösa träytor, fukt driver mikrobiell
              tillväxt och kontaktzoner återkontamineras snabbt.
            </p>

            <p className="font-medium text-midnight">
              Standardstädning adresserar endast ytan – inte orsaken.
            </p>
          </div>
        </div>
      </motion.section>

      {/* MISCONCEPTION */}
      <motion.section {...fade} className="py-28 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-midnight mb-12">
            Vanligt fel i branschen
          </h2>

          <div className="space-y-8 text-midnight/70 text-lg">
            <p>
              Antagandet att bastu kan hanteras med vanlig städning är fel
              från grunden.
            </p>

            <p>Ytan behandlas istället för orsaken i materialet.</p>

            <p>Fuktens påverkan på trä och biofilm underskattas systematiskt.</p>

            <p className="font-medium text-midnight">
              Resultatet blir alltid återkommande problem.
            </p>
          </div>
        </div>
      </motion.section>

      {/* SOLUTION */}
      <motion.section
        {...fade}
        className="bg-midnight text-white py-28 px-6 md:px-16"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-10">
            Teknisk hygienbehandling
          </h2>

          <div className="space-y-8 text-white/80 text-lg leading-relaxed">
            <p>
              Vi arbetar inte med rengöring. Vi arbetar med kontroll av
              biologisk belastning i material utsatta för värme och fukt.
            </p>

            <div className="space-y-4 mt-10">
              <p>Termisk påverkan för att bryta biologiska strukturer</p>
              <p>Mekanisk extraktion av organisk beläggning</p>
              <p>Riktad hygienkontroll av kontaktzoner</p>
            </div>

            <p className="mt-10 text-white/70">
              Målet är inte visuell renhet – utan stabil hygiennivå över tid.
            </p>
          </div>
        </div>
      </motion.section>

      {/* SERVICE */}
      <motion.section {...fade} className="py-28 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-midnight mb-12">
            Teknisk hygienbehandling av bastu
          </h2>

          <div className="space-y-8 text-midnight/70 text-lg leading-relaxed">
            <p>
              Bastu är en av de mest komplexa hygienmiljöerna där värme, fukt
              och trä samverkar kontinuerligt.
            </p>

            <p>
              Traditionella metoder misslyckas eftersom de inte når
              materialnivån där problemet uppstår.
            </p>

            <div className="mt-10 space-y-4">
              <p>• Kartläggning av belastningszoner</p>
              <p>• Termisk behandling av trästrukturer</p>
              <p>• Mekanisk behandling av kontaktpunkter</p>
              <p>• Djup hygienkontroll av golv och dränering</p>
              <p>• Verifiering vid behov</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* RESULTS */}
      <motion.section
        {...fade}
        className="bg-slate-50 py-28 px-6 md:px-16"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-midnight mb-12">
            Resultat
          </h2>

          <div className="space-y-6 text-midnight/70 text-lg">
            <p>Reducerad lukt vid källan</p>
            <p>Stabil hygiennivå i materialet</p>
            <p>Minskad återkontaminering</p>
            <p>Förbättrad upplevd miljökvalitet</p>
          </div>

          <p className="mt-10 font-medium text-midnight">
            Effekten är strukturell, inte kosmetisk.
          </p>
        </div>
      </motion.section>

      {/* AUDIENCE */}
      <motion.section {...fade} className="py-28 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-midnight mb-12">
            För vem detta är
          </h2>

          <div className="space-y-6 text-midnight/70 text-lg">
            <p>Gym och träningsanläggningar</p>
            <p>Spa och wellnessmiljöer</p>
            <p>Hotell och resort</p>
            <p>Bastu- och fuktutrymmen</p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...fade}
        className="bg-cyan-accent text-white py-28 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light">
            Behöver du en bastu med kontrollerad hygiennivå?
          </h2>

          <a
            href="tel:0101234567"
            className="inline-block mt-12 bg-white text-midnight px-10 py-5 rounded-full font-medium"
          >
            Kontakta oss
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}
