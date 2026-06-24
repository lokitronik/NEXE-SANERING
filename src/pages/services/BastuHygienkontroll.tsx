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
    title: "Inspektion",
    desc:
      "Genomgång av bastuns skick, material, fuktbelastning och hygienkritiska zoner.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-accent" />,
    step: "2",
    title: "Riskbedömning",
    desc:
      "Identifiering av biofilm, luktproblem och ytor med hög hygienbelastning.",
  },
  {
    icon: <Shield className="w-6 h-6 text-cyan-accent" />,
    step: "3",
    title: "Djupgående rengöring",
    desc:
      "Torrånga och mekanisk behandling för att avlägsna smuts och organiska rester.",
  },
  {
    icon: <Wind className="w-6 h-6 text-cyan-accent" />,
    step: "4",
    title: "Hygienbehandling",
    desc:
      "Skonsam desinfektion anpassad för trä och känsliga ytor i bastumiljöer.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-cyan-accent" />,
    step: "5",
    title: "Kontroll",
    desc:
      "Avslutande kontroll och säkerställande av hygienstandard.",
  },
];

const includedItems = [
  "Bastulavar och sittytor",
  "Ryggstöd och träpaneler",
  "Hygienkritiska kontaktzoner",
  "Golvyta och dräneringsområden",
  "Biofilm och organiska beläggningar",
  "Luktrelaterade problemområden",
];

export default function BastuHygienkontroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Bastu – teknisk hygienbehandling | Prio Sanering AB</title>
        <meta
          name="description"
          content="Teknisk hygienbehandling av bastu och wellnessmiljöer. Djupgående rengöring av träytor, biofilm och hygienkritiska zoner."
        />
      </Helmet>

      {/* HERO */}
      <motion.section className="mb-12 sm:mb-16 md:mb-20" {...fadeInUp}>
        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-cyan-accent/10 text-cyan-accent font-bold text-xs sm:text-sm mb-5">
          <Wind className="w-4 h-4" />
          Bastu & Wellness
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-5 leading-tight">
          Teknisk hygienbehandling av bastu
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-midnight/65 font-light leading-relaxed max-w-3xl">
          Bastumiljöer utsätts dagligen för hög värme, fukt, svett och
          organiska partiklar. Vi utför teknisk hygienbehandling som går
          djupare än vanlig städning och återställer hygienstandarden i
          träbaserade wellnessmiljöer.
        </p>

        <div className="mt-7">
          <a
            href="tel:0101234567"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-midnight text-white px-6 py-4 font-bold hover:bg-midnight/90 transition w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Kontakta oss
          </a>
        </div>
      </motion.section>

      {/* DARK BLOCK */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <motion.div
          className="bg-midnight text-white p-6 sm:p-10 md:p-14 rounded-[1.75rem] md:rounded-[2rem]"
          {...fadeInUp}
        >
          <HeartHandshake className="w-10 h-10 text-cyan-accent mb-5" />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Mer än vanlig rengöring
          </h2>

          <p className="text-white/75 font-light leading-relaxed">
            Bastur kombinerar extrem värme och hög luftfuktighet med daglig
            användning. Detta skapar en miljö där träytor absorberar fukt,
            svett och organiska rester som över tid kan bilda biofilm,
            luktproblem och försämrad hygienstandard.
            <br />
            <br />
            Vanlig städning når inte djupt in i porösa träytor. Därför
            använder vi tekniska hygienmetoder som rengör på djupet utan att
            skada materialet.
          </p>
        </motion.div>
      </section>

      {/* INCLUDED */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
        <motion.div
          className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 md:p-10 rounded-[1.75rem]"
          {...fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight mb-4">
            Vad ingår
          </h2>

          <div className="space-y-3">
            {includedItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-accent mt-0.5" />
                <p className="text-midnight/70">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="lg:col-span-7" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight mb-5">
            Anpassad teknisk metodik
          </h2>

          <p className="text-midnight/60 leading-relaxed">
            Varje bastu är unik. Material, ventilation, användningsfrekvens
            och fuktnivå påverkar hur hygienbelastningen ser ut. Vi anpassar
            alltid metodiken efter dessa faktorer för att uppnå ett säkert
            och effektivt resultat.
          </p>
        </motion.div>
      </section>

      {/* PROTOCOL */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <motion.div className="mb-8" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-3">
            Saneringsprotokoll
          </h2>

          <p className="text-midnight/60 max-w-2xl">
            Ett strukturerat arbetssätt som säkerställer kvalitet,
            säkerhet och konsekvent resultat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {protocol.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white border border-midnight/5 p-5 sm:p-6 rounded-3xl"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-accent/10 text-cyan-accent font-bold">
                  {item.step}
                </span>
                {item.icon}
              </div>

              <h3 className="font-bold text-midnight mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-midnight/60">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="bg-slate-50 p-6 sm:p-10 md:p-14 rounded-[1.75rem] border border-midnight/5 text-center"
        {...fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-5">
          Behöver ni bastuhygienbehandling?
        </h2>

        <p className="text-midnight/60 max-w-2xl mx-auto mb-8">
          Vi hjälper gym, spa, hotell och wellnessanläggningar att skapa
          renare och mer hygieniska bastumiljöer.
        </p>

        <a
          href="tel:0101234567"
          className="inline-flex items-center justify-center gap-3 bg-midnight text-white px-8 py-4 rounded-full font-bold hover:bg-midnight/90 transition"
        >
          <Phone className="w-5 h-5" />
          Ring oss
        </a>
      </motion.section>
    </motion.div>
  );
}
