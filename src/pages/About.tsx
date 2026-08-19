import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  HeartHandshake,
  Microscope,
  ClipboardCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] },
};

const values = [
  {
    icon: <Shield className="w-8 h-8 text-cyan-accent" />,
    title: "Diskretion",
    desc:
      "Vi arbetar med låg profil, tydlig kommunikation och respekt för den personliga integriteten i varje uppdrag.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-cyan-accent" />,
    title: "Respekt",
    desc:
      "Vi möter människor i situationer som ofta är känsliga. Därför arbetar vi lugnt, metodiskt och med ett mänskligt bemötande.",
  },
  {
    icon: <Microscope className="w-8 h-8 text-cyan-accent" />,
    title: "Teknisk noggrannhet",
    desc:
      "Vårt arbete bygger på teknisk struktur, skyddsrutiner, biologisk riskförståelse, hygien, dokumentation och kontroll.",
  },
];

const workPrinciples = [
  "Riskbedömning innan arbetet påbörjas",
  "Tydlig separation mellan ren och påverkad zon",
  "Rutiner för att minska risken för korskontaminering",
  "Kontroll och dokumentation före, under och efter insats",
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Om oss | Nexe Sanering AB</title>
        <meta
          name="description"
          content="Lär känna Nexe Sanering AB. Vi är ett specialiserat saneringsföretag med erfarenhet från laboratoriemiljöer, biologisk dekontaminering, teknisk sanering och kontrollerade arbetsrutiner."
        />
      </Helmet>

      {/* HERO */}
      <motion.section
        className="text-center mb-14 sm:mb-16 md:mb-24"
        {...fadeInUp}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-sm sm:text-base mb-6">
          <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          Om företaget
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-5 sm:mb-6 leading-tight">
          Om Nexe Sanering AB
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Nexe Sanering AB är ett specialiserat saneringsföretag med erfarenhet
          från miljöer där hygien, skyddsrutiner, biologiska risker och
          kontrollerade arbetsmetoder är avgörande.
        </p>
      </motion.section>

      {/* VALUES */}
      <section className="mb-14 sm:mb-16 md:mb-24">
        <motion.div className="text-center mb-10 sm:mb-12" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-4">
            Det vi står för
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-midnight/5 text-center"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="mb-5 sm:mb-6 flex justify-center">
                {value.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-midnight">
                {value.title}
              </h3>

              <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-slate-50 p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border border-midnight/5">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-5 sm:mb-6 leading-tight">
            Ett tryggt arbetssätt
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mt-10 text-left">
            {workPrinciples.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white border border-slate-200 p-5 rounded-2xl"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-midnight/70 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
