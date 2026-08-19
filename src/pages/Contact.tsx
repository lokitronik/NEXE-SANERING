import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  Upload,
  X,
  AlertTriangle,
  Clock,
  Lock,
  MapPin
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
};

const caseTypes = [
  "Akut sanering",
  "Traumasanering",
  "Sanering vid dödsfall",
  "Lukt eller hygienproblem",
  "Förebyggande hygienbehandling",
  "Teknisk rengöring / B2B",
  "Jag är osäker"
];

const urgencyOptions = [
  "Akut – behöver hjälp så snart som möjligt",
  "Inom 24 timmar",
  "Inom några dagar",
  "Ingen brådska – jag vill få rådgivning/offert"
];

export default function Contact() {
  const [formState, setFormState] = useState({
    caseType: "",
    urgency: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    consent: false
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filePreviews = useMemo(
    () =>
      files.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      })),
    [files]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const allowedFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    setFiles((prev) => [...prev, ...allowedFiles].slice(0, 6));
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    files.forEach((file) => {
      formData.append("images", file);
    });

    console.log("Form data ready:", Object.fromEntries(formData.entries()));
    console.log("Files:", files);

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-5 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Kontakta oss | Nexe Sanering AB</title>
        <meta
          name="description"
          content="Kontakta Nexe Sanering AB för hjälp med sanering, trauma, dödsfall, luktproblem, hygienbehandling och teknisk rengöring. Beskriv ditt ärende och bifoga bilder vid behov."
        />
        <meta
          name="keywords"
          content="kontakta sanering, akut sanering, traumasanering, sanering dödsfall, luktproblem, förebyggande hygienbehandling, teknisk rengöring, hygien sanering, nexe sanering kontakt"
        />
      </Helmet>

      <motion.div className="text-center mb-14 md:mb-20" {...fadeInUp}>
        <span className="inline-flex items-center gap-2 rounded-full bg-cyan-accent/10 px-4 py-2 text-sm font-bold text-midnight mb-6">
          <ShieldCheck className="w-4 h-4" />
          Diskret kontakt · Trygg hantering
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Kontakta oss
        </h1>

        <p className="text-lg md:text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Beskriv vad som har hänt eller vad du behöver hjälp med. Du behöver
          inte veta exakt vilken typ av sanering som krävs. Vi hjälper dig att
          bedöma nästa steg.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
        <motion.div
          className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-2 border-midnight/5"
          {...fadeInUp}
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-3">
              Beskriv ditt ärende
            </h2>
            <p className="text-midnight/60 leading-relaxed">
              Fyll i det du kan. Bilder är frivilliga, men kan hjälpa oss att
              göra en snabbare bedömning.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-bold mb-3 text-midnight/60 uppercase tracking-widest">
                Vad gäller din förfrågan?
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setFormState({ ...formState, caseType: type })
                    }
                    className={`text-left rounded-2xl px-5 py-4 border-2 transition-all ${
                      formState.caseType === type
                        ? "border-cyan-accent bg-white shadow-md"
                        : "border-midnight/5 bg-white hover:border-cyan-accent/50"
                    }`}
                  >
                    <span className="font-bold text-midnight">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 text-midnight/60 uppercase tracking-widest">
                Hur brådskande är det?
              </label>

              <div className="grid grid-cols-1 gap-3">
                {urgencyOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      setFormState({ ...formState, urgency: option })
                    }
                    className={`flex items-center gap-3 text-left rounded-2xl px-5 py-4 border-2 transition-all ${
                      formState.urgency === option
                        ? "border-cyan-accent bg-white shadow-md"
                        : "border-midnight/5 bg-white hover:border-cyan-accent/50"
                    }`}
                  >
                    <Clock className="w-5 h-5 text-cyan-accent shrink-0" />
                    <span className="font-bold text-midnight">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">
                Beskriv situationen
              </label>

              <textarea
                rows={6}
                required
                maxLength={1200}
                placeholder="Exempel: Vad har hänt? Var finns problemet? Finns det lukt, vätska, biologiskt material, skador eller något annat vi bör känna till?"
                className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-5 py-4 focus:border-cyan-accent outline-none transition-all resize-none"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
              />

              <div className="text-right text-sm text-midnight/40 mt-2">
                {formState.message.length} / 1200
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">
                Ladda upp bilder
              </label>

              <label className="flex flex-col items-center justify-center gap-3 bg-white border-2 border-dashed border-midnight/10 rounded-2xl px-5 py-8 cursor-pointer hover:border-cyan-accent transition-all">
                <Upload className="w-8 h-8 text-cyan-accent" />
                <div className="text-center">
                  <p className="font-bold text-midnight">
                    Välj bilder eller dra hit dem
                  </p>
                  <p className="text-sm text-midnight/50">
                    Frivilligt · max 6 bilder
                  </p>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              {filePreviews.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                  {filePreviews.map(({ file, url }, index) => (
                    <div
                      key={`${file.name}-${file.lastModified}-${index}`}
                      className="relative bg-white rounded-2xl border border-midnight/5 p-3"
                    >
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-midnight text-white flex items-center justify-center"
                        aria-label="Ta bort bild"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-2">
                        <img
                          src={url}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p className="text-xs text-midnight/60 truncate">
                        {file.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">
                  Namn
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-5 py-4 focus:border-cyan-accent outline-none transition-all"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">
                  Ort
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. Stockholm"
                  className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-5 py-4 focus:border-cyan-accent outline-none transition-all"
                  value={formState.location}
                  onChange={(e) =>
                    setFormState({ ...formState, location: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">
                  Telefon
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-5 py-4 focus:border-cyan-accent outline-none transition-all"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">
                  E-post
                </label>
                <input
                  type="email"
                  className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-5 py-4 focus:border-cyan-accent outline-none transition-all"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </div>
            </div>

            <label className="flex items-start gap-3 bg-white rounded-2xl border-2 border-midnight/5 p-5 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formState.consent}
                onChange={(e) =>
                  setFormState({ ...formState, consent: e.target.checked })
                }
                className="mt-1 w-5 h-5 accent-cyan-accent"
              />

              <span className="text-sm text-midnight/60 leading-relaxed">
                Jag samtycker till att Nexe Sanering AB behandlar mina
                personuppgifter för att kunna hantera min förfrågan. Läs mer i
                vår integritetspolicy.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-midnight text-white py-5 rounded-2xl font-bold text-lg md:text-xl flex items-center justify-center gap-3 hover:bg-midnight/90 transition-all shadow-xl shadow-midnight/10"
            >
              <Send className="w-6 h-6" />
              Skicka förfrågan
            </button>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-cyan-accent/10 text-midnight font-bold text-center flex items-center justify-center gap-2 rounded-2xl p-4"
              >
                <ShieldCheck className="w-5 h-5 text-cyan-accent" />
                Tack. Vi kontaktar dig så snart som möjligt.
              </motion.div>
            )}
          </form>
        </motion.div>

        <div className="space-y-8 lg:sticky lg:top-24">
          <motion.div
            className="bg-midnight text-white p-7 sm:p-9 md:p-10 rounded-[2rem] md:rounded-[3rem]"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
          >
            <div className="flex items-start gap-3 mb-8">
              <AlertTriangle className="w-6 h-6 text-cyan-accent shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Är det akut?
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Vid akuta ärenden är det bättre att ringa direkt.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <a href="tel:0101234567" className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-cyan-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>

                <div>
                  <p className="text-xs font-bold opacity-40 uppercase tracking-widest">
                    Jour / Direktkontakt
                  </p>
                  <p className="text-xl md:text-2xl font-bold">
                    010-XXX XX XX
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/46101234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>

                <div>
                  <p className="text-xs font-bold opacity-40 uppercase tracking-widest">
                    WhatsApp Business
                  </p>
                  <p className="text-xl md:text-2xl font-bold">
                    Chatta med oss
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@nexesanering.se"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>

                <div>
                  <p className="text-xs font-bold opacity-40 uppercase tracking-widest">
                    E-post
                  </p>
                  <p className="text-lg md:text-xl font-bold break-all">
                    info@nexesanering.se
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="p-7 sm:p-9 md:p-10 border-2 border-midnight/5 rounded-[2rem] md:rounded-[3rem]"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.25 }}
          >
            <div className="flex items-start gap-4 mb-5">
              <Lock className="w-7 h-7 text-cyan-accent shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-midnight mb-2">
                  Diskretion och respekt
                </h3>
                <p className="text-midnight/60 font-light leading-relaxed">
                  Vi hanterar alla ärenden med respekt, sekretess och lugn
                  kommunikation. Du behöver inte förklara mer än du känner dig
                  bekväm med.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-7 sm:p-9 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border-2 border-midnight/5"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.35 }}
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-7 h-7 text-cyan-accent shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-midnight mb-2">
                  Var arbetar vi?
                </h3>
                <p className="text-midnight/60 font-light leading-relaxed">
                  Ange din ort i formuläret så återkommer vi med besked om
                  tillgänglighet och nästa steg.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
