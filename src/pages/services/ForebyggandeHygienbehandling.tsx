import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Sparkles, Shield, Wind, CheckCircle2, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
};

export default function ForebyggandeHygienbehandling() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Förebyggande hygienbehandling | Prio Sanering AB</title>
        <meta
          name="description"
          content="Förebyggande hygienbehandling med torrånga, teknisk rengöring och hydroxylbehandling för sommarstugor, bostäder, uthyrningsmiljöer och andra utrymmen med luktproblem, stillastående luft eller behov av teknisk hygieninsats."
        />
        <meta
          name="keywords"
          content="förebyggande hygienbehandling, torrånga, hydroxylbehandling, hydroxylteknik, luktproblem, sommarstuga, fritidshus, hygieninsats, teknisk rengöring, förebyggande sanering"
        />
      </Helmet>

      {/* Hero */}
      <motion.div className="text-center mb-14 sm:mb-16 md:mb-20" {...fadeInUp}>
        <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-accent mx-auto mb-5 sm:mb-6 md:mb-8" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight mb-4 sm:mb-5 md:mb-6 leading-tight">
          Förebyggande hygienbehandling
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          En teknisk och förebyggande behandling med torrånga, teknisk
          rengöring och hydroxylteknik för utrymmen där lukt, stillastående
          luft, säsongsstängda miljöer eller hygienisk belastning kräver mer än
          vanlig rengöring.
        </p>
      </motion.div>

      {/* Main intro */}
      <div className="mb-14 sm:mb-16 md:mb-24">
        <motion.div
          className="bg-slate-50 p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border border-midnight/5 shadow-sm"
          {...fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-midnight leading-tight">
                Torrånga, teknisk rengöring och hydroxylteknik
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-light text-midnight/80 leading-relaxed">
                Behandlingen kombinerar torrånga på utvalda ytor med teknisk
                rengöring och hydroxylteknik som kompletterande metod för
                luktbehandling och förbättrad inomhusmiljö. Den lämpar sig
                särskilt för miljöer som stått stängda under längre perioder,
                för utrymmen med kvarvarande lukt eller där man vill göra en
                teknisk hygieninsats innan rummet tas i bruk igen.
              </p>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-midnight/70 font-light leading-relaxed">
                    Torrånga används på utvalda ytor, textilier, kontaktpunkter
                    och svåråtkomliga områden där vanlig rengöring inte räcker.
                  </p>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-midnight/70 font-light leading-relaxed">
                    Hydroxylteknik används som kompletterande behandling av luft
                    och lukt, alltid efter bedömning av utrymme, material,
                    ventilation och behov.
                  </p>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-midnight/70 font-light leading-relaxed">
                    Behandlingen kan vara relevant i miljöer där man vill arbeta
                    förebyggande mot kvarvarande hygienproblem i textilier,
                    springor, kontaktpunkter och utvalda ytor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-3xl shadow-sm border border-midnight/5">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-midnight">
                Typiska användningsområden
              </h3>
              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
                  Sommarstugor, fritidshus och bostäder som stått stängda under
                  längre perioder
                </p>
                <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
                  Utrymmen med kvarvarande lukt av instängd luft, fukt, djur,
                  rök eller stillastående miljö
                </p>
                <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
                  Tillfälligt boende, uthyrningsmiljöer och rum med återkommande
                  användning
                </p>
                <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
                  Utvalda professionella miljöer där förebyggande hygien och
                  luktkontroll är viktiga inför ny användning
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-14 sm:mb-16 md:mb-24">
        <motion.div
          className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <Shield className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-cyan-accent mb-4 sm:mb-5 md:mb-6" />
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Kontrollerad metod
          </h3>
          <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
            Behandlingen utförs metodiskt och anpassas efter utrymme, material,
            användning och praktiska riskfaktorer.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <Wind className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-cyan-accent mb-4 sm:mb-5 md:mb-6" />
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Lukt och miljö
          </h3>
          <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
            Hydroxylteknik används som ett tekniskt komplement när luktproblem,
            instängd luft och stillastående miljöer kräver mer än vanlig
            rengöring.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-cyan-accent mb-4 sm:mb-5 md:mb-6" />
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Förebyggande fokus
          </h3>
          <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
            En teknisk insats för utrymmen där man vill minska lukt,
            smutsbelastning och hygieniska störningar innan de växer vidare.
          </p>
        </motion.div>
      </div>

      {/* Seasonal angle */}
      <div className="bg-slate-50 p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] mb-14 sm:mb-16 md:mb-24">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 md:mb-8 text-midnight leading-tight">
            Särskilt relevant inför säsong och återöppning
          </h2>
          <p className="text-base sm:text-lg text-midnight/65 font-light leading-relaxed">
            I Sverige används många bostäder, fritidshus och tillfälliga boenden
            periodvis. När ett utrymme öppnas igen efter längre stillestånd kan
            lukt, instängd luft, smutsbelastning och hygieniska störningar i
            textilier och ytor bli tydliga. En förebyggande behandling med
            torrånga, teknisk rengöring och hydroxylteknik kan då vara ett
            tekniskt komplement innan utrymmet tas i bruk igen.
          </p>
        </motion.div>
      </div>

      {/* Important to know */}
      <div className="bg-slate-50 p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] mb-14 sm:mb-16 md:mb-24">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center leading-tight"
          {...fadeInUp}
        >
          Viktigt att känna till
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <motion.div className="flex gap-4 sm:gap-5 md:gap-6" {...fadeInUp}>
            <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                Hydroxylteknik bedöms från fall till fall
              </h4>
              <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
                Behandlingen anpassas efter utrymme, material, ventilation och
                användning. Hydroxylteknik kan i många fall vara ett mer
                skonsamt alternativ än ozon, men varje insats bedöms utifrån
                säkerhet, luktbild och praktiska förutsättningar.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-4 sm:gap-5 md:gap-6"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
          >
            <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                Bedömning från fall till fall
              </h4>
              <p className="text-sm sm:text-base text-midnight/60 font-light leading-relaxed">
                Metoden anpassas efter utrymmets storlek, material, luktbild,
                användning och behov av kompletterande behandling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="bg-midnight text-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] text-center"
        {...fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 md:mb-8 leading-tight">
          Behöver du en förebyggande hygieninsats?
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light opacity-80 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Kontakta oss för en första bedömning av utrymme, behov och lämplig
          metod.
        </p>
        <a
          href="tel:0101234567"
          className="inline-flex items-center justify-center gap-3 bg-cyan-accent text-white px-6 sm:px-8 md:px-12 py-4 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl hover:bg-cyan-accent/90 transition-all shadow-xl shadow-cyan-accent/20 w-full sm:w-auto"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          Kontakta oss
        </a>
      </motion.div>
    </motion.div>
  );
}
