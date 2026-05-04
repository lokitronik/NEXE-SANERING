import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  Activity,
  HeartHandshake,
  ArrowRight,
  Wind,
  ShieldCheck,
  Box,
  Sparkles,
  Maximize,
  Users2,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
};

const coreServices = [
  {
    title: "Sanering vid obevakat dödsfall",
    description:
      "Diskret och professionell sanering efter obevakade dödsfall med fokus på biologiskt material, lukt och återställande åtgärder.",
    icon: <HeartHandshake className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/sanering-dodstall"
  },
  {
    title: "Traumasanering",
    description:
      "Snabb och säker sanering efter blodspill, olyckor, våldshändelser och andra akuta biologiska föroreningar.",
    icon: <Activity className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/traumasanering"
  },
  {
    title: "Socialsanering & hoarder-städning",
    description:
      "Vi utför professionell socialsanering och hoarder-städning — rensning och sanering av kraftigt nedskräpade bostäder med biologisk belastning, lukt och extrem uppsamling. Diskret, metodisk och med full utrustning.",
    icon: <Users2 className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/socialsanering"
  },
  {
    title: "Luktsanering",
    description:
      "Teknisk behandling av svåra och kvarvarande lukter i bostäder, lokaler och andra miljöer där vanlig rengöring inte räcker.",
    icon: <Wind className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/luktsanering"
  },
  {
    title: "Hantering av personliga tillhörigheter",
    description:
      "Respektfull identifiering, sortering och hantering av personliga tillhörigheter efter överenskommelse.",
    icon: <Box className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/om-oss#minneshantering"
  }
];

const preventativeServices = [
{
  title: "Förebyggande hygienbehandling",
  description:
    "Teknisk behandling med torrånga och hydroxylteknik för utrymmen med luktproblem, stillastående miljöer eller behov av förebyggande hygieninsats på utvalda ytor.",
  icon: <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
  link: "/tjanster/forebyggande-hygienbehandling"
}
  {
    title: "Teknisk rengöring & hygienkontroll",
    description:
      "Diskret och noggrant utförd teknisk rengöring för hotell, konferensmiljöer och andra verksamheter med höga krav på hygien, dokumentation och återställning.",
    icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/technical-cleaning-b2b"
  },
  {
    title: "Svåråtkomliga ytor",
    description:
      "Specialiserad rengöring och desinfektion av dolda eller svåråtkomliga utrymmen där standardinsatser inte räcker.",
    icon: <Maximize className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/svaratkomliga-ytor"
  }
];

const values = [
  {
    title: "Diskret hantering",
    description:
      "Vi arbetar med respekt för situationen och anpassar varje insats efter miljön och människorna omkring."
  },
  {
    title: "Säker arbetsmetod",
    description:
      "Varje uppdrag utförs strukturerat med fokus på hygien, riskbedömning och kontrollerad hantering."
  },
  {
    title: "Noggrann återställning",
    description:
      "Målet är inte bara att rengöra, utan att återställa miljön på ett tryggt och professionellt sätt."
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden bg-white"
    >
    <Helmet>
  <title>Prio Sanering AB | Traumasanering, sanering vid dödsfall och luktsanering</title>
  <meta
    name="description"
    content="Prio Sanering AB erbjuder specialiserade tjänster inom traumasanering, sanering vid dödsfall, socialsanering, luktsanering, förebyggande hygienbehandling med torrånga och hydroxylteknik, teknisk rengöring och sanering av svåråtkomliga ytor."
  />
  <meta
    name="keywords"
    content="traumasanering, sanering vid dödsfall, socialsanering, hoarder städning, luktsanering, förebyggande hygienbehandling, torrånga, hydroxylbehandling, hydroxylteknik, teknisk rengöring, svåråtkomliga ytor, biologisk sanering"
  />
  <link rel="canonical" href={window.location.origin} />
</Helmet>

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
            alt="Trygg och väl återställd miljö"
            className="w-full h-full object-cover object-center opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_30%)]" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="max-w-7xl mx-auto py-24 sm:py-28 md:py-32">
            <motion.div {...fadeInUp} className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-cyan-accent/20 bg-cyan-accent/10 text-cyan-accent px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8">
                Diskret · Säker · Professionell sanering
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-midnight leading-tight tracking-tight mb-5 sm:mb-6">
                Specialiserad sanering för känsliga och krävande miljöer
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-midnight/75 leading-relaxed font-light max-w-2xl mb-8 sm:mb-10">
                Vi hjälper privatpersoner, fastighetsägare och verksamheter med
                sanering där diskretion, säkerhet och noggrannhet är avgörande.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:0101234567"
                  className="inline-flex items-center justify-center rounded-full bg-midnight text-white px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold hover:bg-midnight/90 transition-colors w-full sm:w-auto"
                >
                  Kontakta oss
                </a>

                <Link
                  to="/tjanster"
                  className="inline-flex items-center justify-center rounded-full border border-midnight/15 bg-white text-midnight px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold hover:border-midnight/30 transition-colors w-full sm:w-auto"
                >
                  Se våra tjänster
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kärntjänster */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16 md:mb-20" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-midnight">
              Våra kärntjänster
            </h2>
            <p className="text-base sm:text-lg text-midnight/60 max-w-2xl mx-auto font-light leading-relaxed">
              Specialiserade tjänster för miljöer där vanlig rengöring inte räcker
              och där precision, säkerhet och diskretion är avgörande.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-slate-50 p-5 sm:p-6 md:p-8 rounded-3xl border border-slate-200 hover:border-cyan-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
              >
                <div className="mb-4 sm:mb-6">{service.icon}</div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-midnight leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-midnight/70 font-light leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="text-cyan-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base"
                >
                  Läs mer <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Förebyggande tjänster & tillval */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-midnight">
              Förebyggande tjänster & tillval
            </h2>
            <p className="text-base sm:text-lg text-midnight/60 max-w-2xl mx-auto font-light leading-relaxed">
              Kompletterande insatser för utrymmen där man vill arbeta förebyggande
              med hygien, luktkontroll och återkommande belastning i miljön.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {preventativeServices.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white p-5 sm:p-6 md:p-8 rounded-3xl border border-slate-200 hover:border-cyan-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
              >
                <div className="mb-4 sm:mb-6">{service.icon}</div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-midnight leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-midnight/70 font-light leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="text-cyan-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base"
                >
                  Läs mer <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <motion.div {...fadeInUp} className="lg:col-span-5">
              <div className="sticky top-24">
                <Shield className="w-12 h-12 sm:w-14 sm:h-14 text-cyan-accent mb-6" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight mb-6 leading-tight">
                  Trygg hantering i känsliga situationer
                </h2>
                <p className="text-base sm:text-lg text-midnight/65 font-light leading-relaxed max-w-xl">
                  Vi arbetar metodiskt och med respekt i varje uppdrag. Fokus ligger
                  på säker hantering, tydlig struktur och så liten påverkan som möjligt
                  för boende, verksamhet och omgivning.
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-midnight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-midnight/65 leading-relaxed font-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Behöver du hjälp eller vill du veta mer?
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed opacity-90 mb-8 sm:mb-10 max-w-3xl mx-auto">
              Kontakta oss för en första dialog om uppdragets omfattning, behov och
              förutsättningar. Vi återkommer så snart som möjligt.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="tel:0101234567"
                className="inline-flex items-center justify-center rounded-full bg-white text-midnight px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold hover:bg-white/90 transition-colors w-full sm:w-auto"
              >
                Ring oss
              </a>

              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold hover:border-white/40 transition-colors w-full sm:w-auto"
              >
                Gå till kontakt
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
