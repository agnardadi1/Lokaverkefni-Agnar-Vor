import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroSectionProps {
  language: string;
  t: (key: string) => string;
}

export default function HeroSection({ language, t }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        <motion.p
          key={`subtitle-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="hero-subtitle"
        >
          {t("heroSubtitle")}
        </motion.p>

        <motion.h1
          key={`title-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="hero-title"
        >
          {t("heroTitleMain")} <br />
          <span className="hero-title-sub">{t("heroTitleSub")}</span>
        </motion.h1>

        <motion.p
          key={`desc-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="hero-description"
        >
          {t("heroDescription")}
        </motion.p>

        <div className="hero-buttons-group">
          <Link to="/hafa-samband" className="hero-btn-filled">
            <motion.span
              key={`btn1-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("heroBookBtn")}
            </motion.span>
          </Link>

          <Link to="/matsedill" className="hero-btn-outline">
            <motion.span
              key={`btn2-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("heroMenuBtn")}
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
