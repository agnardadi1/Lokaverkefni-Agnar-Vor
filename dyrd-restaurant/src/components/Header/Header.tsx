import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <Link className="logoLink" to="/">
        <img src="/logo_footer.png" alt="Dýrð Lógó" className="headerLogo" />
        <span className="logoText">Dýrð</span>
      </Link>

      <nav className="navMenu">
        <Link className="link" to="/">
          FORSÍÐA
        </Link>
        <Link className="link" to="/matsedill">
          MATSEÐILL
        </Link>
        <Link className="link" to="/um-okkur">
          UM OKKUR
        </Link>
        <Link className="link" to="/hafa-samband">
          HAFA SAMBAND
        </Link>
      </nav>
    </div>
  );
}
