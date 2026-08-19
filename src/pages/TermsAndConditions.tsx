import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { FileText } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
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
        <title>Allmänna villkor | NEXE SANERING</title>
        <meta
          name="description"
          content="Allmänna villkor för tjänster som tillhandahålls av NEXE GROUP AB under varumärket NEXE SANERING."
        />
      </Helmet>

      <motion.div {...fadeInUp} className="mb-12">
        <FileText className="w-12 h-12 text-cyan-accent mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Allmänna villkor
        </h1>

        <p className="text-midnight/60 text-lg leading-relaxed mb-8">
          Dessa allmänna villkor gäller för tjänster som tillhandahålls av
          NEXE GROUP AB under varumärket NEXE SANERING till privatpersoner och
          företagskunder.
        </p>
      </motion.div>

      <div className="space-y-12 text-midnight/80 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            1. Omfattning
          </h2>

          <p>
            NEXE GROUP AB, under varumärket NEXE SANERING, åtar sig att utföra
            sanerings- och rengöringstjänster enligt överenskommelse med
            kunden. Specifikation av tjänsten, omfattningen av uppdraget och
            eventuella särskilda villkor framgår av offert eller
            orderbekräftelse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            2. Priser och betalning
          </h2>

          <p>
            Alla priser anges inklusive eller exklusive moms beroende på vad
            som anges i offerten eller orderbekräftelsen. Betalning sker mot
            faktura med 10 dagars betalningstid om inget annat har avtalats
            skriftligen. Vid försenad betalning utgår dröjsmålsränta enligt
            räntelagen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            3. Avbokning
          </h2>

          <p>
            Avbokning av planerat arbete ska ske senast 24 timmar innan
            arbetets början. Vid senare avbokning förbehåller sig NEXE GROUP
            AB rätten att debitera framkörningsavgift, redan uppkomna kostnader
            eller delar av det planerade arbetets värde, beroende på
            omständigheterna i det enskilda fallet.
          </p>

          <p className="mt-4">
            Akuta jourutryckningar kan inte avbokas efter att personal har
            påbörjat utryckningen. I sådana fall kan kunden debiteras för
            påbörjad arbetstid, resor och andra kostnader som uppstått.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            4. Ansvar och försäkring
          </h2>

          <p>
            NEXE GROUP AB innehar ansvarsförsäkring för de arbeten som utförs
            inom ramen för NEXE SANERING. NEXE GROUP AB ansvarar för skador
            som orsakas genom vårdslöshet av bolaget eller dess personal i
            samband med utförandet av uppdraget, i den utsträckning som följer
            av tillämplig lag.
          </p>

          <p className="mt-4">
            Kunden ansvarar för att lämna korrekt och fullständig information
            om förhållanden på platsen som kan påverka arbetets utförande,
            inklusive kända risker, skador, föroreningar, tillträdesproblem
            och andra omständigheter som kan vara relevanta för uppdraget.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            5. Reklamation
          </h2>

          <p>
            Eventuella anmärkningar på utfört arbete ska framföras skriftligen
            till NEXE GROUP AB så snart som möjligt efter att kunden upptäckt
            eller borde ha upptäckt den påstådda bristen.
          </p>

          <p className="mt-4">
            NEXE GROUP AB ska ges möjlighet att undersöka och, när det är
            motiverat, avhjälpa eventuella brister innan kunden anlitar annan
            part för att utföra korrigerande arbete, såvida inte annat följer
            av tvingande lag.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            6. Sekretess
          </h2>

          <p>
            På grund av verksamhetens natur, inklusive uppdrag som kan avse
            traumasanering, dödsfall och andra känsliga situationer, iakttar
            NEXE GROUP AB strikt sekretess beträffande information om kunden,
            fastigheten och uppdragets omständigheter som bolaget får
            kännedom om inom ramen för uppdraget.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            7. Force Majeure
          </h2>

          <p>
            NEXE GROUP AB är befriat från ansvar för underlåtenhet att fullgöra
            viss förpliktelse enligt dessa villkor om underlåtenheten har sin
            grund i en omständighet utanför bolagets rimliga kontroll, såsom
            naturkatastrof, krig, myndighetsbeslut, omfattande störningar i
            samhällsinfrastruktur, strejk eller annan jämförbar händelse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-midnight">
            8. Företagsuppgifter
          </h2>

          <p>
            Tjänsterna under varumärket NEXE SANERING tillhandahålls av:
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
              E-post: [E-POST]
            </p>

            <p>
              Telefon: [TELEFON]
            </p>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
