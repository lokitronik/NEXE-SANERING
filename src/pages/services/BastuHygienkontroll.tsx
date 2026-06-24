import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Wind,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  Building2,
  Thermometer,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay },
});

export default function BastuHygienkontroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Bastu – teknisk hygienbehandling | Prio Sanering AB</title>
        <meta
          name="description"
          content="Professionell hygienbehandling för bastur, spa och wellnessmiljöer. Djupgående rengöring av träytor, biofilm och hygienkritiska kontaktzoner."
        />
      </Helmet>

      {/* HERO */}
      <motion.section {...fadeUp(0)}>
        <div className="flex items-center gap-2 text-cyan-accent mb-6">
          <Wind className="w-5 h-5" />
          <span className="uppercase text-sm font-bold tracking-widest">
            Bastu & Wellness
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-midnight mb-6 max-w-5xl">
          Professionell hygienbehandling för bastur och wellnessmiljöer
        </h1>

        <p className="text-lg text-midnight/70 max-w-3xl leading-relaxed">
          Bastur utsätts dagligen för höga temperaturer, fukt, svett och
          organiska föroreningar. Vi hjälper gym, spa, hotell och
          wellnessanläggningar att upprätthålla en hög hygienstandard genom
          professionell rengöring och teknisk hygienbehandling av träytor och
          hygienkritiska kontaktzoner.
        </p>
      </motion.section>

      {/* STATS */}
      <motion.section
        {...fadeUp(0.1)}
        className="grid md:grid-cols-3 gap-6 mt-16"
      >
        <div className="bg-slate-50 rounded-3xl p-8 text-center">
          <div className="text-5xl font-bold text-cyan-accent">90°C+</div>
          <p className="mt-2 text-midnight/70">
            Temperaturer som belastar material och ytor
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 text-center">
          <div className="text-5xl font-bold text-cyan-accent">100%</div>
          <p className="mt-2 text-midnight/70">
            Fokus på hygienkritiska kontaktzoner
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 text-center">
          <div className="text-5xl font-bold text-cyan-accent">ATP</div>
          <p className="mt-2 text-midnight/70">
            Verifiering och dokumentation vid behov
          </p>
        </div>
      </motion.section>

      {/* PROBLEM */}
      <motion.section
        {...fadeUp(0.15)}
        className="mt-20 bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-10"
      >
        <h2 className="text-3xl font-bold text-midnight mb-6">
          Varför kräver bastur särskild hygienkontroll?
        </h2>

        <p className="text-midnight/70 leading-relaxed mb-4">
          Bastumiljöer skiljer sig från vanliga utrymmen genom kombinationen av
          extrem värme, hög luftfuktighet och intensiv användning. Träytor
          absorberar fukt, svett och organiska rester som över tid kan skapa
          biofilm, missfärgningar och oönskade lukter.
        </p>

        <p className="text-midnight/70 leading-relaxed">
          Traditionell städning når ofta inte föroreningar som tränger in i
          porösa träytor. Därför krävs specialanpassade metoder som rengör på
          djupet utan att skada träets struktur eller livslängd.
        </p>
      </motion.section>

      {/* CONTENT GRID */}
      <section className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="bg-slate-50 p-6 rounded-3xl">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-accent" />
            Vad behandlas?
          </h3>

          <ul className="text-sm text-midnight/70 space-y-3">
            <li>Bastulavar och sittytor</li>
            <li>Ryggstöd och träpaneler</li>
            <li>Kontaktzoner med hög belastning</li>
            <li>Fuktutsatta träytor</li>
            <li>Golvyta och dränering</li>
            <li>Områden med luktproblem</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-accent" />
            Behandlingsmetod
          </h3>

          <ul className="text-sm text-midnight/70 space-y-3">
            <li>Torrånga för djupgående rengöring</li>
            <li>Mekanisk borttagning av biofilm</li>
            <li>Professionell ytdesinfektion</li>
            <li>Skonsam behandling av trä</li>
            <li>Kontroll av hygienkritiska zoner</li>
            <li>ATP-verifiering vid behov</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-cyan-accent" />
            Resultat
          </h3>

          <ul className="text-sm text-midnight/70 space-y-3">
            <li>Renare träytor</li>
            <li>Minskad organisk belastning</li>
            <li>Reducerade luktproblem</li>
            <li>Förbättrad hygienupplevelse</li>
            <li>Ökad livslängd på inredningen</li>
            <li>Professionellt intryck för gäster</li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-midnight mb-10">
          Så går behandlingen till
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Inspektion",
              text: "Kartläggning av hygienrisker, material och belastade områden.",
            },
            {
              step: "02",
              title: "Djup rengöring",
              text: "Avlägsnande av smuts, biofilm och organiska rester.",
            },
            {
              step: "03",
              title: "Hygienbehandling",
              text: "Specialanpassad behandling av träytor och kontaktzoner.",
            },
            {
              step: "04",
              title: "Kontroll",
              text: "Slutkontroll och verifiering av utfört arbete.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white border border-slate-100 rounded-3xl p-6"
            >
              <div className="text-4xl font-bold text-cyan-accent mb-4">
                {item.step}
              </div>

              <h3 className="font-bold mb-2">{item.title}</h3>

              <p className="text-sm text-midnight/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TARGET CLIENTS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-midnight mb-8">
          Passar för
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Gym och träningsanläggningar",
            "Spa och wellnesscenter",
            "Hotell",
            "Bostadsrättsföreningar",
            "Idrottshallar",
            "Privata exklusiva bastur",
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-50 rounded-2xl p-5 flex items-center gap-3"
            >
              <Building2 className="w-5 h-5 text-cyan-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mt-24">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-3xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-10">
            Fördelar med professionell bastuhygien
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2">
                Förbättrad upplevelse
              </h3>
              <p className="text-white/80">
                Renare ytor, bättre luftkvalitet och minskade luktproblem.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Skyddar investeringar
              </h3>
              <p className="text-white/80">
                Förlänger livslängden på träytor och bastuinredning.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Högre hygienstandard
              </h3>
              <p className="text-white/80">
                Reducerar biofilm och organiska föroreningar.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Professionellt intryck
              </h3>
              <p className="text-white/80">
                Skapar en trygg och välskött miljö för gäster och medlemmar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.div
        {...fadeUp(0.2)}
        className="mt-24 bg-midnight text-white p-10 md:p-14 rounded-3xl text-center"
      >
        <Thermometer className="w-10 h-10 mx-auto mb-4 text-cyan-accent" />

        <h2 className="text-3xl font-bold mb-4">
          Behöver ni professionell bastuhygien?
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          Vi hjälper gym, hotell, spa och wellnessanläggningar att skapa
          renare, säkrare och mer inbjudande bastumiljöer.
        </p>

        <a
          href="tel:0101234567"
          className="inline-flex bg-cyan-accent hover:opacity-90 transition px-8 py-4 rounded-full font-bold"
        >
          Kontakta oss idag
        </a>
      </motion.div>
    </motion.div>
  );
}
```
