import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./styles.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="header-container">
      <div className="header-main-row">
        <Link to="/" className="header-brand" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="Dýrð lógó" className="header-logo-img" />
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

      <div className="header-nav-wrapper">
        <nav className={`header-nav ${isOpen ? "nav-open" : ""}`}>
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

        <div className={`lang-selector ${isOpen ? "nav-open" : ""}`}>
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
    </header>
  );
}
