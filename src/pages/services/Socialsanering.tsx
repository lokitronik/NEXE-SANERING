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
  FileText,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
};

const process = [
  {
    icon: <ClipboardCheck className="w-7 h-7 text-cyan-accent" />,
    title: "Bedömning och planering",
    desc:
      "Vi går igenom bostaden, omfattningen och eventuella risker innan arbetet påbörjas. Du får en tydlig bild av vad som behöver göras och hur insatsen kan genomföras.",
  },
  {
    icon: <Trash2 className="w-7 h-7 text-cyan-accent" />,
    title: "Rensning och sortering",
    desc:
      "Uppsamlat material, avfall och skadade föremål hanteras metodiskt. Personliga tillhörigheter kan separeras och tas om hand enligt överenskommelse.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-cyan-accent" />,
    title: "Sanering och återställning",
    desc:
      "När bostaden är rensad behandlas påverkade ytor för att minska smuts, lukt och biologisk belastning. Målet är att skapa en tryggare och mer hanterbar miljö.",
  },
];

const situations = [
  "Kraftig uppsamling av föremål, avfall eller material",
  "Bostäder med lukt, smuts eller biologisk belastning",
  "Dödsbo, anhöriguppdrag eller socialtjänstärenden",
  "Behov av diskret, trygg och respektfull hantering",
];

const included = [
  {
    title: "Rensning och avfallshantering",
    desc:
      "Vi tar hand om uppsamlat material, skadat lösöre och avfall på ett strukturerat sätt. Vid behov används skyddsrutiner och särskild hantering för biologiskt belastat material.",
  },
  {
    title: "Personliga tillhörigheter",
    desc:
      "Dokument, fotografier, nycklar, värdesaker och andra personliga föremål kan separeras och hanteras enligt överenskommelse.",
  },
  {
    title: "Sanering av ytor",
    desc:
      "När bostaden är rensad kan påverkade ytor rengöras och behandlas för att minska smuts, lukt och biologisk belastning.",
  },
  {
    title: "Dokumentation",
    desc:
      "Vi kan dokumentera arbetet med foton och rapport. Det kan vara användbart vid försäkringsärenden, dödsbo, fastighetsärenden eller kontakt med socialtjänst.",
  },
];

export default function Socialsanering() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Socialsanering & hoarder-städning | Prio Sanering AB</title>
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
        className="bg-midnight text-white p-8 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] mb-16 sm:mb-20 md:mb-28"
        {...fadeInUp}
      >
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-cyan-accent font-bold text-sm sm:text-base mb-6">
            <Users2 className="w-4 h-4 sm:w-5 sm:h-5" />
            Socialsanering & hoarder-städning
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            När en bostad behöver tas om hand med struktur, respekt och
            diskretion
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-3xl">
            Socialsanering handlar inte bara om att rensa en bostad. Det handlar
            om att hantera en ofta känslig situation på ett tryggt, metodiskt
            och respektfullt sätt. Vi hjälper till när uppsamling, lukt, smuts
            eller biologisk belastning gör att vanlig städning inte räcker.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
            <a
              href="tel:0101234567"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-accent text-white px-6 sm:px-8 py-4 text-sm sm:text-base font-bold hover:bg-cyan-accent/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Ring oss
            </a>

            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 sm:px-8 py-4 text-sm sm:text-base font-bold hover:border-white/40 transition-colors"
            >
              Så arbetar vi
            </a>
          </div>
        </div>
      </motion.section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 md:mb-28">
        <motion.div
          className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-midnight/5"
          {...fadeInUp}
        >
          <HeartHandshake className="w-12 h-12 sm:w-14 sm:h-14 text-cyan-accent mb-6" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-5 leading-tight">
            Vi arbetar utan dömande
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-midnight/65 font-light leading-relaxed">
            Bakom en bostad med kraftig uppsamling finns ofta en mänsklig
            situation. Därför arbetar vi lugnt, diskret och med respekt för
            personen, anhöriga och uppdragsgivare. Vårt fokus är att skapa
            ordning, säkerhet och en hanterbar väg framåt.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-sm"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight mb-6">
            När kan socialsanering behövas?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {situations.map((item) => (
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

      <section id="process" className="mb-16 sm:mb-20 md:mb-28">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          {...fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-4">
            Så arbetar vi
          </h2>

          <p className="text-base sm:text-lg text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
            Varje uppdrag anpassas efter bostadens skick, risknivå och kundens
            behov. Vi arbetar stegvis för att skapa trygghet, kontroll och
            tydlig dokumentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {process.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-midnight/5"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="mb-5">{item.icon}</div>

              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-sm mb-5">
                {index + 1}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-midnight mb-4">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-midnight text-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] mb-16 sm:mb-20 md:mb-28">
        <motion.div className="max-w-5xl mx-auto" {...fadeInUp}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-1/3">
              <FileText className="w-12 h-12 sm:w-14 sm:h-14 text-cyan-accent mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Vad ingår i en socialsanering?
              </h2>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-accent mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="bg-slate-50 p-8 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center border border-midnight/5"
        {...fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-6">
          Behöver du hjälp med en bostad som känns svår att hantera?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-midnight/60 font-light mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
          Kontakta oss för en första bedömning. Vi hjälper dig att förstå vad
          som behöver göras och hur arbetet kan genomföras på ett tryggt,
          diskret och respektfullt sätt.
        </p>

        <a
          href="tel:0101234567"
          className="inline-flex items-center justify-center gap-3 bg-cyan-accent text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-cyan-accent/90 transition-all"
        >
          <Phone className="w-5 h-5" />
          010-XXX XX XX
        </a>
      </motion.section>
    </motion.div>
  );
}
