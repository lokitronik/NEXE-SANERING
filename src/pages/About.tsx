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

const team = [
  {
    name: "Manel Zurita",
    role: "Teknisk sanering & biologisk riskförståelse",
    image: "DIN_BILD_URL_HÄR",
    desc:
      "Erfarenhet från laboratoriemiljöer, blodbank och arbete med biologiskt material. Bidrar med struktur, hygienrutiner, dokumentation och förståelse för kontrollerade arbetsflöden.",
  },
  {
    name: "Eduard Bosch",
    role: "Biologiskt material & dekontaminering",
    image: "DIN_BILD_URL_HÄR",
    desc:
      "Erfarenhet från blodbank, biologiskt material och kontrollerade arbetsrutiner. Bidrar med noggrannhet, biosäkerhet, avfallshantering och metodiskt arbete.",
  },
  {
    name: "Jordi Bosch",
    role: "Teknisk rivning & materialhantering",
    image: "DIN_BILD_URL_HÄR",
    desc:
      "Erfarenhet från biologiskt material och praktiskt arbete med teknisk rivning. Bidrar med förståelse för material, konstruktion och selektiv demontering vid behov.",
  },
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
        <title>Om oss | Prio Sanering AB</title>
        <meta
          name="description"
          content="Lär känna Prio Sanering AB. Vi är ett specialiserat saneringsföretag med erfarenhet från laboratoriemiljöer, biologisk dekontaminering, teknisk sanering och kontrollerade arbetsrutiner."
        />
        <meta
          name="keywords"
          content="om prio sanering, saneringsföretag, teknisk sanering, biologisk dekontaminering, laboratoriemiljö, blodbank, renrum, biologiska risker, diskret sanering"
        />
      </Helmet>

      <motion.section
        className="text-center mb-14 sm:mb-16 md:mb-24"
        {...fadeInUp}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-sm sm:text-base mb-6">
          <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          Om företaget
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-5 sm:mb-6 leading-tight">
          Om Prio Sanering AB
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Prio Sanering AB är ett specialiserat saneringsföretag med erfarenhet
          från miljöer där hygien, skyddsrutiner, biologiska risker och
          kontrollerade arbetsmetoder är avgörande. Vi arbetar med teknisk
          sanering i känsliga och krävande miljöer där vanlig rengöring inte
          räcker.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center mb-14 sm:mb-16 md:mb-24">
        <motion.div {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-5 sm:mb-6 leading-tight">
            Erfarenhet från kontrollerade och biologiskt känsliga miljöer
          </h2>

          <div className="space-y-4 text-sm sm:text-base md:text-lg text-midnight/65 font-light leading-relaxed">
            <p>
              Vår bakgrund omfattar arbete i laboratoriemiljöer, blodbank,
              renrum, biologisk dekontaminering och teknisk hantering av
              material som kräver särskild försiktighet. Det är miljöer där
              hygien, spårbarhet, zonindelning och kontroll är en del av det
              dagliga arbetet.
            </p>

            <p>
              Den erfarenheten ger oss en teknisk förståelse för situationer där
              det kan finnas blod, kroppsvätskor, lukt, organiskt material eller
              kontaminerade ytor. För oss handlar sanering därför inte bara om
              att något ska se rent ut, utan om att arbetet ska utföras med rätt
              metod, skydd och kontroll.
            </p>

            <p>
              Vid behov kan vi även hantera material som kräver selektiv
              demontering, till exempel när förorening har påverkat golv,
              väggar, kök, ventilation eller andra delar av bostaden. Det gör
              att vi kan kombinera teknisk sanering med praktiskt genomförande
              på plats.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-midnight text-white p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem]"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
        >
          <ClipboardCheck className="w-12 h-12 sm:w-14 sm:h-14 text-cyan-accent mb-6" />

          <h3 className="text-2xl sm:text-3xl font-bold mb-5 leading-tight">
            Mer än visuell rengöring
          </h3>

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-6">
            I våra uppdrag räcker det inte att en yta ser ren ut. Arbetet
            behöver vara säkert, kontrollerat och anpassat efter risknivå,
            material och miljö. Därför arbetar vi med tydliga rutiner,
            skyddsutrustning, checklistor och kontroll före, under och efter
            insatsen.
          </p>

          <div className="space-y-4">
            {workPrinciples.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/85 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mb-14 sm:mb-16 md:mb-24">
        <motion.div className="text-center mb-10 sm:mb-12" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-4">
            Teamet bakom Prio Sanering
          </h2>

          <p className="text-base sm:text-lg text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
            Bakom Prio Sanering AB finns ett team med erfarenhet från
            laboratoriemiljöer, blodbank, biologisk dekontaminering, teknisk
            sanering och praktiskt arbete i krävande miljöer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-slate-50 rounded-3xl border border-midnight/5 overflow-hidden"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] bg-midnight/5 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-midnight mb-2">
                  {member.name}
                </h3>

                <p className="text-cyan-accent font-bold text-sm sm:text-base mb-4 leading-snug">
                  {member.role}
                </p>

                <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-14 sm:mb-16 md:mb-24">
        <motion.div className="text-center mb-10 sm:mb-12" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-4">
            Det vi står för
          </h2>

          <p className="text-base sm:text-lg text-midnight/60 max-w-2xl mx-auto font-light leading-relaxed">
            Våra uppdrag kan se olika ut, men grunden i vårt arbete är alltid
            densamma.
          </p>
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

      <section className="bg-slate-50 p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border border-midnight/5">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-5 sm:mb-6 leading-tight">
            Ett tryggt val när uppdraget kräver teknisk förståelse
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-midnight/60 font-light leading-relaxed">
            Prio Sanering AB finns för uppdrag där det behövs mer än en snabb
            städinsats. Vi kombinerar teknisk erfarenhet, strukturerade
            arbetsrutiner och mänskligt bemötande, så att kunden får en lösning
            som känns trygg, tydlig och professionell.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}
