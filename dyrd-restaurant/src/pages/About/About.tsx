import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import "./styles.css";

export default function About() {
  const { language, t } = useLanguage();

  return (
    <main className="about-page">
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

      <div className="about-container">
        <section className="about-split-section">
          <motion.div
            className="about-text-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              key={`about-sec1-title-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="about-section-title"
            >
              {t("aboutSec1Title")}
            </motion.h2>
            <motion.p
              key={`about-sec1-p1-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="about-paragraph"
            >
              {t("aboutSec1Para1")}
            </motion.p>
            <motion.p
              key={`about-sec1-p2-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="about-paragraph"
            >
              {t("aboutSec1Para2")}
            </motion.p>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="about_1.png" alt="Matreiðslulist á Dýrð" />
          </motion.div>
        </section>

        <section className="about-split-section reverse">
          <motion.div
            className="about-text-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              key={`about-sec2-title-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="about-section-title"
            >
              {t("aboutSec2Title")}
            </motion.h2>
            <motion.p
              key={`about-sec2-p1-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="about-paragraph"
            >
              {t("aboutSec2Para1")}
            </motion.p>
            <motion.p
              key={`about-sec2-p2-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="about-paragraph"
            >
              {t("aboutSec2Para2")}
            </motion.p>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="about_2.png" alt="Hönnun Dýrðar" />
          </motion.div>
        </section>
      </div>
    </main>
  );
}
