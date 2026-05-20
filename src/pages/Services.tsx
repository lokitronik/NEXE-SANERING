import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Activity,
  HeartHandshake,
  Wind,
  ArrowRight,
  Maximize,
  Box,
  Sparkles,
  ShieldCheck,
  Users,
  Users2,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
};

const coreServices = [
  {
    title: "Sanering vid obevakat dödsfall",
    description:
      "Diskret och professionell sanering efter obevakade dödsfall. Vi hanterar biologiskt material, lukt, dokumentation och återställande åtgärder med respekt och säkerhet.",
    icon: <HeartHandshake className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/sanering-dodstall",
  },
  {
    title: "Traumasanering",
    description:
      "Snabb och säker sanering efter blodspill, olyckor, våldshändelser och andra akuta biologiska föroreningar. Vid behov kan teknisk rengöring läggas till för övriga ytor.",
    icon: <Activity className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/traumasanering",
  },
  {
    title: "Socialsanering & hoarder-städning",
    description:
      "Vi utför professionell socialsanering och hoarder-städning — rensning och sanering av kraftigt nedskräpade bostäder med biologisk belastning, extrem uppsamling och luktpåverkan. Diskret, metodisk och med full utrustning.",
    icon: <Users2 className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/socialsanering",
  },
  {
    title: "Luktsanering",
    description:
      "Teknisk behandling av svåra och kvarvarande lukter i bostäder, lokaler och andra miljöer där vanlig rengöring inte räcker.",
    icon: <Wind className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/luktsanering",
  },
{
  title: "Hantering av personliga tillhörigheter",
  description:
    "Respektfull identifiering, sortering och hantering av personliga tillhörigheter efter överenskommelse.",
  icon: <Box className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
  link: "/Personligatillhörigheter",
},
];

const preventativeServices = [
  {
    title: "Förebyggande hygienbehandling",
    description:
      "Teknisk behandling med torrånga och hydroxylteknik för utrymmen med luktproblem, stillastående miljöer eller behov av förebyggande hygieninsats på utvalda ytor.",
    icon: <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/forebyggande-hygienbehandling",
  },
  {
    title: "Teknisk rengöring & hygienkontroll",
    description:
      "Diskret och noggrant utförd teknisk rengöring för hotell, konferensmiljöer och andra verksamheter med höga krav på hygien, dokumentation och återställning.",
    icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/technical-cleaning-b2b",
  },
  {
    title: "Svåråtkomliga ytor",
    description:
      "Specialiserad rengöring och desinfektion av dolda eller svåråtkomliga utrymmen där standardinsatser inte räcker.",
    icon: <Maximize className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/svaratkomliga-ytor",
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Våra tjänster | Prio Sanering AB</title>
        <meta
          name="description"
          content="Utforska våra specialiserade tjänster inom biologisk sanering, traumasanering, luktsanering, socialsanering, förebyggande hygienbehandling med torrånga och hydroxylteknik, teknisk rengöring och sanering av svåråtkomliga ytor."
        />
        <meta
          name="keywords"
          content="saneringstjänster, traumasanering, luktsanering, dödsfallssanering, socialsanering, hoarder städning, förebyggande hygienbehandling, torrånga, hydroxylteknik, teknisk rengöring, svåråtkomliga ytor, personliga tillhörigheter"
        />
      </Helmet>

      <motion.div className="text-center mb-14 sm:mb-16 md:mb-20" {...fadeInUp}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-4 sm:mb-5 md:mb-6 leading-tight">
          Våra tjänster
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi erbjuder specialiserade saneringstjänster med fokus på säkerhet,
          teknisk noggrannhet, dokumentation och diskret hantering.
        </p>
      </motion.div>

      <div className="mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 md:mb-12 border-b border-midnight/10 pb-4">
          Kärntjänster
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-slate-50 p-6 sm:p-7 md:p-8 rounded-3xl border-l-4 sm:border-l-8 border-cyan-accent hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            >
              <div className="mb-5 sm:mb-6">{service.icon}</div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 leading-snug">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-midnight/70 font-light leading-relaxed mb-6 sm:mb-8 md:mb-10 flex-grow">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="text-cyan-accent font-bold text-base sm:text-lg flex items-center gap-2 hover:gap-3 transition-all"
              >
                Läs mer om tjänsten{" "}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 md:mb-12 border-b border-midnight/10 pb-4">
          Förebyggande tjänster & tillval
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {preventativeServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-slate-50 p-6 sm:p-7 md:p-8 rounded-3xl border-l-4 sm:border-l-8 border-midnight/30 hover:border-cyan-accent hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            >
              <div className="mb-5 sm:mb-6 opacity-80">{service.icon}</div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-midnight/90 leading-snug">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-midnight/60 font-light leading-relaxed mb-6 sm:mb-8 md:mb-10 flex-grow">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="text-midnight/50 hover:text-cyan-accent font-bold text-base sm:text-lg flex items-center gap-2 hover:gap-3 transition-all"
              >
                Läs mer om tjänsten{" "}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="bg-midnight text-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem]">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-accent mx-auto mb-6 sm:mb-7 md:mb-8" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 md:mb-8 leading-tight">
            Varför välja Prio Sanering?
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed opacity-90 mb-8 sm:mb-10 md:mb-12">
            Vi arbetar strukturerat och med tydliga rutiner i varje uppdrag.
            Målet är att genomföra saneringen med så liten påverkan som möjligt
            för boende, verksamhet och omgivning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 text-left">
            <div className="bg-white/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent text-base sm:text-lg">
                Struktur
              </h4>
              <p className="text-sm sm:text-base opacity-70 leading-relaxed">
                Tydliga arbetsmoment, dokumentation och planering i varje
                uppdrag.
              </p>
            </div>

            <div className="bg-white/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent text-base sm:text-lg">
                Diskretion
              </h4>
              <p className="text-sm sm:text-base opacity-70 leading-relaxed">
                Respektfull och lågmäld hantering i känsliga eller utsatta
                situationer.
              </p>
            </div>

            <div className="bg-white/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent text-base sm:text-lg">
                Noggrannhet
              </h4>
              <p className="text-sm sm:text-base opacity-70 leading-relaxed">
                Metodval och utförande anpassas efter miljö, material och
                behov.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
