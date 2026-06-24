import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Wind } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay },
});

const PROBLEM = [
  "Bastun kan se ren ut men ändå bära på osynlig hygienpåverkan",
  "Fukt och värme skapar naturliga förutsättningar för beläggningar i träytor",
  "Kontaktpunkter som bänkar och ryggstöd påverkas snabbast",
  "Lukt kan uppstå trots regelbunden städning",
];

const PROCESS = [
  "Termisk behandling av träytor",
  "Mekanisk rengöring av kontaktpunkter",
  "Djup behandling av golv och fuktutsatta zoner",
  "Anpassad hygienbehandling för bastumiljö",
];

const RESULTS = [
  "Fräschare och mer neutral miljö",
  "Minskad lukt i utrymmet",
  "Renare kontaktpunkter",
  "Förbättrad känsla av hygien",
  "Längre hållbar renhet mellan behandlingar",
];

const AREAS = [
  "Gym och träningsanläggningar",
  "Spa och wellness",
  "Hotell och resort",
  "Privata bastur och relaxutrymmen",
];

export default function BastuHygienkontroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Bastu – teknisk hygienbehandling</title>
      </Helmet>

      {/* HERO */}
      <motion.div {...fadeUp(0)}>
        <div className="flex items-center gap-2 text-cyan-accent mb-6">
          <Wind className="w-5 h-5" />
          <span className="uppercase text-sm font-bold tracking-widest">
            Bastu & wellness
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-midnight leading-tight mb-6 max-w-3xl">
          Bastuhygien på en teknisk nivå
        </h1>

        <p className="text-lg md:text-xl text-midnight/60 font-light leading-relaxed max-w-2xl">
          En bastu utsätts dagligen för värme, fukt och direkt kontakt med träytor.
          Det skapar en miljö där hygienpåverkan byggs upp över tid – även vid regelbunden städning.
        </p>
      </motion.div>

      {/* PROBLEM */}
      <motion.div {...fadeUp(0.1)} className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-8">
          Utmaningen
        </h2>

        <div className="space-y-5 text-midnight/70 text-lg leading-relaxed">
          {PROBLEM.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </motion.div>

      {/* PROCESS */}
      <motion.div {...fadeUp(0.2)} className="mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-8">
          Behandlingen
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-midnight/70 text-lg">
          {PROCESS.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </motion.div>

      {/* RESULT */}
      <motion.div {...fadeUp(0.3)} className="mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-8">
          Resultat
        </h2>

        <div className="space-y-4 text-midnight/70 text-lg">
          {RESULTS.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </motion.div>

      {/* AREAS */}
      <motion.div {...fadeUp(0.4)} className="mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-8">
          Användningsområden
        </h2>

        <div className="space-y-4 text-midnight/70 text-lg">
          {AREAS.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        {...fadeUp(0.5)}
        className="mt-24 bg-midnight text-white p-10 rounded-2xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vill du förbättra hygienen i din bastu?
        </h2>

        <p className="text-white/60 mb-8 max-w-xl mx-auto">
          Vi anpassar behandlingen efter din miljö och användning.
        </p>

        <a
          href="tel:0101234567"
          className="inline-block bg-cyan-accent text-white px-10 py-4 rounded-full font-bold"
        >
          Kontakta oss
        </a>
      </motion.div>
    </motion.div>
  );
}
