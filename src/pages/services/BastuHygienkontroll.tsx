import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Wind } from "lucide-react";

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
        <title>Bastu – teknisk hygienbehandling</title>
      </Helmet>

      {/* HERO (con bloque visual) */}
      <motion.div {...fadeUp(0)}>
        <div className="flex items-center gap-2 text-cyan-accent mb-6">
          <Wind className="w-5 h-5" />
          <span className="uppercase text-sm font-bold tracking-widest">
            Bastu & wellness
          </span>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 md:p-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-midnight leading-tight mb-6 max-w-3xl">
            Bastuhygien på en teknisk nivå
          </h1>

          <p className="text-lg md:text-xl text-midnight/60 font-light leading-relaxed max-w-2xl">
            En bastu utsätts dagligen för värme, fukt och kontakt med träytor.
            Det skapar en miljö där hygienpåverkan byggs upp över tid.
          </p>
        </div>
      </motion.div>

      {/* PROBLEM BOXES */}
      <motion.div {...fadeUp(0.1)} className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-8">
          Utmaningen
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Bastun kan se ren ut men vara hygieniskt instabil",
            "Biofilm fastnar i porösa träytor",
            "Fukt driver kontinuerlig mikrobiell aktivitet",
            "Kontaktpunkter återkontamineras snabbt"
          ].map((item) => (
            <div
              key={item}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-midnight/70 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* PROCESS SECTION (midnight blocks) */}
      <motion.div {...fadeUp(0.2)} className="mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-8">
          Behandling
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Termisk behandling av träytor",
            "Mekanisk rengöring av kontaktzoner",
            "Djup behandling av fuktutsatta ytor",
            "Anpassad hygieninsats för bastumiljö"
          ].map((item) => (
            <div className="bg-midnight text-white rounded-2xl p-6">
              <p className="text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RESULTS (soft cards) */}
      <motion.div {...fadeUp(0.3)} className="mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-8">
          Resultat
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Minskad lukt i rummet",
            "Renare kontaktpunkter",
            "Förbättrad hygienkänsla",
            "Längre hållbar renhet mellan behandlingar"
          ].map((item) => (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <p className="text-midnight/70">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AREAS */}
      <motion.div {...fadeUp(0.4)} className="mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-8">
          Användningsområden
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Gym",
            "Spa",
            "Hotell",
            "Privata bastur"
          ].map((item) => (
            <div className="border border-slate-200 rounded-xl p-4 text-center">
              <p className="text-midnight/70 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA (strong block) */}
      <motion.div
        {...fadeUp(0.5)}
        className="mt-24 bg-midnight text-white rounded-3xl p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vill du ha en bastu som verkligen är hygieniskt kontrollerad?
        </h2>

        <p className="text-white/60 mb-8 max-w-xl mx-auto">
          Vi behandlar inte ytan — vi behandlar miljön.
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
