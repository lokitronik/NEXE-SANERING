import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Wind, ShieldCheck, Sparkles, Droplets, CheckCircle } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay },
});

export default function BastuHygienkontroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Bastu – teknisk hygienbehandling | Prio Sanering AB</title>
        <meta
          name="description"
          content="Specialiserad hygienbehandling av bastu- och wellnessmiljöer med hög värme och fukt. Fokus på träytor och biofilm."
        />
      </Helmet>

      {/* HERO */}
      <motion.div {...fadeUp(0)}>
        <div className="flex items-center gap-2 text-cyan-accent mb-6">
          <Wind className="w-5 h-5" />
          <span className="uppercase text-sm font-bold tracking-widest">
            Bastu & wellness
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
          Bastu – teknisk hygienbehandling
        </h1>

        <p className="text-midnight/60 max-w-2xl">
          Specialiserad hygienbehandling av bastu- och wellnessmiljöer där värme,
          fukt och porösa träytor kräver teknisk metodik.
        </p>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        
        <div className="bg-slate-50 p-6 rounded-3xl">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-accent" />
            Vad behandlas
          </h3>
          <ul className="text-sm text-midnight/70 space-y-2">
            <li>Bastulavar och ryggstöd i trä</li>
            <li>Kontaktzoner med hudkontakt</li>
            <li>Fuktutsatta träytor</li>
            <li>Golvyta och dränering</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-accent" />
            Metod
          </h3>
          <ul className="text-sm text-midnight/70 space-y-2">
            <li>Torrånga för djup rengöring</li>
            <li>Mekanisk borttagning av biofilm</li>
            <li>Ytdesinfektion anpassad för trä</li>
            <li>ATP-verifiering vid behov</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-cyan-accent" />
            Resultat
          </h3>
          <ul className="text-sm text-midnight/70 space-y-2">
            <li>Reducerad lukt och organisk belastning</li>
            <li>Renare kontaktytor</li>
            <li>Förlängd livslängd på trä</li>
            <li>Förbättrad hygienkänsla</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        {...fadeUp(0.2)}
        className="mt-20 bg-midnight text-white p-10 rounded-3xl text-center"
      >
        <h2 className="text-2xl font-bold mb-4">
          Behöver du bastuhygienbehandling?
        </h2>
        <p className="text-white/70 mb-6">
          Perfekt för gym, spa, hotell och wellness-anläggningar.
        </p>

        <a
          href="tel:0101234567"
          className="bg-cyan-accent text-white px-8 py-4 rounded-full font-bold"
        >
          Kontakta oss
        </a>
      </motion.div>
    </motion.div>
  );
}
