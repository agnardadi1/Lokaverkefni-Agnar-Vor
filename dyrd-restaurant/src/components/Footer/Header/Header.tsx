import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

      <nav className={`header-nav ${isOpen ? "nav-open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Forsíða
        </Link>
        <Link to="/matsedill" onClick={() => setIsOpen(false)}>
          Matseðill
        </Link>
        <Link to="/um-okkur" onClick={() => setIsOpen(false)}>
          Um okkur
        </Link>
        <Link to="/hafa-samband" onClick={() => setIsOpen(false)}>
          Hafa samband
        </Link>
      </nav>
    </header>
  );
}
