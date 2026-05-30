import { Link } from "react-router-dom";
import "/src/App.css";

export default function Home() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">Einstök upplifun</p>
        <h1 className="hero-title">
          GÓÐUR MATUR <br />
          <span className="hero-title-sub">GÓÐ STUND.</span>
        </h1>
        <p className="hero-description">
          Velkomin á Dýrð – fjölskyldurekinn veitingastað sem leggur áherslu á
          ferskt hráefni og norræna matarmenningu. Við trúum því að matur sé
          upplifun, ekki bara nauðsyn.
        </p>
        <Link to="/matsedill" className="hero-btn">
          SKOÐA MATSEÐILL
        </Link>
      </div>
    </div>
  );
}
