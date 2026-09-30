import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Bird, ShieldCheck, Phone, Home, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

export default function BirdBlocker() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Bird Blocker & Fågelsäkring | NEXE SPECIALSANERING</title>
        <meta name="description" content="Skydda din fastighet mot fåglar med Bird Blocker och andra förebyggande installationer. Vi erbjuder effektiva lösningar för att undvika skador och smitta." />
        <meta name="keywords" content="bird blocker, fågelsäkring, sanering fågelträck, skydda tak mot fåglar, fågelpinnar" />
      </Helmet>
      
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <Bird className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Bird Blocker & Fågelsäkring</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Fåglar kan orsaka betydande skador på fastigheter och sprida smitta. Vi erbjuder professionella installationer av Bird Blocker och andra system för att hålla din fastighet ren och säker.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8">Förebyggande fastighetsskydd</h2>
          <p className="text-lg text-midnight/70 font-light leading-relaxed mb-8">
            Våra lösningar är diskreta men extremt effektiva. Vi installerar Bird Blocker under solpaneler, på takåsar och andra platser där fåglar tenderar att bygga bo eller samlas. Detta förhindrar inte bara fysiska skador utan minskar också behovet av kostsam sanering av fågelträck.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">Installation av Bird Blocker under solpaneler för att förhindra bobyggande.</p>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">Montering av fågelpinnar och nät på utsatta ytor.</p>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">Sanering av befintliga fågelträck och desinfektion av ytorna.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-slate-50 p-12 rounded-3xl border-2 border-midnight/5 sticky top-32"
          {...fadeInUp}
        >
          <div className="mb-8 flex justify-center">
            <Home className="w-12 h-12 text-cyan-accent" />
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">Skydda din investering</h2>
          <p className="text-midnight/70 font-light leading-relaxed mb-10 text-center">
            Fågelträck är frätande och kan skada takmaterial och solpaneler över tid. Genom att installera förebyggande skydd sparar du pengar på lång sikt och bibehåller fastighetens värde.
          </p>
          <div className="mt-12 pt-12 border-t border-midnight/10">
            <p className="text-midnight/60 mb-6 font-medium text-center">Vill du veta mer om våra lösningar?</p>
            <a 
              href="tel:0760079796" 
              className="flex items-center justify-center gap-3 bg-cyan-accent text-white py-4 rounded-full font-bold text-lg hover:bg-cyan-accent/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              Kontakta en expert
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
