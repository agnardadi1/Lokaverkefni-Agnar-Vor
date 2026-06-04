import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-content">
          <h4 className="footer-title-gold">Staðsetning</h4>
          <p className="footer-text-main">Geirsgata 2, 101 Reykjavík</p>
          <p className="footer-text-main">
            Sími:{" "}
            <a href="tel:7800070" className="footer-link-gold">
              780-0070
            </a>
          </p>
        </div>

        <div className="footer-content">
          <h4 className="footer-title-gold">Opnunartímar</h4>
          <p className="footer-text-main">Mán-Fim: 17:00 - 23:00</p>
          <p className="footer-text-main">Fös-Lau: 17:00 - 01:00</p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/dyrdrestaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="instagram-icon"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Dýrð Veitingastaður. Allur réttur
          áskilinn.
        </p>
      </div>
    </footer>
  );
}
