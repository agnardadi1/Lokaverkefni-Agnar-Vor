import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <Link className="logoLink" to="/">
        <img
          src="/logo_transparent.png"
          alt="Dýrð Restaurant Lógó"
          className="headerLogo"
        />

        <span className="logoText">Dýrð Restaurant</span>
      </Link>
      <nav>
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
