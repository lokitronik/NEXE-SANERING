import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Box } from "lucide-react";

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
        <title>Hantering av a tillhörigheter | Prio Sanering AB</title>
        <meta
          name="description"
          content="Vi hanterar a tillhörigheter med respekt och omsorg vid sanering efter dödsfall eller trauma. Identifiering, säkring och återlämning på ett tryggt sätt."
        />
        <meta
          name="keywords"
          content="a tillhörigheter, hantering dödsfall, sanering dödsfall, respektfull hantering, minneshantering, traumasanering tillhörigheter"
        />
      </Helmet>

      <motion.div className="text-center mb-14 sm:mb-16 md:mb-20" {...fadeInUp}>
        <Box className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-accent mx-auto mb-5 sm:mb-6 md:mb-8" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-4 sm:mb-5 md:mb-6 leading-tight">
          Hantering av a tillhörigheter
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vid sanering efter dödsfall eller trauma handlar arbetet inte bara om
          miljön i sig. a tillhörigheter kan ha stort praktiskt och
          emotionellt värde. Vi arbetar därför med en respektfull process för
          att identifiera, hantera och vid behov säkra föremål efter
          överenskommelse.
        </p>
      </motion.div>

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
            Vi hjälper till att identifiera dokument, fotografier och a
            föremål som bör tas om hand separat från saneringsarbetet.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-50 p-6 sm:p-8 rounded-2xl border-2 border-midnight/5"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <h4 className="font-bold mb-3 sm:mb-4 text-cyan-accent text-lg">
            Säkring
          </h4>
          <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
            Vid behov hanteras tillhörigheter med målet att de ska kunna
            återlämnas eller tas om hand på ett tryggt och respektfullt sätt.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
