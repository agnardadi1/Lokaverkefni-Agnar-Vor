import { motion as fMotion } from "framer-motion";

interface ContactHeaderProps {
  language: string;
}

export default function ContactHeader({ language }: ContactHeaderProps) {
  return (
    <fMotion.div
      className="contact-header"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
    >
      <fMotion.p
        key={`contact-subtitle-${language}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="contact-subtitle"
      >
        {language === "en" ? "Send us a message" : "Sendu okkur skilaboð"}
      </fMotion.p>
      <fMotion.h1
        key={`contact-title-${language}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="contact-title"
      >
        {language === "en" ? "Contact Us" : "Hafa samband"}
      </fMotion.h1>
      <div className="gold-divider"></div>
    </fMotion.div>
  );
}
