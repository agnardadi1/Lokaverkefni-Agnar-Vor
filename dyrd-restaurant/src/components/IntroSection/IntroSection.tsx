import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface IntroSectionProps {
  language: string;
  t: (key: string) => string;
}

export default function IntroSection({ language, t }: IntroSectionProps) {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <motion.h2
          key={`intro-title-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="intro-title"
        >
          {t("introTitle")}
        </motion.h2>
        <motion.p
          key={`intro-text-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="intro-text"
        >
          {t("introText")}
        </motion.p>
        <Link to="/um-okkur" className="intro-outline-btn">
          <motion.span
            key={`intro-btn-${language}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {t("introBtn")}
          </motion.span>
        </Link>
      </div>
    </section>
  );
}
