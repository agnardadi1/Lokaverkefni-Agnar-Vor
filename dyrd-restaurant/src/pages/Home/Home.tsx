import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import "./styles.css";

export default function Home() {
  const { language, t } = useLanguage();

  return (
    <main className="home-container">
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

      <section className="experience-section">
        <div className="experience-header">
          <p className="experience-subtitle"></p>
          <motion.h2
            key={`exp-title-${language}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="experience-title"
          >
            {t("expTitle")}
          </motion.h2>
          <div className="gold-divider"></div>
        </div>

        <div className="experience-grid">
          <div className="experience-card">
            <div className="card-image-wrapper">
              <div className="card-overlay"></div>
              <img
                src="/card-image-1.png"
                alt="Card 1"
                className="card-image-1"
              />
            </div>
            <motion.h3
              key={`c1-title-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("card1Title")}
            </motion.h3>
            <motion.p
              key={`c1-desc-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("card1Desc")}
            </motion.p>
          </div>

          <div className="experience-card">
            <div className="card-image-wrapper">
              <div className="card-overlay"></div>
              <img
                src="/card-image-2.png"
                alt="Card 2"
                className="card-image-2"
              />
            </div>
            <motion.h3
              key={`c2-title-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("card2Title")}
            </motion.h3>
            <motion.p
              key={`c2-desc-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("card2Desc")}
            </motion.p>
          </div>

          <div className="experience-card">
            <div className="card-image-wrapper">
              <div className="card-overlay"></div>
              <img
                src="/card-image-3.png"
                alt="Card 3"
                className="card-image-3"
              />
            </div>
            <motion.h3
              key={`c3-title-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("card3Title")}
            </motion.h3>
            <motion.p
              key={`c3-desc-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("card3Desc")}
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  );
}
