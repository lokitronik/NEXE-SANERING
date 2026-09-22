import React, { useEffect, useRef, useState } from "react";
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
  MapPin,
  CheckCircle2
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
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [filePreviews, setFilePreviews] = useState<{ file: File; url: string }[]>([]);

  useEffect(() => {
    const previews = files.map((file) => ({ file, url: URL.createObjectURL(file) }));
    setFilePreviews(previews);
    return () => previews.forEach(({ url }) => URL.revokeObjectURL(url));
  }, [files]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles: File[] = Array.from(e.target.files);
    const allowedFiles = selectedFiles.filter((file) => file.type.startsWith("image/"));
    setFiles((prev) => [...prev, ...allowedFiles].slice(0, 6));
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!formState.consent) {
      setSubmitError("Du behöver godkänna behandlingen av dina personuppgifter.");
      return;
    }

    setIsSending(true);

    try {
      let imageUrls: string[] = [];

      // 1. Subida a Cloudinary usando upload preset unsigned
      if (files.length > 0) {
        const uploadPromises = files.map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "nexe_preset");

          const res = await fetch("https://api.cloudinary.com/v1_1/hasyhpoz/image/upload", {
            method: "POST",
            body: data
          });

          if (!res.ok) {
            throw new Error("Kunde inte ladda upp bild till Cloudinary");
          }

          const json = await res.json();
          return json.secure_url as string;
        });

        imageUrls = await Promise.all(uploadPromises);
      }

      // 2. Envío a Formspree con los enlaces limpios de las fotos
      const formPayload = new FormData();
      formPayload.append("Ärende", formState.caseType || "Ej angett");
      formPayload.append("Brådska", formState.urgency || "Ej angett");
      formPayload.append("Namn", formState.name.trim());
      formPayload.append("Ort", formState.location.trim());
      formPayload.append("Telefon", formState.phone.trim());
      formPayload.append("E-post", formState.email.trim());
      formPayload.append("Beskrivning", formState.message.trim());
      formPayload.append("_subject", "Ny förfrågan med bilder – NEXE SPECIALSANERING");

      if (imageUrls.length > 0) {
        formPayload.append("Bifogade bilder (Klicka för att se)", imageUrls.join("\n"));
      } else {
        formPayload.append("Bilder", "Inga bilder bifogades.");
      }

      const response = await fetch("https://formspree.io/f/xkjgrjkb", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formPayload
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError("Förfrågan kunde inte skickas. Försök igen eller mejla direkt till kontakt@nexegroup.se.");
      }
    } catch {
      setSubmitError("Ett fel uppstod vid överföringen. Kontrollera anslutningen eller mejla direkt till kontakt@nexegroup.se.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-5 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Kontakta oss | NEXE SPECIALSANERING</title>
        <meta
          name="description"
          content="Kontakta NEXE SPECIALSANERING för hjälp med sanering, trauma, dödsfall, luktproblem, hygienbehandling och teknisk rengöring."
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
          Beskriv vad som har hänt eller vad du behöver hjälp med. Vi hjälper dig att bedöma nästa steg.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
        <motion.div
          className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-2 border-midnight/5"
          {...fadeInUp}
        >
          {isSubmitted ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-midnight">
                Tack för din förfrågan!
              </h2>
              <p className="text-midnight/70 max-w-md mx-auto leading-relaxed">
                Vi har tagit emot ditt meddelande och bilderna. Vi återkommer snarast möjligt.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFiles([]);
                  setFormState({
                    caseType: "",
                    urgency: "",
                    name: "",
                    email: "",
                    phone: "",
                    location: "",
                    message: "",
                    consent: false
                  });
                }}
                className="mt-4 px-6 py-3 bg-midnight text-white text-sm font-bold rounded-xl hover:bg-midnight/90 transition-all cursor-pointer"
              >
                Skicka en ny förfrågan
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-3">
                  Beskriv ditt ärende
                </h2>
                <p className="text-midnight/60 leading-relaxed">
                  Fyll i det du kan. Bilder är frivilliga, men hjälper oss att göra en snabbare bedömning.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8" aria-busy={isSending}>
                <fieldset disabled={isSending} className="space-y-8 min-w-0 border-0 p-0 m-0">
                  <div>
                    <label className="block text-sm font-bold mb-3 text-midnight/60 uppercase tracking-widest">
                      Vad gäller din förfrågan?
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {caseTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormState({ ...formState, caseType: type })}
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
                          onClick={() => setFormState({ ...formState, urgency: option })}
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
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
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
                        <p className="font-bold text-midnight">Välj bilder</p>
                        <p className="text-sm text-midnight/50">Frivilligt · max 6 bilder</p>
                      </div>

                      <input
                        ref={fileInputRef}
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
                            key={`${file.name}-${index}`}
                            className="relative bg-white rounded-2xl border border-midnight/5 p-3"
                          >
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-midnight text-white flex items-center justify-center shadow-md"
                              aria-label="Ta bort bild"
                            >
                              <X className="w-4 h-4" />
                            </button>

                            <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-2">
                              <img src={url} alt={file.name} className="w-full h-full object-cover" />
                            </div>

                            <p className="text-xs text-midnight/60 truncate">{file.name}</p>
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
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
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
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
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
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">
                        E-post
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-5 py-4 focus:border-cyan-accent outline-none transition-all"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-3 bg-white rounded-2xl border-2 border-midnight/5 p-5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formState.consent}
                      onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-cyan-accent"
                    />

                    <span className="text-sm text-midnight/60 leading-relaxed">
                      Jag samtycker till att NEXE SPECIALSANERING behandlar mina personuppgifter.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-midnight text-white py-5 rounded-2xl font-bold text-lg md:text-xl flex items-center justify-center gap-3 hover:bg-midnight/90 transition-all shadow-xl shadow-midnight/10 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-6 h-6" />
                    <span>{isSending ? "Laddar upp och skickar..." : "Skicka förfrågan"}</span>
                  </button>
                </fieldset>

                {submitError && (
                  <div role="alert" className="bg-red-50 text-red-800 rounded-2xl p-4">
                    {submitError.includes("kontakt@nexegroup.se") ? (
                      <>
                        {submitError.split("kontakt@nexegroup.se")[0]}
                        <span translate="no" className="notranslate font-semibold">kontakt@nexegroup.se</span>
                        {submitError.split("kontakt@nexegroup.se")[1]}
                      </>
                    ) : (
                      submitError
                    )}
                  </div>
                )}
              </form>
            </>
          )}
        </motion.div>

        {/* Columna lateral derecha */}
        <div className="space-y-8 lg:sticky lg:top-24">
          <motion.div
            className="bg-midnight text-white p-7 sm:p-9 md:p-10 rounded-[2rem] md:rounded-[3rem]"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
          >
            <div className="flex items-start gap-3 mb-8">
              <AlertTriangle className="w-6 h-6 text-cyan-accent shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Är det akut?</h2>
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
                  <p className="text-xs font-bold opacity-40 uppercase tracking-widest">Jour / Direktkontakt</p>
                  <p className="text-xl md:text-2xl font-bold">010-XXX XX XX</p>
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
                  <p className="text-xs font-bold opacity-40 uppercase tracking-widest">WhatsApp Business</p>
                  <p className="text-xl md:text-2xl font-bold">Chatta med oss</p>
                </div>
              </a>

              <a
                href="mailto:kontakt@nexegroup.se"
                translate="no"
                className="notranslate flex items-center gap-5 group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-40 uppercase tracking-widest">E-post</p>
                  <p className="text-lg md:text-xl font-bold break-all notranslate" translate="no">
                    kontakt@nexegroup.se
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
                <h3 className="text-2xl font-bold text-midnight mb-2">Diskretion och respekt</h3>
                <p className="text-midnight/60 font-light leading-relaxed">
                  Vi hanterar alla ärenden med respekt, sekretess och lugn kommunikation.
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
              <MapPin className="w-7 h-7 text-cyan-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="text-2xl font-bold text-midnight mb-2">Var arbetar vi?</h3>
                <p className="text-midnight/60 font-light leading-relaxed">
                  Vi utför sanering och utryckningar direkt på plats hos kund. Ange din ort i formuläret så återkommer vi med besked om tillgänglighet och inställelsetid.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
