import "./styles.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-section contact-info">
          <span>GEIRSGATA 2, 101 REYKJAVÍK </span>
          <span className="footer-divider">|</span>
          <a href="tel:7800070" className="footer-link">
            780-0070
          </a>
        </div>

        <div className="footer-section opening-hours">
          <span>MÁN-FIM: 17:00 - 23:00</span>
          <span className="footer-divider">|</span>
          <span className="highlight-hours">FÖS-LAU: 17:00 - 01:00</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 DÝRÐ VEITINGASTAÐUR. ALLUR RÉTTUR ÁSKILINN.</p>
      </div>
    </footer>
  );
}
