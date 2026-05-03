import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Users2, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const protocol = [
  {
    step: "1",
    title: "Förbesiktning och bedömning",
    desc: "Genomgång av bostaden för att kartlägga omfång, biologisk belastning, luktpåverkan och relevanta riskfaktorer. Offert lämnas alltid i förväg."
  },
  {
    step: "2",
    title: "Säkring av arbetsområdet",
    desc: "Upprättande av skyddszon, ventilation och förberedelse av utrustning. Full PPE-utrustning används under hela insatsen."
  },
  {
    step: "3",
    title: "Systematisk rensning",
    desc: "Metodisk borttagning av uppsamlat material, organiskt avfall och kontaminerade föremål i biologiska behållare enligt gällande rutiner."
  },
  {
    step: "4",
    title: "Hantering av personliga tillhörigheter",
    desc: "Identifiering och respektfull hantering av värdeföremål, dokument och personliga tillhörigheter efter överenskommelse med uppdragsgivaren."
  },
  {
    step: "5",
    title: "Sanering av ytor och biologiskt material",
    desc: "Säker borttagning och behandling av kontaminerade ytor, material och biologiska restprodukter enligt fastställda arbetsprotokoll."
  },
  {
    step: "6",
    title: "Skadedjursåtgärder vid behov",
    desc: "Vid förekomst av insekter eller annan sekundär biologisk påverkan hanteras detta som en del av insatsen."
  },
  {
    step: "7",
    title: "Luktsanering",
    desc: "Teknisk behandling med ozon och vid behov torrånga för att reducera kvarvarande lukt i luft, ytor och påverkade material. Behandlingen utförs alltid i evakuerat utrymme."
  },
  {
    step: "8",
    title: "Slutkontroll och dokumentation",
    desc: "Genomgång av utfört arbete, fotodokumentation och skriftlig rapport. Underlaget kan användas vid försäkrings- eller socialtjänstärenden."
  }
];

export default function Socialsanering() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Socialsanering & hoarder-städning Stockholm | Prio Sanering AB</title>
        <meta
          name="description"
          content="Professionell socialsanering och hoarder-städning. Vi utför rensning och sanering av kraftigt nedskräpade bostäder med biologisk belastning, diskret och med full utrustning."
        />
        <meta
          name="keywords"
          content="socialsanering, hoarder städning, hoarder sanering, extrem rengöring bostad, rensning nedskräpad lägenhet, diogenessyndrom sanering, biologisk sanering, dödsbo rensning Stockholm"
        />
      </Helmet>

      <motion.div className="text-center mb-20" {...fadeInUp}>
        <Users2 className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Socialsanering & hoarder-städning
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi utför professionell socialsanering och hoarder-städning — rensning och
          sanering av kraftigt nedskräpade bostäder med biologisk belastning, extrem
          uppsamling och luktpåverkan. Diskret, metodisk och med full utrustning.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          {protocol.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-6"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-accent/20">
                {item.step}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-midnight/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-slate-50 p-12 rounded-3xl border-2 border-midnight/5 sticky top-32"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Varför välja Prio Sanering?</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                Systematisk rensning och sanering med full PPE-utrustning och biologiska
                behållare. Varje insats föregås av en förbesiktning och offert.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                Diskret insats med omärkta fordon och respektfull hantering — vi är
                vana vid att arbeta i situationer som berör närstående, dödsbon och
                socialtjänstärenden.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                Kompletterande luktsanering med ozon och torrånga ingår som naturlig
                del av insatsen — allt under samma tak.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                Dokumentation och skriftlig rapport ingår. Underlaget kan användas
                vid försäkrings-, dödsbo- eller socialtjänstärenden.
              </p>
            </li>
          </ul>

          <div className="mt-12 pt-12 border-t border-midnight/10">
            <p className="text-midnight/60 mb-6 font-medium">
              Behöver du hjälp eller vill ha en bedömning på plats?
            </p>
            <a
              href="tel:0101234567"
              className="flex items-center justify-center gap-3 bg-cyan-accent text-white py-4 rounded-full font-bold text-lg hover:bg-cyan-accent/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              010-XXX XX XX
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
