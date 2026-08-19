import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Shield } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
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
        <title>Integritetspolicy | Nexe Sanering AB</title>
        <meta name="description" content="Information om hur Nexe Sanering AB hanterar dina personuppgifter i enlighet med GDPR." />
      </Helmet>

      <motion.div {...fadeInUp} className="mb-12">
        <Shield className="w-12 h-12 text-cyan-accent mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Integritetspolicy</h1>
        <p className="text-midnight/60 text-lg leading-relaxed mb-8">
          Din integritet är av högsta prioritet för oss på Nexe Sanering AB. Denna policy beskriver hur vi samlar in, använder och skyddar dina personuppgifter i enlighet med dataskyddsförordningen (GDPR).
        </p>
      </motion.div>

      <div className="space-y-12 text-midnight/80 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">1. Insamling av information</h2>
          <p>
            Vi samlar in information från dig när du kontaktar oss via vårt kontaktformulär, ringer vår jour eller bokar en tjänst. Informationen kan inkludera ditt namn, e-postadress, telefonnummer och adress för utförande av tjänst.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">2. Användning av information</h2>
          <p>Den information vi samlar in från dig kan användas för att:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Personifiera din upplevelse och tillgodose dina individuella behov.</li>
            <li>Tillhandahålla de tjänster du har beställt (t.ex. sanering eller inspektion).</li>
            <li>Förbättra vår kundservice och din supportbehov.</li>
            <li>Kontakta dig via e-post eller telefon gällande uppdraget.</li>
            <li>Administrera fakturering och betalning.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">3. Utlämnande till tredje part</h2>
          <p>
            Vi säljer, handlar eller på annat sätt överför inte personligt identifierbar information till utomstående parter. Detta inkluderar inte betrodd tredje part som hjälper oss att driva vår webbplats eller bedriva vår verksamhet (t.ex. faktureringssystem), så länge dessa parter godkänner att hålla informationen konfidentiell.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">4. Informationsskydd</h2>
          <p>
            Vi vidtar en rad olika säkerhetsåtgärder för att skydda dina personliga uppgifter. Vi använder avancerade krypteringsmetoder för att skydda känsliga uppgifter som överförs via internet. Endast anställda som ska uträtta ett specifikt jobb (t.ex. fakturering eller kundservice) får tillgång till personligt identifierbar information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">5. Dina rättigheter</h2>
          <p>
            Du har rätt att när som helst begära information om de personuppgifter vi har om dig. Om dina uppgifter är felaktiga, ofullständiga eller orelevanta kan du begära att få dem rättade eller raderade.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">6. Kontakt</h2>
          <p>
            Om du har frågor gällande vår integritetspolicy eller vår behandling av dina personuppgifter, vänligen kontakta oss på:
            <br /><br />
            <strong>Nexe Sanering AB</strong><br />
            E-post: info@nexesanering.se<br />
            Telefon: 010-XXX XX XX
          </p>
        </section>
      </div>
    </motion.div>
  );
}
