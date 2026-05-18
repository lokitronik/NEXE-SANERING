import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Shield, Heart, Microscope, Truck, UserCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
}; 

const values = [
  {
    icon: <Shield className="w-8 h-8 text-cyan-accent" />,
    title: "Diskretion",
    desc:
      "Vi arbetar med låg profil vid ankomst, diskret kommunikation och respektfull hantering genom hela uppdraget."
  },
  {
    icon: <Heart className="w-8 h-8 text-cyan-accent" />,
    title: "Respekt",
    desc:
      "Vi bemöter varje situation med lugn, respekt och förståelse för att uppdraget ofta sker i en känslig situation."
  },
  {
    icon: <Microscope className="w-8 h-8 text-cyan-accent" />,
    title: "Teknisk noggrannhet",
    desc:
      "Våra arbetssätt bygger på erfarenhet från laboratoriemiljöer, kunskap om biologiska risker, tydliga skyddsrutiner och ett strukturerat arbetssätt."
  }
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
          content="Lär känna Prio Sanering AB. Vi arbetar med specialiserad sanering i krävande och känsliga miljöer med fokus på diskretion, respekt och teknisk noggrannhet."
        />
        <meta
          name="keywords"
          content="om prio sanering, saneringsföretag sverige, specialiserad sanering, diskret sanering, traumasanering, sanering vid dödsfall, biologiska risker, laboratoriemiljö"
        />
      </Helmet>

      {/* Hero */}
      <motion.div className="text-center mb-14 sm:mb-16 md:mb-20" {...fadeInUp}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-4 sm:mb-5 md:mb-6 leading-tight">
          Om Prio Sanering AB
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi är ett specialiserat saneringsföretag med fokus på krävande och
          känsliga miljöer. Vår verksamhet bygger på tre grundpelare:
          diskretion, respekt och teknisk noggrannhet.
        </p>
      </motion.div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-14 sm:mb-16 md:mb-24">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-midnight/5 text-center"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <div className="mb-5 sm:mb-6 flex justify-center">{value.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {value.title}
            </h3>
            <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
              {value.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Discreet handling */}
      <div className="bg-midnight text-white p-6 sm:p-8 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        <motion.div {...fadeInUp}>
          <Truck className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-accent mb-5 sm:mb-6 md:mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 md:mb-8 leading-tight">
            Diskret hantering
          </h2>
          <p className="text-base sm:text-lg font-light opacity-80 mb-8 sm:mb-10 leading-relaxed">
            Vi vet att integritet ofta är en viktig del av uppdraget. Därför
            arbetar vi med låg profil vid ankomst, diskret kommunikation och ett
            respektfullt bemötande genom hela processen.
          </p>
          <div className="flex items-start gap-4">
            <UserCheck className="w-6 h-6 text-cyan-accent flex-shrink-0 mt-1" />
            <span className="font-bold leading-relaxed">
              Personal med utbildning inom laboratoriemiljöer, biologiska risker
              och säkra arbetsrutiner
            </span>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden shadow-2xl min-h-[260px] sm:min-h-[320px]"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000"
            alt="Professionell rengöring och diskret hantering"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
