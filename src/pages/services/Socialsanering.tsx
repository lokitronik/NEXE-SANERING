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
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    ease: [0.25, 1, 0.5, 1] as const,
  },
};

const process = [
  {
    icon: ClipboardCheck,
    title: "Bedömning",
    desc: "Vi går igenom bostaden, omfattningen och eventuella risker innan arbetet planeras.",
  },
  {
    icon: Trash2,
    title: "Rensning",
    desc: "Avfall och skadat material tas om hand metodiskt och diskret. Hantering av personliga tillhörigheter sker enligt överenskommelse.",
  },
  {
    icon: ShieldCheck,
    title: "Sanering",
    desc: "Påverkade ytor behandlas för att minska lukt, smuts och biologisk belastning.",
  },
];

const helpItems = [
  "Kraftig ansamling av föremål eller avfall",
  "Lukt, smuts eller biologisk belastning",
  "Dödsbo, anhöriguppdrag eller socialtjänstärenden",
  "Sortering av personliga tillhörigheter",
  "Diskret hantering utan dömande",
  "Dokumentation vid behov",
];

const collaborationSteps = [
  {
    icon: ClipboardCheck,
    phase: "Före",
    company: "EXHALE",
    title: "Förbereda",
    desc: "Stöd med att gå igenom tillhörigheter, sortera och fatta beslut om vad som ska sparas inför saneringen.",
  },
  {
    icon: ShieldCheck,
    phase: "Under",
    company: "NEXE",
    title: "Återställa",
    desc: "Tömning, bortforsling och specialiserad rengöring samt sanering och luktbehandling vid behov.",
  },
  {
    icon: HeartHandshake,
    phase: "Efter",
    company: "EXHALE",
    title: "Bibehålla",
    desc: "Hjälp att organisera hemmet och skapa praktiska rutiner som gör det lättare att behålla ordningen över tid.",
  },
];

export default function Socialsanering() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 md:px-10 md:py-24 lg:px-12"
    >
      <Helmet>
        <title>
          Socialsanering & hoarder-städning | NEXE SPECIALSANERING
        </title>

        <meta
          name="description"
          content="Professionell socialsanering och hoarder-städning med diskretion och respekt. I samarbete med EXHALE erbjuder vi även stöd med sortering och organisering av hemmet."
        />

        <meta
          name="keywords"
          content="socialsanering, hoarder-städning, hoarder sanering, sanering nedskräpad bostad, diogenes sanering, luktsanering, biologisk sanering, rensning bostad"
        />
      </Helmet>

      {/* Introduktion */}
      <motion.section
        className="mb-12 sm:mb-16 md:mb-20"
        {...fadeInUp}
      >
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cyan-accent/10 px-3.5 py-2 text-xs font-bold text-cyan-accent sm:text-sm">
            <Users2 className="h-4 w-4" aria-hidden="true" />
            Socialsanering & hoarder-städning
          </div>

          <h1 className="mb-5 text-3xl font-extrabold leading-tight text-midnight sm:text-4xl md:text-5xl lg:text-6xl">
            När en bostad behöver tas om hand med respekt och struktur
          </h1>

          <p className="max-w-3xl text-base font-light leading-relaxed text-midnight/65 sm:text-lg md:text-xl">
            Vi hjälper till när en bostad har blivit svår att hantera på
            grund av ansamling av föremål, lukt, smuts eller biologisk
            belastning. Arbetet utförs diskret, metodiskt och utan dömande.
          </p>

          <div className="mt-7 sm:mt-9">
            <a
              href="tel:0101234567"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-midnight px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-midnight/90 sm:w-auto sm:text-base"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Ring oss
            </a>
          </div>
        </div>
      </motion.section>

      {/* Bemötande och hjälpområden */}
      <section className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 sm:gap-8 md:mb-20 md:gap-10 lg:grid-cols-12">
        <motion.div
          className="rounded-[1.75rem] bg-midnight p-6 text-white sm:p-8 md:rounded-[2rem] md:p-10 lg:col-span-5"
          {...fadeInUp}
        >
          <HeartHandshake
            className="mb-5 h-10 w-10 text-cyan-accent sm:h-12 sm:w-12"
            aria-hidden="true"
          />

          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Vi arbetar utan dömande
          </h2>

          <p className="text-base font-light leading-relaxed text-white/75 sm:text-lg">
            Bakom en bostad med omfattande ansamling finns ofta en
            mänsklig situation. Därför arbetar vi lugnt, respektfullt och
            med fokus på trygghet, inte skuld eller skam.
          </p>
        </motion.div>

        <motion.div
          className="py-2 lg:col-span-7 lg:py-4"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <h2 className="mb-5 text-2xl font-bold text-midnight sm:text-3xl">
            Vi kan hjälpa vid
          </h2>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {helpItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-accent"
                  aria-hidden="true"
                />

                <p className="text-sm leading-relaxed text-midnight/70 sm:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Saneringsprocess */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          {...fadeInUp}
        >
          <h2 className="mb-3 text-2xl font-bold text-midnight sm:text-3xl md:text-4xl">
            Så arbetar vi
          </h2>

          <p className="max-w-2xl text-base font-light leading-relaxed text-midnight/60 sm:text-lg">
            Varje uppdrag anpassas efter bostadens skick, risknivå och
            kundens behov.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-midnight/5 bg-slate-50 p-5 sm:p-7 md:p-8"
                {...fadeInUp}
                transition={{
                  ...fadeInUp.transition,
                  delay: index * 0.1,
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-accent/10 text-sm font-bold text-cyan-accent">
                    {index + 1}
                  </span>

                  <Icon
                    className="h-6 w-6 text-cyan-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-midnight sm:text-2xl">
                  {item.title}
                </h3>

                <p className="text-sm font-light leading-relaxed text-midnight/60 sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Samarbete med EXHALE */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        aria-labelledby="exhale-heading"
        className="mb-12 overflow-hidden rounded-[1.75rem] bg-midnight text-white sm:mb-16 md:mb-20 md:rounded-[2rem]"
      >
        <div className="p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cyan-accent sm:text-sm">
                NEXE Specialsanering × EXHALE
              </p>

              <h2
                id="exhale-heading"
                className="mb-5 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl"
              >
                Stöd hela vägen till ett mer fungerande hem
              </h2>

              <p className="text-base font-light leading-relaxed text-white/75 sm:text-lg">
                Vid omfattande ansamling kan det behövas hjälp både med
                att återställa bostaden och med att hantera tillhörigheter.
                I vårt samarbete med EXHALE kombinerar vi specialiserad
                sanering med stöd kring sortering och organisering av
                hemmet, utifrån personens behov och situation.
              </p>
            </div>

            <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-center">
              <span className="text-sm text-white/60">
                I samarbete med
              </span>

              <a
                href="https://andasuthemma.se/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Besök EXHALEs webbplats (öppnas i en ny flik)"
                className="block w-full max-w-[280px] rounded-lg transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-accent"
              >
                <img
                  src={`${import.meta.env.BASE_URL}EXHALE.png`}
                  alt="EXHALE – Andas ut hemma"
                  loading="lazy"
                  className="block h-auto w-full object-contain"
                />
              </a>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-7 border-t border-white/15 pt-8 sm:mt-12 sm:pt-10 md:grid-cols-3 md:gap-8">
            {collaborationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title}>
                  <div className="mb-4 flex items-center gap-3">
                    <Icon
                      className="h-6 w-6 shrink-0 text-cyan-accent"
                      aria-hidden="true"
                    />

                    <p className="text-xs font-bold uppercase tracking-widest text-white/65 sm:text-sm">
                      {step.phase} · {step.company}
                    </p>
                  </div>

                  <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="text-sm font-light leading-relaxed text-white/75 sm:text-base">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 border-t border-white/15 pt-6 sm:mt-10 sm:pt-8">
            <p className="max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
              Insatsen anpassas efter varje situation. NEXE ansvarar för
              saneringsarbetet, medan EXHALE erbjuder stöd med sortering
              och organisering av hemmet.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Kontakt */}
      <motion.section
        className="rounded-[1.75rem] border border-midnight/5 bg-slate-50 p-6 sm:p-10 md:rounded-[3rem] md:p-14"
        {...fadeInUp}
      >
        <div className="max-w-4xl">
          <h2 className="mb-5 text-2xl font-bold text-midnight sm:text-3xl md:text-4xl">
            Behöver du hjälp med en bostad som känns svår att hantera?
          </h2>

          <p className="mb-7 max-w-3xl text-base font-light leading-relaxed text-midnight/60 sm:mb-8 sm:text-lg md:text-xl">
            Kontakta oss för en första bedömning. Vi hjälper dig att
            förstå vad som behöver göras och hur arbetet kan genomföras
            tryggt, diskret och respektfullt.
          </p>

          <a
            href="tel:0101234567"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan-accent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-cyan-accent/90 sm:w-auto sm:py-5 sm:text-lg"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            010-XXX XX XX
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}
