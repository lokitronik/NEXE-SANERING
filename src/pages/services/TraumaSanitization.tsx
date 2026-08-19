import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Activity, Phone, ShieldCheck, AlertTriangle, ClipboardCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

export default function TraumaSanitization() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Traumasanering | Nexe Sanering AB</title>
        <meta
          name="description"
          content="Professionell traumasanering efter blodspill, olyckor, våldshändelser och andra situationer med biologiska föroreningar. Diskret, säker och respektfull hantering."
        />
        <meta
          name="keywords"
          content="traumasanering, sanering efter blodspill, sanering efter olycka, sanering efter våldshändelse, biologisk sanering, blodsanering, akut sanering"
        />
      </Helmet>

      <motion.div className="text-center mb-20" {...fadeInUp}>
        <Activity className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Traumasanering
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vid blodspill, olyckor, våldshändelser eller andra akuta situationer
          med biologiska föroreningar krävs mer än vanlig städning. Vi arbetar
          snabbt, diskret och metodiskt för att säkra miljön, minska risker och
          återställa platsen på ett tryggt och respektfullt sätt.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div {...fadeInUp}>
          <span className="inline-flex items-center rounded-full bg-cyan-accent/10 text-cyan-accent px-4 py-2 text-sm font-bold mb-6">
            Säker hantering av biologiska risker
          </span>

          <h2 className="text-4xl font-bold mb-8">
            När platsen behöver säkras, saneras och återställas
          </h2>

          <p className="text-lg text-midnight/70 font-light leading-relaxed mb-8">
            Traumasanering kan bli aktuell när blod, kroppsvätskor eller annat
            biologiskt material finns i bostäder, trapphus, fordon, arbetsplatser
            eller andra miljöer. Sådana situationer kan innebära både hygieniska
            risker och stark emotionell belastning för de berörda.
          </p>

          <p className="text-lg text-midnight/70 font-light leading-relaxed mb-8">
            Vi arbetar med tydliga skyddsrutiner, rätt utrustning och ett
            strukturerat arbetssätt. Målet är att begränsa exponering, sanera
            påverkade ytor och skapa en trygg miljö igen, utan onödig uppmärksamhet.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <AlertTriangle className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
              <p className="text-midnight/70 font-light">
                Bedömning av risk, omfattning och vilka ytor eller material som
                behöver saneras, säkras eller tas bort.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
              <p className="text-midnight/70 font-light">
                Säker hantering av blod, kroppsvätskor och biologiskt material
                med fokus på hygien, skydd och kontrollerad sanering.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <ClipboardCheck className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
              <p className="text-midnight/70 font-light">
                Metodiskt arbete med dokumentation, diskret närvaro och tydlig
                kommunikation genom hela uppdraget.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
              <p className="text-midnight/70 font-light">
                Vid behov kan teknisk rengöring och luktreducerande åtgärder
                läggas till för en mer komplett återställning.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-midnight/5"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <img
            src="https://i.imgur.com/6AS5NeW_d.webp?maxwidth=760&fidelity=grand"
            alt="Diskret och professionell traumasanering"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <motion.div
        className="bg-midnight text-white p-12 md:p-20 rounded-[3rem] text-center"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8">Behöver du snabb hjälp?</h2>
        <p className="text-xl font-light opacity-80 mb-12 max-w-2xl mx-auto">
          Kontakta oss för en första bedömning. Vi hanterar situationen med
          diskretion, säkerhet och respekt för både platsen och de personer som
          berörs.
        </p>
        <a
          href="tel:0101234567"
          className="inline-flex items-center gap-3 bg-cyan-accent text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-accent/90 transition-all"
        >
          <Phone className="w-6 h-6" />
          Ring: 010-XXX XX XX
        </a>
      </motion.div>
    </motion.div>
  );
}
