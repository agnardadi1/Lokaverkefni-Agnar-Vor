import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-content">
          <h4
            style={{
              color: "#e5c762",
              margin: "0 0 1rem 0",
              textTransform: "uppercase",
              fontSize: "1.2rem",
            }}
          >
            Staðsetning
          </h4>
          <p
            style={{
              color: "#ffffff",
              margin: "0 0 0.5rem 0",
              fontSize: "1rem",
            }}
          >
            Geirsgata 2, 101 Reykjavík
          </p>
          <p
            style={{
              color: "#ffffff",
              margin: "0 0 0.5rem 0",
              fontSize: "1rem",
            }}
          >
            Sími:{" "}
            <a
              href="tel:7800070"
              style={{ color: "#e5c762", textDecoration: "none" }}
            >
              780-0070
            </a>
          </p>
        </div>

        <div className="footer-content">
          <h4
            style={{
              color: "#e5c762",
              margin: "0 0 1rem 0",
              textTransform: "uppercase",
              fontSize: "1.2rem",
            }}
          >
            Opnunartímar
          </h4>
          <p
            style={{
              color: "#ffffff",
              margin: "0 0 0.5rem 0",
              fontSize: "1rem",
            }}
          >
            Mán-Fim: 17:00 - 23:00
          </p>
          <p
            style={{
              color: "#ffffff",
              margin: "0 0 0.5rem 0",
              fontSize: "1rem",
            }}
          >
            Fös-Lau: 17:00 - 01:00
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ color: "#8c8c8c", margin: 0, fontSize: "0.8rem" }}>
          &copy; {new Date().getFullYear()} Dýrð Veitingastaður. Allur réttur
          áskilinn.
        </p>
      </div>
    </footer>
  );
}
