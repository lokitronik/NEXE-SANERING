import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Wind, ShieldCheck, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
};

export default function BastuHygienbehandling() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden bg-white"
    >
      <Helmet>
        <title>
          Bastu – Teknisk hygienbehandling | Prio Sanering AB
        </title>

        <meta
          name="description"
          content="Teknisk hygienbehandling av bastu- och wellnessmiljöer. Behandling av träytor, biofilm och luktproblem i gym, spa och hotell."
        />

        <meta
          name="keywords"
          content="bastu rengöring, bastu hygien, spa sanering, gym bastu rengöring, träytor hygienbehandling, hygienkontroll bastu"
        />

        <link rel="canonical" href={window.location.href} />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 md:px-10 lg:px-14 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-cyan-accent/10">
                <Wind className="w-8 h-8 text-cyan-accent" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-midnight mb-6">
              Bastu – teknisk hygienbehandling
            </h1>

            <p className="text-lg text-midnight/70 font-light leading-relaxed">
              Specialiserad hygienbehandling av bastu- och wellnessmiljöer med hög värme,
              fukt och porösa träytor där biofilm och organiskt material ackumuleras över tid.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-14 bg-slate-50">
        <div className="max-w-5xl mx-auto grid gap-12">

          {/* WHAT */}
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold text-midnight mb-4">
              Vad som behandlas
            </h2>

            <ul className="space-y-2 text-midnight/70">
              <li>• Bastulavar och ryggstöd i trä</li>
              <li>• Kontaktytor med hög hudkontakt</li>
              <li>• Golv och dräneringszoner</li>
              <li>• Fuktutsatta och svårventilerade områden</li>
              <li>• Luktpåverkade träytor</li>
            </ul>
          </motion.div>

          {/* METHOD */}
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold text-midnight mb-4">
              Metod
            </h2>

            <ul className="space-y-2 text-midnight/70">
              <li>• Termisk behandling med torrånga</li>
              <li>• Mekanisk borttagning av organisk beläggning</li>
              <li>• Djup hygieninsats i porösa träytor</li>
              <li>• Rengöring av golv och dräneringspunkter</li>
              <li>• Vid behov: ATP-hygienverifiering</li>
            </ul>
          </motion.div>

          {/* RESULTS */}
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold text-midnight mb-4">
              Resultat
            </h2>

            <ul className="space-y-2 text-midnight/70">
              <li>• Minskad lukt och organiska rester</li>
              <li>• Förbättrad hygienkänsla</li>
              <li>• Förlängd livslängd på träytor</li>
              <li>• Förbättrad upplevd renhet för användare</li>
              <li>• Dokumenterad hygieninsats vid behov</li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeInUp}
            className="bg-midnight text-white rounded-3xl p-10 text-center"
          >
            <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-cyan-accent" />

            <h3 className="text-2xl font-bold mb-4">
              Vill du veta mer eller boka en insats?
            </h3>

            <p className="text-white/70 font-light mb-6">
              Kontakta oss för en bedömning av er bastu- eller wellnessmiljö.
            </p>

            <a
              href="tel:0101234567"
              className="inline-flex items-center gap-2 bg-cyan-accent text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Kontakta oss <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}
