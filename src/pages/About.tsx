import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  HeartHandshake,
  Microscope,
  Users,
  CheckCircle2,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] as const },
};

const values = [
  {
    icon: <HeartHandshake className="w-8 h-8 text-cyan-accent" aria-hidden="true" />,
    title: "Närhet & samarbete",
    desc:
      "Vi lyssnar på dina behov och hittar en väg framåt tillsammans med dig. Du ska känna dig delaktig, få tydliga svar och veta vem du kan vända dig till.",
  },
  {
    icon: <Shield className="w-8 h-8 text-cyan-accent" aria-hidden="true" />,
    title: "Respekt & diskretion",
    desc:
      "Vi möter dig med omtanke och utan att döma. Vi värnar om din integritet och visar respekt för ditt hem, din verksamhet och det som är viktigt för dig.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-cyan-accent" aria-hidden="true" />,
    title: "Ansvar & noggrannhet",
    desc:
      "Vi är tydliga med vad vi kan hjälpa till med, håller det vi kommer överens om och följer upp vårt arbete. Du ska veta vad vi gör och varför.",
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
        <title>Om oss | NEXE SPECIALSANERING</title>
        <meta
          name="description"
          content="Lär känna människorna bakom NEXE SPECIALSANERING. Personlig kontakt, omtanke och noggrant arbete – med samarbete och respekt i centrum. En del av NEXE GROUP AB."
        />
      </Helmet>

      {/* HERO */}
      <motion.section
        className="text-center mb-14 sm:mb-16 md:mb-20"
        {...fadeInUp}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-sm sm:text-base mb-6">
          <Users className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          Om oss
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight leading-tight">
          Människorna bakom NEXE
        </h1>
      </motion.section>

      {/* OUR NAME AND THE PEOPLE BEHIND IT */}
      <motion.section
        aria-labelledby="our-story-heading"
        className="grid md:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-start mb-14 sm:mb-16 md:mb-24"
        {...fadeInUp}
      >
        <div className="md:col-span-2">
          <p className="text-sm font-bold uppercase tracking-widest text-midnight/60 mb-4">
            Vårt namn, vår tanke
          </p>
          <h2
            id="our-story-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight leading-tight mb-6"
          >
            Ett namn som för oss samman
          </h2>
          <div className="h-1 w-16 rounded-full bg-cyan-accent" aria-hidden="true" />
        </div>

        <div className="md:col-span-3 space-y-5 text-base sm:text-lg text-midnight/70 leading-relaxed">
          <p>
            NEXE är ett katalanskt ord som vi har valt med omsorg. Vi som står
            bakom företaget kommer från Katalonien, och med namnet vill vi
            uttrycka det som är viktigt för oss: gemenskap, samarbete och
            kontakten mellan människor.
          </p>
          <p>
            Den tanken vill vi ta med oss i varje uppdrag. Från det första
            samtalet ska du känna att du kan berätta vad du behöver, ställa
            frågor och få raka svar. Vi lyssnar, går igenom förutsättningarna
            tillsammans och är tydliga med hur vi kan hjälpa dig.
          </p>
          <p>
            Vi vet att det kan vara ett stort steg att be om hjälp, särskilt
            när situationen är känslig. Därför möter vi dig med respekt och utan
            att döma. Vi är varsamma med ditt hem, dina tillhörigheter och din
            integritet, och visar samma omsorg när vi arbetar i din verksamhet.
          </p>
          <p className="text-sm sm:text-base text-midnight/60 pt-2">
            NEXE SPECIALSANERING är en del av NEXE GROUP AB. Vår ambition är att
            förena ett personligt bemötande med ett noggrant och ansvarsfullt arbete.
          </p>
        </div>
      </motion.section>

      {/* VALUES */}
      <section aria-labelledby="values-heading" className="mb-14 sm:mb-16 md:mb-24">
        <motion.div className="text-center mb-10 sm:mb-12" {...fadeInUp}>
          <h2 id="values-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-4">
            Det vi står för
          </h2>
          <p className="text-base sm:text-lg text-midnight/70 max-w-2xl mx-auto leading-relaxed">
            Våra värderingar ska märkas i kontakten med oss och i hur vi tar
            hand om varje uppdrag.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-midnight/5 text-left"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="mb-5 sm:mb-6">{value.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-midnight">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-midnight/70 leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WORKING METHODS */}
      <section aria-labelledby="methods-heading" className="bg-slate-50 p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border border-midnight/5">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <Microscope className="w-8 h-8 text-cyan-accent mx-auto mb-5" aria-hidden="true" />
          <h2 id="methods-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-5 sm:mb-6 leading-tight">
            Omtanke i mötet. Noggrannhet i arbetet.
          </h2>
          <p className="text-base sm:text-lg text-midnight/70 max-w-2xl mx-auto leading-relaxed">
            Ett personligt bemötande går hand i hand med tydliga rutiner.
            Vårt arbete bygger på riskbedömning, hygien och kontroll,
            och vi förklarar vad som behöver göras så att du kan känna dig
            trygg genom hela uppdraget.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mt-10 text-left">
            {workPrinciples.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white border border-slate-200 p-5 rounded-2xl"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-midnight/70 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </motion.div>
  );
}
