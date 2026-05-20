import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Box, ShieldCheck, HeartHandshake } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

export default function atillhörigheter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Hantering av personliga tillhörigheter | Prio Sanering AB</title>
        <meta
          name="description"
          content="Vi hanterar personliga tillhörigheter med respekt och omsorg vid sanering efter dödsfall eller trauma. Identifiering, desinfektion, säkring och återlämning på ett tryggt sätt."
        />
        <meta
          name="keywords"
          content="personliga tillhörigheter, hantering dödsfall, sanering dödsfall, respektfull hantering, desinfektion tillhörigheter, traumasanering tillhörigheter"
        />
      </Helmet>

      <motion.div className="text-center mb-14 sm:mb-16 md:mb-20" {...fadeInUp}>
        <Box className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-accent mx-auto mb-5 sm:mb-6 md:mb-8" />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-4 sm:mb-5 md:mb-6 leading-tight">
          Hantering av personliga tillhörigheter
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vid sanering efter dödsfall eller trauma kan personliga tillhörigheter
          ha både praktiskt och emotionellt värde. Vi hanterar föremål med
          respekt, diskretion och omsorg, från identifiering och säkring till
          eventuell desinfektion och återlämning.
        </p>
      </motion.div>

      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center max-w-6xl mx-auto mb-14 sm:mb-16 md:mb-20"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.1 }}
      >
        <div className="bg-slate-50 rounded-[2rem] border border-midnight/5 p-4 sm:p-5 md:p-6 shadow-sm">
          <img
            src="https://i.imgur.com/4eaPmXY_d.webp?maxwidth=760&fidelity=grand"
            alt="Prio Sanering låda för personliga tillhörigheter"
            className="w-full h-auto rounded-[1.5rem] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div>
          <span className="inline-flex items-center rounded-full bg-cyan-accent/10 text-cyan-accent px-4 py-2 text-sm font-bold mb-5 sm:mb-6">
            Trygg och respektfull hantering
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-5 sm:mb-6 leading-tight">
            Föremål tas om hand på ett säkert, rent och värdigt sätt
          </h2>

          <p className="text-base sm:text-lg text-midnight/65 font-light leading-relaxed mb-6">
            När personliga tillhörigheter behöver tas om hand arbetar vi
            strukturerat och varsamt. Föremål som kan sparas separeras från
            saneringsarbetet, hanteras med skyddsrutiner och placeras i en
            särskild låda för vidare bedömning, desinfektion och återlämning
            enligt överenskommelse.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-midnight/70 leading-relaxed">
                Föremål hanteras med fokus på hygien, säkerhet och minskad
                smittorisk.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <HeartHandshake className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-midnight/70 leading-relaxed">
                Personliga saker behandlas med varsamhet, diskretion och respekt
                för situationen.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
        <motion.div
          className="bg-slate-50 p-6 sm:p-8 rounded-2xl border-2 border-midnight/5"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <h4 className="font-bold mb-3 sm:mb-4 text-cyan-accent text-lg">
            Identifiering
          </h4>
          <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
            Vi hjälper till att identifiera dokument, fotografier och personliga
            föremål som bör tas om hand separat från saneringsarbetet.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-50 p-6 sm:p-8 rounded-2xl border-2 border-midnight/5"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <h4 className="font-bold mb-3 sm:mb-4 text-cyan-accent text-lg">
            Säkring och återlämning
          </h4>
          <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
            Vid behov desinficeras och säkras tillhörigheter med målet att de
            ska kunna återlämnas eller tas om hand på ett tryggt och
            respektfullt sätt.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
