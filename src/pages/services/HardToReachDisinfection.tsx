import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Maximize, ShieldCheck, Phone, Search, Target, Layers } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const features = [
  { icon: <Search className="w-8 h-8 text-cyan-accent" />, title: "Dolda utrymmen", desc: "Vi når bakom paneler, under golv och inuti ventilationssystem där patogener kan gömma sig." },
  { icon: <Target className="w-8 h-8 text-cyan-accent" />, title: "Precisionsmetoder", desc: "Användning av specialutrustning för att säkerställa att varje millimeter blir sanerad." },
  { icon: <Layers className="w-8 h-8 text-cyan-accent" />, title: "Förebyggande skydd", desc: "Behandling som inte bara dödar befintliga hot utan också förhindrar ny tillväxt." }
];

export default function HardToReachDisinfection() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Svåråtkomliga ytor | Nexe Sanering AB - Specialiserad Desinfektion</title>
        <meta name="description" content="Specialiserad desinfektion av dolda och svåråtkomliga utrymmen. Vi når där andra går bet för att säkerställa en helt smittfri miljö." />
        <meta name="keywords" content="desinfektion svåråtkomliga ytor, sanering dolda utrymmen, teknisk rengöring, smittskydd" />
      </Helmet>
      
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <Maximize className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Svåråtkomliga ytor</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Många av de farligaste patogenerna gömmer sig där vi inte ser dem. Vi erbjuder teknisk expertis för att sanera dolda och svåråtkomliga utrymmen med absolut precision.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 p-10 rounded-3xl border-2 border-midnight/5 hover:border-cyan-accent/20 transition-all text-center"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <div className="mb-6 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-midnight/60 font-light leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-midnight text-white p-12 md:p-20 rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8">Varför sanera dolda ytor?</h2>
          <p className="text-lg font-light opacity-80 mb-10 leading-relaxed">
            Smittspridning och dålig lukt har ofta sin källa i utrymmen som förbises vid vanlig städning. Vår metodik säkerställer att även de mest svåråtkomliga vrårna blir kliniskt rena. Vi använder avancerad dimningsteknik och specialverktyg för att garantera ett fullgott resultat.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Eliminering av dolda smittkällor.</p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Långsiktigt skydd mot mögel och bakterietillväxt.</p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Fullständig dokumentation av utfört arbete.</p>
            </li>
          </ul>
        </motion.div>
        <motion.div 
          className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Teknisk rådgivning</h3>
          <p className="opacity-60 mb-10 font-light">Vi hjälper dig att identifiera riskområden i din fastighet och tar fram en skräddarsydd saneringsplan.</p>
          <a 
            href="tel:0101234567" 
            className="inline-flex items-center gap-3 bg-cyan-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-accent/90 transition-all"
          >
            <Phone className="w-5 h-5" />
            Boka besiktning
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
