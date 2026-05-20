import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  Shield,
  Phone,
  ClipboardCheck,
  HeartHandshake,
  Wind,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
};

const process = [
  {
    icon: <ClipboardCheck className="w-6 h-6 text-cyan-accent" />,
    title: "Bedömning",
    desc:
      "Vi går igenom bostaden, omfattningen och vilka åtgärder som behövs innan arbetet planeras.",
  },
  {
    icon: <Shield className="w-6 h-6 text-cyan-accent" />,
    title: "Sanering",
    desc:
      "Biologiskt material, påverkade ytor och kontaminerat material hanteras med rätt skydd och metod.",
  },
  {
    icon: <Wind className="w-6 h-6 text-cyan-accent" />,
    title: "Lukt och återställning",
    desc:
      "Vid behov utförs luktreducerande åtgärder, slutkontroll och dokumentation av insatsen.",
  },
];

const helpItems = [
  "Biologiskt material och påverkade ytor",
  "Kvarvarande lukt i bostaden",
  "Kontaminerat material eller lösöre",
  "Personliga tillhörigheter enligt överenskommelse",
  "Diskret hantering på plats",
  "Dokumentation vid behov",
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
        <title>Sanering vid obevakat dödsfall | Prio Sanering AB</title>
        <meta
          name="description"
          content="Diskret och professionell sanering vid obevakade dödsfall. Vi hanterar biologiskt material, lukt, personliga tillhörigheter och dokumentation med respekt och säkerhet."
        />
        <meta
          name="keywords"
          content="sanering vid obevakat dödsfall, dödsfallssanering, sanering efter dödsfall, luktsanering dödsfall, biologisk sanering"
        />
      </Helmet>

      <motion.section className="mb-12 sm:mb-16 md:mb-20" {...fadeInUp}>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-xs sm:text-sm mb-5">
            <Shield className="w-4 h-4" />
            Sanering vid obevakat dödsfall
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-5 leading-tight">
            När en bostad behöver saneras efter ett obevakat dödsfall
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-midnight/65 font-light leading-relaxed max-w-3xl">
            Ett obevakat dödsfall är en känslig situation som kräver både
            teknisk kunskap och respektfull hantering. Vi hjälper till att
            sanera bostaden, minska biologiska risker och hantera lukt,
            material och personliga tillhörigheter på ett tryggt och diskret
            sätt.
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
            Respekt i varje steg
          </h2>

          <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
            Vi vet att arbetet ofta sker i en svår stund för anhöriga,
            fastighetsägare eller andra berörda. Därför arbetar vi lugnt,
            diskret och med tydlig kommunikation genom hela processen.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-7 py-2 lg:py-4"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight mb-5">
            Vad kan behöva hanteras?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
            {helpItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-midnight/70 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mb-12 sm:mb-16 md:mb-20">
        <motion.div className="mb-8 sm:mb-10 md:mb-12" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-3">
            Så arbetar vi
          </h2>

          <p className="text-base sm:text-lg text-midnight/60 max-w-2xl font-light leading-relaxed">
            Varje uppdrag anpassas efter bostadens skick, omfattning och vilka
            risker som finns på plats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {process.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-slate-50 p-5 sm:p-7 md:p-8 rounded-3xl border border-midnight/5"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-sm">
                  {index + 1}
                </span>
                {item.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-midnight mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
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
            Behöver du hjälp eller rådgivning?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-midnight/60 font-light mb-7 sm:mb-8 max-w-3xl leading-relaxed">
            Kontakta oss för en första bedömning. Vi hjälper dig att förstå vad
            som behöver göras och hur arbetet kan genomföras på ett säkert,
            diskret och respektfullt sätt.
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
