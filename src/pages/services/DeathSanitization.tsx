import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  Shield,
  Phone,
  ClipboardCheck,
  HeartHandshake,
  Wind,
  ShieldCheck,
  FileText,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
};

const protocol = [
  {
    icon: <ClipboardCheck className="w-6 h-6 text-cyan-accent" />,
    step: "1",
    title: "Riskbedömning",
    desc:
      "Vi bedömer omfattning, biologiska risker, lukt, material och vilka skyddsåtgärder som behövs innan arbetet planeras.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-accent" />,
    step: "2",
    title: "Säkring av arbetsområdet",
    desc:
      "Arbetsområdet förbereds med rätt skyddsutrustning, rutiner och avgränsning för att minska exponering och spridning.",
  },
  {
    icon: <Shield className="w-6 h-6 text-cyan-accent" />,
    step: "3",
    title: "Teknisk sanering",
    desc:
      "Biologiskt material, kontaminerade ytor och påverkade material hanteras metodiskt med rätt saneringsmetod.",
  },
  {
    icon: <Wind className="w-6 h-6 text-cyan-accent" />,
    step: "4",
    title: "Lukt och återställande åtgärder",
    desc:
      "Vid behov utförs luktreducerande behandling och kompletterande åtgärder för att återställa miljön.",
  },
  {
    icon: <FileText className="w-6 h-6 text-cyan-accent" />,
    step: "5",
    title: "Kontroll och dokumentation",
    desc:
      "Arbetet avslutas med genomgång, dokumentation och tydlig återkoppling till uppdragsgivaren.",
  },
];

const includedItems = [
  "Biologisk riskbedömning av bostaden",
  "Sanering av påverkade ytor och material",
  "Hantering av kontaminerat lösöre",
  "Luktreducerande åtgärder vid behov",
  "Personliga tillhörigheter enligt överenskommelse",
  "Dokumentation efter utförd insats",
];

export default function DeathSanitization() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Teknisk sanering vid obevakat dödsfall | Nexe Sanering AB</title>
        <meta
          name="description"
          content="Teknisk sanering vid obevakat dödsfall. Vi hanterar biologiska risker, lukt, kontaminerat material, dokumentation och personliga tillhörigheter med diskretion och respekt."
        />
        <meta
          name="keywords"
          content="teknisk sanering vid obevakat dödsfall, sanering vid obevakat dödsfall, dödsfallssanering, sanering efter dödsfall, biologisk sanering, luktsanering dödsfall"
        />
      </Helmet>

      <motion.section className="mb-12 sm:mb-16 md:mb-20" {...fadeInUp}>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-xs sm:text-sm mb-5">
            <Shield className="w-4 h-4" />
            Sanering vid obevakat dödsfall
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-5 leading-tight">
            Teknisk sanering vid obevakat dödsfall
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-midnight/65 font-light leading-relaxed max-w-3xl">
            Ett obevakat dödsfall kräver mer än vanlig rengöring. Det kräver
            teknisk sanering, biologisk riskbedömning, rätt skyddsrutiner,
            lukthantering och metodisk hantering av påverkade material. Vi
            kombinerar ett tydligt saneringsprotokoll med diskret och
            respektfull hantering genom hela processen.
          </p>

          <div className="mt-7 sm:mt-9">
            <a
              href="tel:0101234567"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-midnight text-white px-6 py-4 text-sm sm:text-base font-bold hover:bg-midnight/90 transition-colors w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Ring oss
            </a>
          </div>
        </div>
      </motion.section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
        <motion.div
          className="lg:col-span-5 bg-midnight text-white p-6 sm:p-8 md:p-10 rounded-[1.75rem] md:rounded-[2rem]"
          {...fadeInUp}
        >
          <HeartHandshake className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-accent mb-5" />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Teknisk noggrannhet i en känslig situation
          </h2>

          <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
            Vid ett obevakat dödsfall kan bostaden påverkas av biologiskt
            material, lukt, vätskor, kontaminerade ytor och material som kräver
            särskild hantering. Därför arbetar vi inte som en vanlig städfirma.
            Vi följer en strukturerad teknisk process, samtidigt som vi hanterar
            situationen med respekt för anhöriga, fastighetsägare och andra
            berörda.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-7 py-2 lg:py-4"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight mb-5">
            Vad ingår i teknisk sanering vid obevakat dödsfall?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
            {includedItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-midnight/70 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-midnight/55 font-light leading-relaxed mt-6 max-w-3xl">
            Personliga tillhörigheter, dokument, fotografier, nycklar eller
            andra föremål med praktiskt eller sentimentalt värde kan hanteras
            separat efter överenskommelse.
          </p>
        </motion.div>
      </section>

      <section className="mb-12 sm:mb-16 md:mb-20">
        <motion.div className="mb-8 sm:mb-10 md:mb-12" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-3">
            Vårt saneringsprotokoll
          </h2>

          <p className="text-base sm:text-lg text-midnight/60 max-w-2xl font-light leading-relaxed">
            Varje uppdrag anpassas efter bostadens skick, omfattning och
            risknivå. Protokollet ger struktur, säkerhet och tydlighet genom
            hela insatsen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
          {protocol.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-slate-50 p-5 sm:p-6 rounded-3xl border border-midnight/5"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-sm">
                  {item.step}
                </span>
                {item.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-midnight mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-midnight/60 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="bg-slate-50 p-6 sm:p-10 md:p-14 rounded-[1.75rem] md:rounded-[3rem] border border-midnight/5"
        {...fadeInUp}
      >
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-5">
            Behöver du hjälp vid ett obevakat dödsfall?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-midnight/60 font-light mb-7 sm:mb-8 max-w-3xl leading-relaxed">
            Kontakta oss för en första bedömning. Vi hjälper dig att förstå vad
            som behöver göras och hur arbetet kan genomföras med rätt teknisk
            metod, diskretion och respekt.
          </p>

          <a
            href="tel:0101234567"
            className="inline-flex items-center justify-center gap-3 bg-cyan-accent text-white px-8 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-cyan-accent/90 transition-all w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            010-XXX XX XX
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}
