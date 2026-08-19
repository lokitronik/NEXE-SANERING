import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  Users2,
  Phone,
  ShieldCheck,
  ClipboardCheck,
  HeartHandshake,
  Trash2,
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
      "Vi går igenom bostaden, omfattningen och eventuella risker innan arbetet planeras.",
  },
  {
    icon: <Trash2 className="w-6 h-6 text-cyan-accent" />,
    title: "Rensning",
    desc:
      "Avfall, skadat material och uppsamling hanteras metodiskt och diskret.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-accent" />,
    title: "Sanering",
    desc:
      "Påverkade ytor behandlas för att minska lukt, smuts och biologisk belastning.",
  },
];

const helpItems = [
  "Kraftig uppsamling av föremål eller avfall",
  "Lukt, smuts eller biologisk belastning",
  "Dödsbo, anhöriguppdrag eller socialtjänstärenden",
  "Sortering av personliga tillhörigheter",
  "Diskret hantering utan dömande",
  "Dokumentation vid behov",
];

export default function Socialsanering() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Socialsanering & hoarder-städning | Nexe Sanering AB</title>
        <meta
          name="description"
          content="Professionell socialsanering och hoarder-städning. Vi hjälper till vid kraftig uppsamling, lukt, biologisk belastning och känsliga bostadssituationer med diskretion och respekt."
        />
        <meta
          name="keywords"
          content="socialsanering, hoarder-städning, hoarder sanering, sanering nedskräpad bostad, diogenes sanering, luktsanering, biologisk sanering, rensning bostad"
        />
      </Helmet>

      <motion.section
        className="mb-12 sm:mb-16 md:mb-20"
        {...fadeInUp}
      >
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-xs sm:text-sm mb-5">
            <Users2 className="w-4 h-4" />
            Socialsanering & hoarder-städning
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-5 leading-tight">
            När en bostad behöver tas om hand med respekt och struktur
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-midnight/65 font-light leading-relaxed max-w-3xl">
            Vi hjälper till när en bostad har blivit svår att hantera på grund
            av uppsamling, lukt, smuts eller biologisk belastning. Arbetet
            utförs diskret, metodiskt och utan dömande.
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
            Vi arbetar utan dömande
          </h2>

          <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
            Bakom en bostad med kraftig uppsamling finns ofta en mänsklig
            situation. Därför arbetar vi lugnt, respektfullt och med fokus på
            trygghet, inte skuld eller skam.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-7 py-2 lg:py-4"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight mb-5">
            Vi kan hjälpa vid
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
            Varje uppdrag anpassas efter bostadens skick, risknivå och kundens
            behov.
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
            Behöver du hjälp med en bostad som känns svår att hantera?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-midnight/60 font-light mb-7 sm:mb-8 max-w-3xl leading-relaxed">
            Kontakta oss för en första bedömning. Vi hjälper dig att förstå vad
            som behöver göras och hur arbetet kan genomföras tryggt, diskret och
            respektfullt.
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
