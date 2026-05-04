import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Phone,
  Hotel,
  Building2,
  UserCheck,
  Zap,
  Microscope
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const features = [
  {
    icon: <Hotel className="w-8 h-8 text-cyan-accent" />,
    title: "Hotell & Airbnb",
    desc:
      "Teknisk hygienbehandling för rum, gemensamma utrymmen och tillfälliga boenden där vanlig städning inte räcker."
  },
  {
    icon: <Microscope className="w-8 h-8 text-cyan-accent" />,
    title: "ATP-mätning",
    desc:
      "Mätning av organiska rester på utvalda ytor som stöd för hygienkontroll och dokumentation efter rengöring."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-cyan-accent" />,
    title: "Dokumenterad insats",
    desc:
      "Efter utfört uppdrag kan vi lämna dokumentation över metod, ytor, kontrollpunkter och resultat från eventuell mätning."
  }
];

export default function TechnicalCleaningB2B() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Teknisk rengöring B2B | Prio Sanering AB</title>
        <meta
          name="description"
          content="Teknisk rengöring och hygienkontroll för hotell, Airbnb, fastigheter och verksamhetslokaler. Vi arbetar med riktade hygieninsatser, ATP-mätning och dokumenterad kontroll."
        />
        <meta
          name="keywords"
          content="teknisk rengöring, hygienkontroll hotell, ATP-mätning, hotellrengöring, sanering Airbnb, hygienbehandling, fastighetsrengöring, B2B sanering"
        />
      </Helmet>

      <motion.div className="text-center mb-14 sm:mb-16 md:mb-20" {...fadeInUp}>
        <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-accent mx-auto mb-5 sm:mb-6 md:mb-8" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-4 sm:mb-5 md:mb-6 leading-tight">
          Teknisk rengöring & hygienkontroll
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Riktade hygieninsatser för hotell, Airbnb, fastigheter och
          verksamhetslokaler där vanlig städning inte räcker. Vi kombinerar
          teknisk rengöring, kontrollpunkter och vid behov ATP-mätning för att
          skapa tydligare hygienkontroll.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-14 sm:mb-16 md:mb-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-midnight/5 hover:border-cyan-accent/20 transition-all text-center"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <div className="mb-5 sm:mb-6 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="bg-midnight text-white p-6 sm:p-8 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 md:mb-8 leading-tight">
            Varför teknisk rengöring B2B?
          </h2>
          <p className="text-base sm:text-lg font-light opacity-80 mb-8 sm:mb-10 leading-relaxed">
            I kommersiella miljöer räcker det inte alltid med visuell städning.
            Hotellrum, uthyrningsboenden, personalytor och gemensamma utrymmen
            kan behöva en mer riktad hygieninsats, särskilt efter hög
            belastning, luktproblem, biologisk påverkan eller återkommande
            hygienbrister.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-cyan-accent">
                  Mindre störning i verksamheten
                </h4>
                <p className="font-light opacity-80 leading-relaxed">
                  Arbetet planeras efter lokalens användning, beläggning och
                  praktiska förutsättningar för att minska onödigt stillestånd.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Microscope className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-cyan-accent">
                  Mätbar hygienkontroll
                </h4>
                <p className="font-light opacity-80 leading-relaxed">
                  Vid behov kan ATP-mätning användas på utvalda ytor för att
                  ge ett mätbart underlag på organiska rester före eller efter
                  rengöring. Det ger bättre kontroll än enbart visuell
                  bedömning.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-cyan-accent">
                  Dokumentation efter uppdrag
                </h4>
                <p className="font-light opacity-80 leading-relaxed">
                  Efter utförd insats kan vi lämna en enkel dokumentation över
                  arbetsmetod, behandlade ytor, kontrollpunkter och eventuell
                  mätning. Det skapar spårbarhet för fastighetsägare,
                  hotellansvariga och driftansvariga.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white/5 p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10 text-center"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
            Boka en konsultation
          </h3>
          <p className="text-sm sm:text-base opacity-70 mb-8 sm:mb-10 font-light leading-relaxed">
            Kontakta oss för en första bedömning av lokal, behov och lämplig
            hygieninsats.
          </p>
          <a
            href="tel:0101234567"
            className="inline-flex items-center justify-center gap-3 bg-cyan-accent text-white px-6 sm:px-8 md:px-10 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-cyan-accent/90 transition-all w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Kontakta oss idag
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
