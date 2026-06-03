import { useState } from "react";
import { motion as fMotion } from "framer-motion";
import "./styles.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Bókanir");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Vinsamlegast fylltu út alla nauðsynlega reiti á skininu.");
      return;
    }

    alert(
      `Erindi þitt varðandi "${subject}" hefur verið innsiglað og sent til Dýrðar!`,
    );
  };

  return (
    <main className="contact-page">
      <fMotion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <p className="contact-subtitle">Sendu okkur skilaboð</p>
        <h1 className="contact-title">Hafa samband</h1>
        <div className="gold-divider"></div>
      </fMotion.div>

      <fMotion.div
        className="parchment-letter"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="letter-seal">D</div>

        <form onSubmit={handleSubmit} className="letter-form" noValidate>
          <p className="letter-prose">
            Heil(ir) og sæl(ir) matgæðingar á Dýrð,
          </p>

          <p className="letter-prose">
            Ég,{" "}
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Fullt nafn þitt"
              className="letter-input name-input"
            />
            , vil senda ykkur erindi sem varðar{" "}
            <select
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="letter-select"
            >
              <option value="Almenn fyrirspurn">Almenn fyrirspurn</option>
              <option value="Bókanir">Bókanir</option>
              <option value="Fyrirtækjaþjónusta">Fyrirtækjaþjónusta</option>
            </select>
          </p>

          {subject === "Bókanir" && (
            <fMotion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="conditional-fields"
            >
              <p className="letter-prose">
                Óska ég eftir því að panta borð fyrir{" "}
                <input
                  type="number"
                  min="1"
                  max="20"
                  required
                  placeholder="Fjöldi"
                  className="letter-input number-input"
                />{" "}
                gesti, þann{" "}
                <input
                  type="date"
                  required
                  className="letter-input date-input"
                />{" "}
                klukkan{" "}
                <input
                  type="time"
                  required
                  className="letter-input time-input"
                />
              </p>
              <p className="letter-prose">
                Hér er netfangið mitt fyrir staðfestingu og/eða frekari
                samskipti:{" "}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Netfang þitt"
                  className="letter-input email-input"
                />
              </p>
              <p className="letter-prose flex-prose">
                Séróskir okkar eru (mataræði, ofnæmi eða tilefni dagsins):
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Skrifaðu ofnæmi, óskir eða ef um hátíðarhöld er að ræða hér..."
                  className="letter-textarea"
                  rows={3}
                />
              </p>
            </fMotion.div>
          )}

          {subject === "Almenn fyrirspurn" && (
            <fMotion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="conditional-fields"
            >
              <p className="letter-prose">
                Vinsamlegast hafið samband við mig í gegnum netfangið{" "}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Netfang þitt"
                  className="letter-input email-input"
                />
              </p>
              <p className="letter-prose flex-prose">
                Skilaboð mín og spurningar eru eftirfarandi:
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Skrifaðu spurningu þína hér..."
                  className="letter-textarea"
                  rows={4}
                />
              </p>
            </fMotion.div>
          )}

          {subject === "Fyrirtækjaþjónusta" && (
            <fMotion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="conditional-fields"
            >
              <p className="letter-prose">
                Ég kem fram fyrir hönd fyrirtækisins{" "}
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Nafn fyrirtækis"
                  className="letter-input company-input"
                />
                , og má ná í mig á netfangið{" "}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Vinnunetfang þitt"
                  className="letter-input email-input"
                />
              </p>
              <p className="letter-prose flex-prose">
                Óskir okkar varðandi viðburð, fundarhöld eða hópamatseðil:
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Skrifaðu nánari lýsingu á fyrirhuguðum viðburði eða þörfum fyrirtækisins..."
                  className="letter-textarea"
                  rows={4}
                />
              </p>
            </fMotion.div>
          )}

          <p className="letter-prose">
            Væntum við þess að fá staðfestingu ykkar fljótlega.
          </p>

          <div className="letter-closing-block">
            <p className="letter-prose">Með tilhlökkun og ánægju,</p>
            <p className="letter-signature">{name || "____________________"}</p>
          </div>

          <div className="letter-footer">
            <button type="submit" className="seal-button">
              Innsigla erindi
            </button>
          </div>
        </form>
      </fMotion.div>
    </main>
  );
}
