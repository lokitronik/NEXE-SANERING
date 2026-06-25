import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Wind,
  ShieldAlert,
  Sparkles,
  CheckCircle,
  MapPin,
  Phone,
  FileCheck,
  Flame,
  ShieldCheck,
  Activity,
  Heart,
  Droplets,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export default function BastuHygienkontroll() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <Helmet>
        <title>Bastuhygien – Teknisk mikrobiell kontroll | Prio Sanering AB</title>
        <meta
          name="description"
          content="Avancerad bastuhygien med teknisk desinfektion, ATP-verifiering och borttagning av biofilm i kommersiella miljöer."
        />
        <meta name="keywords" content="bastuhygien, bastusanering, atp-mätning, desinfektion bastu, biofilm trä, kommersiell bastu, spa hygien" />
      </Helmet>

      {/* HERO SECTION */}
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-accent/10 text-cyan-accent mb-6">
          <Flame className="w-5 h-5 animate-pulse" />
          <span className="uppercase text-xs font-bold tracking-widest">
            Teknisk Hygienkontroll
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6 leading-tight">
          Bastuhygien på mikrobiologisk nivå
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Bastumiljöer är inte bara varma utrymmen. De är biologiska system där
          fukt, värme och organiskt material skapar en stabil miljö för
          biofilm, bakterier och svampsporer som inte försvinner med vanlig städning.
        </p>
      </motion.div>

      {/* PROBLEM & INSIGHT BLOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-stretch">
        <motion.div 
          className="lg:col-span-7 bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-midnight/5 shadow-sm flex flex-col justify-center"
          {...fadeInUp}
        >
          <div className="flex items-center gap-3 text-cyan-accent mb-6">
            <ShieldAlert className="w-8 h-8" />
            <h2 className="text-3xl font-bold text-midnight">
              Problemet som inte syns
            </h2>
          </div>
          <p className="text-lg text-midnight/75 font-light leading-relaxed mb-6">
            De flesta bastur ser rena ut på ytan, men i verkligheten gömmer sig mikrobiella
            beläggningar djupt inne i träets porer. Den höga luftfuktigheten kombinerat med värme 
            och hudrester skapar en grogrund för <span className="font-semibold text-midnight">biofilm</span>.
          </p>
          <p className="text-lg text-midnight/75 font-light leading-relaxed">
            Vanliga rengöringsmedel når inte ner i träets struktur, vilket innebär att patogener 
            och svampsporer överlever. Detta resulterar i lukt, återkommande kontaminering och en 
            gradvis försämring av bastuns trämaterial.
          </p>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 bg-midnight text-white p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/10"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-accent/20 text-cyan-accent text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Biosäkerhetsteknik
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
              Teknisk precision i varje fiber
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start pb-5 border-b border-white/10">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-accent">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">ATP-Mätning</h4>
                  <p className="text-sm text-white/60 font-light mt-0.5">Kvantitativ analys och verifiering i realtid.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-5 border-b border-white/10">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-accent">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Termisk styrning</h4>
                  <p className="text-sm text-white/60 font-light mt-0.5">Temperaturbehandling djupt i träets porer.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-accent">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Biofilmseliminering</h4>
                  <p className="text-sm text-white/60 font-light mt-0.5">Djupgående nedbrytning av skyddande biologiska skikt.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
            <span>DOKUMENTATION: VERIFIERAD</span>
            <span>REV: 2026</span>
          </div>
        </motion.div>
      </div>

      {/* RISK FACTORS - Bento Grid */}
      <div className="mb-24">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-4">
            Mikrobiella riskfaktorer i bastumiljöer
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto font-light">
            Trä är ett levande material som kräver specialiserade metoder för att saneras på djupet.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              title: "Biofilm i trästrukturer",
              desc: "Organiskt material tränger in i träets porer och skapar en skyddad matris för bakterietillväxt.",
              icon: <Droplets className="w-8 h-8 text-cyan-accent" />
            },
            {
              title: "Svampsporer i fuktzoner",
              desc: "Låg värmeexponering vid golvytor och nedre lavar gör att mögel och sporer överlever lättare.",
              icon: <Wind className="w-8 h-8 text-cyan-accent" />
            },
            {
              title: "Värmetoleranta bakterier",
              desc: "Vissa typer av mikroorganismer anpassar sig till värme och överlever normala uppvärmningscykler.",
              icon: <Activity className="w-8 h-8 text-cyan-accent" />
            },
            {
              title: "Ackumulerad luktbelastning",
              desc: "Sura och fränande dofter uppstår från biologisk nedbrytning djupt inne i materialet, inte på ytan.",
              icon: <ShieldAlert className="w-8 h-8 text-cyan-accent" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-slate-50 hover:bg-white border-2 border-midnight/5 hover:border-cyan-accent/30 rounded-3xl p-8 transition-all duration-300 flex flex-col hover:shadow-lg shadow-sm"
            >
              <div className="mb-6 p-3 rounded-2xl bg-white w-fit shadow-sm border border-midnight/5">{item.icon}</div>
              <h3 className="text-xl font-bold text-midnight mb-3">{item.title}</h3>
              <p className="text-midnight/60 font-light text-sm leading-relaxed flex-grow">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* METHOD - High impact Dark Section */}
      <motion.div 
        className="bg-midnight text-white p-12 md:p-20 rounded-[3rem] mb-24 relative overflow-hidden"
        {...fadeInUp}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-10 h-10 text-cyan-accent" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Teknisk desinfektionsprocess
            </h2>
          </div>
          <p className="text-lg md:text-xl font-light opacity-80 mb-14 leading-relaxed max-w-3xl">
            Prio Sanerings metod bygger på avancerad vetenskap. Vi applicerar en flerstegs desinfektionsprocess 
            som bryter ner biofilmen utan att skada det känsliga bastuträet eller lämna hälsofarliga kemikalierester.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "01",
                title: "ATP-verifiering",
                desc: "Kvantitativ mätning av biologisk aktivitet (adenosintrifosfat) utförs före och efter behandling för att ge ett objektivt kvitto på renheten."
              },
              {
                step: "02",
                title: "Termisk djupbehandling",
                desc: "Kontrollerad och patenterad temperaturstyrning som penetrerar träet på djupet och eliminerar inkapslade patogener."
              },
              {
                step: "03",
                title: "Mikrobiell nedbrytning",
                desc: "Miljövänlig och biologiskt nedbrytbar desinfektion som effektivt löser upp och förstör den skyddande biofilmen."
              },
              {
                step: "04",
                title: "Mekanisk precisionsrengöring",
                desc: "Riktad sanering av kontaktytor, fogar, ventiler och dolda fuktzoner där luftcirkulationen är som sämst."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all"
              >
                <div className="text-cyan-accent font-mono text-xs font-bold tracking-widest mb-4">FASE {item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* RESULTS */}
      <div className="mb-24">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-4">
            Mätbara resultat att lita på
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto font-light">
            Vårt mål är att ge dig en bastumiljö som inte bara ser ren ut, utan är biologiskt säker för alla gäster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Reducerad mikrobiell belastning",
              desc: "Vi garanterar en radikal minskning av bakterie- och svampnivåer till ett dokumenterat godkänt ATP-värde."
            },
            {
              title: "Helt neutral doftprofil",
              desc: "Genom att avlägsna källan till lukten (den biologiska nedbrytningen i träet) återfår bastun en frisk och naturlig doft."
            },
            {
              title: "Förlängd livslängd på material",
              desc: "Regelbunden teknisk kontroll förhindrar att svamp och mögel bryter ner träfibrerna, vilket sparar stora renoveringskostnader."
            },
            {
              title: "Garanterad biosäkerhet",
              desc: "Ett stabilt skydd som uppfyller hårda myndighetskrav och bygger ett starkt förtroende hos dina besökare."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-slate-50 border border-midnight/5 p-8 rounded-3xl flex items-start gap-4 hover:shadow-sm transition-all"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
            >
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-midnight mb-2">{item.title}</h3>
                <p className="text-sm text-midnight/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TRUST & CERTIFICATION BOX */}
      <motion.div 
        className="bg-cyan-accent/5 border border-cyan-accent/20 p-8 md:p-12 rounded-[2.5rem] mb-24 flex flex-col md:flex-row gap-8 items-center"
        {...fadeInUp}
      >
        <div className="p-4 bg-white rounded-2xl border border-cyan-accent/10 shrink-0 shadow-sm">
          <FileCheck className="w-12 h-12 text-cyan-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-midnight mb-3">
            Dokumenterad hygienkontroll
          </h3>
          <p className="text-lg text-midnight/70 font-light leading-relaxed max-w-4xl">
            Efter slutförd sanering tillhandahåller vi ett fullständigt ATP-mätprotokoll och ett 
            <span className="font-semibold text-cyan-accent"> Biosäkerhetsintyg</span>. Detta kan användas i ert systematiska 
            arbetsmiljöarbete (SBA), för egenkontroll och som ett tydligt kvitto till era gäster.
          </p>
        </div>
      </motion.div>

      {/* TARGET AUDIENCE / AREAS */}
      <div className="mb-24">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <div className="inline-flex items-center gap-2 text-slate-400 mb-3">
            <MapPin className="w-5 h-5 text-cyan-accent" />
            <span className="text-sm font-semibold text-midnight/60">Användningsområden</span>
          </div>
          <h2 className="text-3xl font-bold text-midnight">För vilka miljöer är detta kritiskt?</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Spa & Wellness", desc: "Premium-anläggningar med höga gästkrav på hygien." },
            { name: "Gym & Träning", desc: "Högintensiv användning som kräver rigorös desinfektion." },
            { name: "Hotell & Resorts", desc: "Skapa en trygg vistelse och stärk ert varumärkesrenommé." },
            { name: "Privata Premiumbastur", desc: "För privatpersoner som vill ha det absolut renaste för familjen." }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border border-midnight/5 p-6 rounded-3xl text-center shadow-sm hover:shadow-md transition-all flex flex-col"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
            >
              <h3 className="font-bold text-midnight mb-2">{item.name}</h3>
              <p className="text-xs text-midnight/50 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <motion.div
        className="bg-midnight text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        {...fadeInUp}
      >
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-accent/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Säkra er hygienstandard idag
          </h2>
          <p className="text-xl font-light text-white/70 mb-10 leading-relaxed">
            Professionell bastuhygien med omedelbar teknisk verifiering. Kontakta oss för en kostnadsfri 
            konsultation eller provmätning på er anläggning.
          </p>
          <a
            href="tel:0101234567"
            className="inline-flex items-center gap-3 bg-cyan-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-cyan-accent/90 transition-all shadow-xl shadow-cyan-accent/20"
          >
            <Phone className="w-5 h-5 animate-bounce" />
            Boka teknisk provmätning
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
