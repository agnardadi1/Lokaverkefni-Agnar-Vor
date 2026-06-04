import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import "./styles.css";

export default function Home() {
  const { t } = useLanguage();

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
          <p className="hero-subtitle">{t("heroSubtitle")}</p>
          <h1 className="hero-title">
            {t("heroTitleMain")} <br />
            <span className="hero-title-sub">{t("heroTitleSub")}</span>
          </h1>
          <p className="hero-description">{t("heroDescription")}</p>
          <div className="hero-buttons-group">
            <Link to="/hafa-samband" className="hero-btn-filled">
              {t("heroBookBtn")}
            </Link>

            <Link to="/matsedill" className="hero-btn-outline">
              {t("heroMenuBtn")}
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2 className="intro-title">{t("introTitle")}</h2>
          <p className="intro-text">{t("introText")}</p>
          <Link to="/um-okkur" className="intro-outline-btn">
            {t("introBtn")}
          </Link>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-header">
          <p className="experience-subtitle"></p>
          <h2 className="experience-title">{t("expTitle")}</h2>
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
            <h3>{t("card1Title")}</h3>
            <p>{t("card1Desc")}</p>
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
            <h3>{t("card2Title")}</h3>
            <p>{t("card2Desc")}</p>
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
            <h3>{t("card3Title")}</h3>
            <p>{t("card3Desc")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
