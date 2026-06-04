import { useState } from "react";
import { motion as fMotion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import "./styles.css";

export default function Contact() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Bókanir");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert(
        language === "en"
          ? "Please fill out all required fields on the letter!"
          : "Vinsamlegast fylltu út alla nauðsynlega reiti á bréfinu!",
      );
      return;
    }

    alert(
      language === "en"
        ? `Your inquiry regarding "${
            subject === "Bókanir"
              ? "Bookings"
              : subject === "Fyrirtækjaþjónusta"
                ? "Corporate Services"
                : "General Inquiry"
          }" has been sealed and sent to Dýrð!`
        : `Erindi þitt varðandi "${subject}" hefur verið innsiglað og sent til Dýrðar!`,
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
        <p className="contact-subtitle">
          {language === "en" ? "Send us a message" : "Sendu okkur skilaboð"}
        </p>
        <h1 className="contact-title">
          {language === "en" ? "Contact Us" : "Hafa samband"}
        </h1>
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
            {language === "en"
              ? "Dear culinary enthusiasts at Dýrð,"
              : "Heil(ir) og sæl(ir) matgæðingar á Dýrð,"}
          </p>

          <p className="letter-prose">
            {language === "en" ? "I, " : "Ég, "}
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={
                language === "en" ? "Your full name" : "Fullt nafn þitt"
              }
              className="letter-input name-input"
            />
            {language === "en"
              ? ", wish to contact you regarding "
              : ", vil senda ykkur erindi sem varðar "}
            <select
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="letter-select"
            >
              <option value="Almenn fyrirspurn">
                {language === "en" ? "General Inquiry" : "Almenn fyrirspurn"}
              </option>
              <option value="Bókanir">
                {language === "en" ? "Bookings" : "Bókanir"}
              </option>
              <option value="Fyrirtækjaþjónusta">
                {language === "en"
                  ? "Corporate Services"
                  : "Fyrirtækjaþjónusta"}
              </option>
            </select>
          </p>

          {subject === "Bókanir" && (
            <fMotion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="conditional-fields"
            >
              <p className="letter-prose">
                {language === "en"
                  ? "I would like to reserve a table for "
                  : "Óska ég eftir því að panta borð fyrir "}
                <input
                  type="number"
                  min="1"
                  max="20"
                  required
                  placeholder={language === "en" ? "Guests" : "Fjöldi"}
                  className="letter-input number-input"
                />{" "}
                {language === "en" ? "guests, on " : "gesti, þann "}
                <input
                  type="date"
                  required
                  className="letter-input date-input"
                />{" "}
                {language === "en" ? "at " : "klukkan "}
                <input
                  type="time"
                  required
                  className="letter-input time-input"
                />
              </p>
              <p className="letter-prose">
                {language === "en"
                  ? "Here is my email address for confirmation and/or further correspondence: "
                  : "Hér er netfangið mitt fyrir staðfestingu og/eða frekari samskipti: "}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    language === "en" ? "Your email" : "Netfang þitt"
                  }
                  className="letter-input email-input"
                />
              </p>
              <p className="letter-prose flex-prose">
                {language === "en"
                  ? "Our special requests (dietary needs, allergies, or special occasion):"
                  : "Séróskir okkar eru (mataræði, ofnæmi eða tilefni dagsins):"}
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === "en"
                      ? "Write allergies, wishes, or special celebrations here..."
                      : "Skrifaðu ofnæmi, óskir eða ef um hátíðarhöld er að ræða hér..."
                  }
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
                {language === "en"
                  ? "Please contact me via email at "
                  : "Vinsamlegast hafið samband við mig í gegnum netfangið "}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    language === "en" ? "Your email" : "Netfang þitt"
                  }
                  className="letter-input email-input"
                />
              </p>
              <p className="letter-prose flex-prose">
                {language === "en"
                  ? "My message and questions are as follows:"
                  : "Skilaboð mín og spurningar eru eftirfarandi:"}
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === "en"
                      ? "Write your questions here..."
                      : "Skrifaðu spurningu þína hér..."
                  }
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
                {language === "en"
                  ? "I represent the company "
                  : "Ég kem fram fyrir hönd fyrirtækisins "}
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={
                    language === "en" ? "Company name" : "Nafn fyrirtækis"
                  }
                  className="letter-input company-input"
                />
                {language === "en"
                  ? ", and I can be reached at the email address "
                  : " , og má ná í mig á netfangið "}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    language === "en" ? "Your work email" : "Vinnunetfang þitt"
                  }
                  className="letter-input email-input"
                />
              </p>
              <p className="letter-prose flex-prose">
                {language === "en"
                  ? "Our requests regarding events, meetings, or group menus:"
                  : "Óskir okkar varðandi viðburð, fundarhöld eða hópamatseðil:"}
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === "en"
                      ? "Write a detailed description of the upcoming event or company needs..."
                      : "Skrifaðu nánari lýsingu á fyrirhuguðum viðburði eða þörfum fyrirtækisins..."
                  }
                  className="letter-textarea"
                  rows={4}
                />
              </p>
            </fMotion.div>
          )}

          <p className="letter-prose">
            {language === "en"
              ? "We look forward to hearing from you."
              : "Við hlökkum til að heyra frá ykkur."}
          </p>

          <div className="letter-closing-block">
            <p className="letter-prose">
              {language === "en"
                ? "With anticipation and pleasure,"
                : "Með tilhlökkun og ánægju,"}
            </p>
            <p className="letter-signature">{name || "____________________"}</p>
          </div>

          <div className="letter-footer">
            <button type="submit" className="seal-button">
              {language === "en" ? "Seal Inquiry" : "Innsigla erindi"}
            </button>
          </div>
        </form>
      </fMotion.div>
    </main>
  );
}
