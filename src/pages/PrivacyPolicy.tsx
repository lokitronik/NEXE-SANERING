import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Shield } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <Helmet>
        <title>Integritetspolicy | NEXE SANERING</title>
        <meta
          name="description"
          content="Information om hur NEXE GROUP AB behandlar dina personuppgifter inom NEXE SANERING i enlighet med GDPR."
        />
      </Helmet>

      <motion.div {...fadeInUp} className="mb-12">
        <Shield className="w-12 h-12 text-cyan-accent mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Integritetspolicy
        </h1>

        <p className="text-midnight/60 text-lg leading-relaxed mb-8">
          Din integritet är viktig för oss på NEXE SANERING. Denna policy
          beskriver hur NEXE GROUP AB behandlar dina personuppgifter i samband
          med tjänster och kommunikation som sker under varumärket NEXE
          SANERING, i enlighet med dataskyddsförordningen (GDPR).
        </p>
      </motion.div>

      <div className="space-y-12 text-midnight/80 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            1. Insamling av information
          </h2>

          <p>
            Vi samlar in personuppgifter när du kontaktar oss via vårt
            kontaktformulär, ringer vår jour, bokar en tjänst eller på annat
            sätt kommunicerar med oss. Informationen kan exempelvis omfatta
            namn, e-postadress, telefonnummer och adress för utförande av
            tjänst.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            2. Användning av information
          </h2>

          <p>
            De personuppgifter vi samlar in kan användas för att:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              Tillhandahålla de tjänster du har beställt, exempelvis sanering
              eller inspektion.
            </li>

            <li>
              Kommunicera med dig före, under och efter ett uppdrag.
            </li>

            <li>
              Hantera bokningar, offerter och kundärenden.
            </li>

            <li>
              Administrera fakturering och betalning.
            </li>

            <li>
              Uppfylla rättsliga och administrativa skyldigheter.
            </li>

            <li>
              Förbättra våra tjänster och vår kundkommunikation.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            3. Utlämnande till tredje part
          </h2>

          <p>
            NEXE GROUP AB säljer inte personuppgifter till tredje part.
            Personuppgifter kan däremot delas med betrodda tjänsteleverantörer
            som behandlar uppgifter för vår räkning, exempelvis leverantörer
            av fakturerings-, betalnings-, IT- eller webbplatstjänster.
          </p>

          <p className="mt-4">
            Sådana leverantörer får endast behandla personuppgifter i den
            utsträckning som krävs för att tillhandahålla sina tjänster och
            ska behandla uppgifterna i enlighet med tillämplig
            dataskyddslagstiftning.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            4. Informationsskydd
          </h2>

          <p>
            Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder
            för att skydda personuppgifter mot obehörig åtkomst, förlust,
            ändring eller annan otillåten behandling.
          </p>

          <p className="mt-4">
            Tillgång till personuppgifter begränsas till personer och
            tjänsteleverantörer som behöver uppgifterna för att kunna utföra
            sina arbetsuppgifter eller tillhandahålla avtalade tjänster.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            5. Dina rättigheter
          </h2>

          <p>
            Du har, under de förutsättningar som anges i GDPR, rätt att begära
            information om vilka personuppgifter vi behandlar om dig. Du kan
            även ha rätt att begära rättelse, radering eller begränsning av
            behandlingen samt invända mot viss behandling.
          </p>

          <p className="mt-4">
            Om behandlingen grundar sig på samtycke har du rätt att när som
            helst återkalla ditt samtycke. Ett återkallande påverkar inte
            lagligheten av den behandling som skett innan samtycket
            återkallades.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            6. Personuppgiftsansvarig
          </h2>

          <p>
            Personuppgiftsansvarig för den behandling av personuppgifter som
            sker inom ramen för NEXE SANERING är:
          </p>

          <div className="mt-5 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="font-semibold text-midnight">
              NEXE GROUP AB
            </p>

            <p className="mt-2">
              Org.nr: [XXXXXX-XXXX]
            </p>

            <p>
              Adress: [ADRESS]
            </p>

            <p>
              E-post: info@nexesanering.se
            </p>

            <p>
              Telefon: 010-XXX XX XX
            </p>
          </div>

          <p className="mt-6">
            Om du har frågor om denna integritetspolicy eller om hur vi
            behandlar dina personuppgifter är du välkommen att kontakta oss
            via ovanstående kontaktuppgifter.
          </p>
        </section>

      </div>
    </motion.div>
  );
}
