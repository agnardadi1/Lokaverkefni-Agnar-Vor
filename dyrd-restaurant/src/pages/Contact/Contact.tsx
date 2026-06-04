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
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [guests, setGuests] = useState("");
  const [timeError, setTimeError] = useState("");

  const todayStr = new Date().toISOString().split("T")[0];

  const getDayOfWeekAbsolute = (dateStr: string) => {
    if (!dateStr) return -1;
    const parts = dateStr.split("-");
    let year = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    if (month === 1 || month === 2) {
      month += 12;
      year -= 1;
    }

    const k = year % 100;
    const j = Math.floor(year / 100);

    const f =
      day +
      Math.floor((13 * (month + 1)) / 5) +
      k +
      Math.floor(k / 4) +
      Math.floor(j / 4) +
      5 * j;
    const zellerDay = f % 7;

    const isoDays: { [key: number]: number } = {
      0: 6,
      1: 0,
      2: 1,
      3: 2,
      4: 3,
      5: 4,
      6: 5,
    };

    return isoDays[zellerDay];
  };

  const handleDateChange = (dateStr: string) => {
    setBookingDate(dateStr);
    setBookingTime("");

    if (!dateStr) {
      setTimeError("");
      return;
    }

    const dayOfWeek = getDayOfWeekAbsolute(dateStr);

    if (dayOfWeek === 0) {
      setTimeError(
        language === "en"
          ? "Dýrð is closed on Sundays. Please select another date."
          : "Það er lokað á sunnudögum á Dýrð. Vinsamlegast veldu annan dag.",
      );
    } else {
      setTimeError("");
    }
  };

  const getTimeOptions = () => {
    if (!bookingDate) return [];

    const dayOfWeek = getDayOfWeekAbsolute(bookingDate);
    if (dayOfWeek === 0) return [];

    const isWeekendLong = dayOfWeek === 5 || dayOfWeek === 6;

    if (isWeekendLong) {
      return [
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
        "00:00",
        "00:30",
      ];
    } else {
      return [
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
      ];
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (subject === "Bókanir") {
      if (!bookingDate) return;
      if (getDayOfWeekAbsolute(bookingDate) === 0) return;
    }

    if (
      !name ||
      !email ||
      !subject ||
      !message ||
      (subject === "Bókanir" && (!bookingDate || !bookingTime))
    ) {
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

  const currentDayOfWeek = bookingDate ? getDayOfWeekAbsolute(bookingDate) : -1;

  return (
    <main className="contact-page">
      <fMotion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <fMotion.p
          key={`contact-subtitle-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="contact-subtitle"
        >
          {language === "en" ? "Send us a message" : "Sendu okkur skilaboð"}
        </fMotion.p>
        <fMotion.h1
          key={`contact-title-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="contact-title"
        >
          {language === "en" ? "Contact Us" : "Hafa samband"}
        </fMotion.h1>
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
          <fMotion.p
            key={`letter-salutation-${language}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="letter-prose"
          >
            {language === "en"
              ? "Dear culinary enthusiasts at Dýrð,"
              : "Kæru matgæðingar á Dýrð,"}
          </fMotion.p>

          <fMotion.p
            key={`letter-intro-${language}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="letter-prose"
          >
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
          </fMotion.p>

          {subject === "Bókanir" && (
            <fMotion.div
              key={`fields-bookings-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
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
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder={language === "en" ? "Guests" : "Fjöldi"}
                  className="letter-input number-input"
                />{" "}
                {language === "en" ? "guests, on " : "gesti, þann "}
                <input
                  type="date"
                  required
                  min={todayStr}
                  value={bookingDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className="letter-input date-input"
                />{" "}
                {language === "en" ? "at " : "klukkan "}
                <select
                  required
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="letter-select time-select"
                >
                  {!bookingDate && (
                    <option value="" disabled>
                      {language === "en" ? "Select date..." : "Veldu dag..."}
                    </option>
                  )}
                  {bookingDate && currentDayOfWeek === 0 && (
                    <option value="" disabled>
                      {language === "en" ? "Closed" : "Lokað"}
                    </option>
                  )}
                  {bookingDate && currentDayOfWeek !== 0 && (
                    <option value="" disabled>
                      {language === "en" ? "Time" : "Tími"}
                    </option>
                  )}
                  {getTimeOptions().map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </p>
              <p className="letter-prose">
                {language === "en"
                  ? "Here is my email address for confirmation and/or further correspondence: "
                  : "Hér er netfangið mitt fyrir staðfestingu and/eða frekari samskipti: "}
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
              key={`fields-inquiry-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
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
              key={`fields-corporate-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
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

          {timeError && (
            <p
              style={{
                color: "#720000",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.3rem",
                fontStyle: "italic",
                fontWeight: 500,
                textAlign: "center",
                margin: "2rem 0 1rem 0",
                letterSpacing: "0.02em",
              }}
            >
              {timeError}
            </p>
          )}

          <fMotion.p
            key={`letter-closing-${language}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="letter-prose"
          >
            {language === "en"
              ? "We look forward to hearing from you."
              : "Við hlökkum til að heyra frá ykkur."}
          </fMotion.p>

          <div className="letter-closing-block">
            <fMotion.p
              key={`letter-signoff-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="letter-prose"
            >
              {language === "en"
                ? "With anticipation and pleasure,"
                : "Með tilhlökkun og ánægju,"}
            </fMotion.p>
            <p className="letter-signature">{name || "____________________"}</p>
          </div>

          <div className="letter-footer">
            <fMotion.button
              key={`letter-button-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              type="submit"
              disabled={
                !!timeError ||
                (subject === "Bókanir" && (!bookingDate || !bookingTime))
              }
              style={{
                opacity:
                  timeError ||
                  (subject === "Bókanir" && (!bookingDate || !bookingTime))
                    ? 0.3
                    : 1,
                cursor:
                  timeError ||
                  (subject === "Bókanir" && (!bookingDate || !bookingTime))
                    ? "not-allowed"
                    : "pointer",
              }}
              className="seal-button"
            >
              {language === "en" ? "Seal Inquiry" : "Innsigla erindi"}
            </fMotion.button>
          </div>
        </form>
      </fMotion.div>
    </main>
  );
}
