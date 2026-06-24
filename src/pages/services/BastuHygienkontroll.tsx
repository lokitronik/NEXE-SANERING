import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Wind,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Thermometer,
  Droplets,
  AlertTriangle,
} from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 35 },
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
        <meta
          name="description"
          content="Teknisk hygienbehandling av bastu- och wellnessmiljöer."
        />
      </Helmet>

      {/* HERO */}
      <motion.section {...fade}>
        <div className="flex items-center gap-2 text-cyan-accent mb-5">
          <Wind className="w-5 h-5" />
          <span className="uppercase text-xs tracking-widest font-bold">
            Bastu & wellness
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-midnight leading-tight max-w-4xl">
          Hygien i bastumiljöer kräver mer än vanlig rengöring
        </h1>

        <p className="mt-5 text-midnight/60 max-w-2xl text-lg">
          Värme, fukt och organiska rester skapar en miljö där traditionell
          städning inte räcker. Vi utför teknisk hygienbehandling som går på
          djupet i träytor och belastade zoner.
        </p>
      </motion.section>

      {/* RISK / PROBLEM BLOCK */}
      <motion.section
        {...fade}
        className="mt-20 bg-midnight text-white p-10 md:p-14 rounded-3xl"
      >
        <div className="flex items-center gap-3 mb-6 text-cyan-accent">
          <AlertTriangle className="w-6 h-6" />
          <span className="uppercase text-xs tracking-widest font-bold">
            Hygienrisker
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vad som händer i en bastu över tid
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-white/80">
          <div>
            <Droplets className="w-5 h-5 text-cyan-accent mb-3" />
            Fukt tränger in i träytor och skapar ideal miljö för biofilm.
          </div>

          <div>
            <Thermometer className="w-5 h-5 text-cyan-accent mb-3" />
            Höga temperaturer påskyndar nedbrytning av organiska rester.
          </div>

          <div>
            <Sparkles className="w-5 h-5 text-cyan-accent mb-3" />
            Vanlig städning når inte djupföroreningar i trästrukturen.
          </div>
        </div>
      </motion.section>

      {/* WHAT WE DO */}
      <motion.section {...fade} className="mt-20">
        <h2 className="text-3xl font-bold text-midnight mb-8">
          Vad vi behandlar
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Bastulavar",
            "Ryggstöd",
            "Träpaneler",
            "Golvyta",
            "Ventilerade zoner",
            "Kontaktpunkter",
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-50 p-5 rounded-2xl flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-cyan-accent" />
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* METHOD */}
      <motion.section {...fade} className="mt-20">
        <h2 className="text-3xl font-bold text-midnight mb-10">
          Så arbetar vi
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Inspektion" },
            { n: "02", t: "Analys av belastning" },
            { n: "03", t: "Djup rengöring" },
            { n: "04", t: "Hygienkontroll" },
          ].map((s) => (
            <div
              key={s.n}
              className="border border-midnight/10 rounded-3xl p-6 bg-white"
            >
              <div className="text-4xl font-bold text-cyan-accent mb-4">
                {s.n}
              </div>
              <div className="font-bold text-midnight">{s.t}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* VALUE */}
      <motion.section
        {...fade}
        className="mt-20 bg-slate-50 p-10 md:p-14 rounded-3xl"
      >
        <h2 className="text-3xl font-bold text-midnight mb-8">
          Resultat av behandlingen
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-midnight/70">
          <div>✔ Renare och mer hygieniska träytor</div>
          <div>✔ Minskad lukt och organisk belastning</div>
          <div>✔ Förlängd livslängd på bastuinredning</div>
          <div>✔ Förbättrad upplevelse för användare</div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...fade}
        className="mt-20 text-center bg-midnight text-white p-12 rounded-3xl"
      >
        <h2 className="text-3xl font-bold mb-4">
          Behöver du professionell bastuhygien?
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          För gym, spa och hotell där hygienstandard och upplevelse är avgörande.
        </p>

        <a
          href="tel:0101234567"
          className="bg-cyan-accent px-8 py-4 rounded-full font-bold inline-block"
        >
          Kontakta oss
        </a>
      </motion.section>
    </motion.div>
  );
}
