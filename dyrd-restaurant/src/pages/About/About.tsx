import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import "./styles.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="about-page">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <p className="about-subtitle">{t("aboutSubtitle")}</p>
        <h1 className="about-title">{t("aboutTitle")}</h1>
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
            <h2 className="about-section-title">{t("aboutSec1Title")}</h2>
            <p className="about-paragraph">{t("aboutSec1Para1")}</p>
            <p className="about-paragraph">{t("aboutSec1Para2")}</p>
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
            <h2 className="about-section-title">{t("aboutSec2Title")}</h2>
            <p className="about-paragraph">{t("aboutSec2Para1")}</p>
            <p className="about-paragraph">{t("aboutSec2Para2")}</p>
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
