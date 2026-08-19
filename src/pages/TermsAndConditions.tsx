import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { FileText } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function TermsAndConditions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <Helmet>
        <title>Allmänna villkor | Nexe Sanering AB</title>
        <meta name="description" content="Allmänna villkor för tjänster utförda av Nexe Sanering AB." />
      </Helmet>

      <motion.div {...fadeInUp} className="mb-12">
        <FileText className="w-12 h-12 text-cyan-accent mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Allmänna villkor</h1>
        <p className="text-midnight/60 text-lg leading-relaxed mb-8">
          Dessa allmänna villkor gäller för alla tjänster som tillhandahålls av Nexe Sanering AB till privatpersoner och företagskunder.
        </p>
      </motion.div>

      <div className="space-y-12 text-midnight/80 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">1. Omfattning</h2>
          <p>
            Nexe Sanering AB åtar sig att utföra sanerings- och rengöringstjänster enligt överenskommelse med kunden. Specifikation av tjänsten sker i offert eller orderbekräftelse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">2. Priser och betalning</h2>
          <p>
            Alla priser anges exklusive eller inklusive moms beroende på kundtyp (privat/företag). Betalning sker mot faktura med 10 dagars betalningstid om inget annat avtalats. Vid försenad betalning utgår dröjsmålsränta enligt räntelagen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">3. Avbokning</h2>
          <p>
            Avbokning av planerat arbete ska ske senast 24 timmar innan arbetets början. Vid senare avbokning förbehåller vi oss rätten att debitera en framkörningsavgift eller delar av det planerade arbetets värde. Akuta jourutryckningar kan ej avbokas efter att personal har påbörjat utryckningen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">4. Ansvar och försäkring</h2>
          <p>
            Nexe Sanering AB innehar ansvarsförsäkring för de arbeten vi utför. Vi ansvarar för skador orsakade genom vårdslöshet av vår personal. Kunden ansvarar för att informera om särskilda förhållanden på platsen som kan påverka arbetets utförande.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">5. Reklamation</h2>
          <p>
            Eventuella anmärkningar på utfört arbete ska framföras skriftligen till Nexe Sanering AB så snart som möjligt, dock senast 7 dagar efter avslutat arbete. Vi förbehåller oss rätten att i första hand åtgärda eventuella brister.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">6. Sekretess</h2>
          <p>
            På grund av verksamhetens natur (traumasanering, dödsfall etc.) iakttar Nexe Sanering AB strikt sekretess gällande alla förhållanden hos kunden som vi får kännedom om under uppdragets utförande.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">7. Force Majeure</h2>
          <p>
            Nexe Sanering AB är befriat från påföljd för underlåtenhet att fullgöra viss förpliktelse enligt detta avtal, om underlåtenheten har sin grund i omständighet utanför vår kontroll (t.ex. naturkatastrofer, krig, strejk eller myndighetsbeslut).
          </p>
        </section>
      </div>
    </motion.div>
  );
}
