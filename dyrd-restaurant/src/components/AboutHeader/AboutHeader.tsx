import { motion } from "framer-motion";

interface AboutHeaderProps {
  language: string;
  t: (key: string) => string;
}

export default function AboutHeader({ language, t }: AboutHeaderProps) {
  return (
    <motion.div
      className="about-header"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
    >
      <motion.p
        key={`about-subtitle-${language}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="about-subtitle"
      >
        {t("aboutSubtitle")}
      </motion.p>
      <motion.h1
        key={`about-title-${language}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="about-title"
      >
        {t("aboutTitle")}
      </motion.h1>
      <div className="gold-divider"></div>
    </motion.div>
  );
}
