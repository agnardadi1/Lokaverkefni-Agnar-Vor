import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./styles.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newLight = !isLight;
    setIsLight(newLight);

    if (newLight) {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }
  };

  return (
    <header className={`header-container ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="header-main-row">
        <Link to="/" className="header-brand" onClick={() => setIsOpen(false)}>
          <img
            src={isLight ? "/logo-gold.png?v=1" : "/logo.png?v=1"}
            alt="Dýrð lógó"
            className="header-logo-img"
          />
          <span className="header-brand-name">DÝRÐ</span>
        </Link>

        <button
          className={`menu-toggle-btn ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Valmynd"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`header-nav-wrapper ${isOpen ? "nav-open" : ""}`}>
        <nav className="header-nav">
          <Link to="/" onClick={() => setIsOpen(false)}>
            {t("navHome")}
          </Link>
          <Link to="/matsedill" onClick={() => setIsOpen(false)}>
            {t("navMenu")}
          </Link>
          <Link to="/um-okkur" onClick={() => setIsOpen(false)}>
            {t("navAbout")}
          </Link>
          <Link to="/hafa-samband" onClick={() => setIsOpen(false)}>
            {t("navContact")}
          </Link>
        </nav>

        <div className="header-controls">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {isLight ? "🌙" : "☀️"}
          </button>

          <div className="lang-selector">
            <button
              onClick={() => setLanguage("is")}
              className={`lang-btn ${language === "is" ? "active" : ""}`}
            >
              IS
            </button>
            <span className="lang-divider">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={`lang-btn ${language === "en" ? "active" : ""}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
