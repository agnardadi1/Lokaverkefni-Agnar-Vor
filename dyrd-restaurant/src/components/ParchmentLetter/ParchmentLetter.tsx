import { useState } from "react";
import { motion as fMotion } from "framer-motion";

interface ParchmentLetterProps {
  language: "is" | "en";
}

export default function ParchmentLetter({ language }: ParchmentLetterProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Bókanir");
  const [message, setMessage] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [guests, setGuests] = useState("");
  const [formError, setFormError] = useState("");

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
    setFormError("");
  };

  const getTimeOptions = () => {
    if (!bookingDate) return [];
    const dayOfWeek = getDayOfWeekAbsolute(bookingDate);
    if (dayOfWeek === 0) return [];

    const isWeekendLong = dayOfWeek === 5 || dayOfWeek === 6;
    const standardTimes = [
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

    return isWeekendLong
      ? [...standardTimes, "23:00", "23:30", "00:00", "00:30"]
      : standardTimes;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (
      !name ||
      !email ||
      !subject ||
      !message ||
      (subject === "Bókanir" && (!bookingDate || !bookingTime || !guests)) ||
      (subject === "Fyrirtækjaþjónusta" && !company)
    ) {
      setFormError(
        language === "en"
          ? "Please fill out all required fields on the letter!"
          : "Vinsamlegast fylltu út alla nauðsynlega reiti á bréfinu!",
      );
      return;
    }

    if (subject === "Bókanir" && getDayOfWeekAbsolute(bookingDate) === 0) {
      setFormError(
        language === "en"
          ? "Cannot seal inquiry. Dýrð is closed on Sundays."
          : "Ekki hægt að innsigla erindi. Það er lokað á sunnudögum.",
      );
      return;
    }

    const alertSubject =
      subject === "Bókanir"
        ? language === "en"
          ? "Bookings"
          : "Bókanir"
        : subject === "Fyrirtækjaþjónusta"
          ? language === "en"
            ? "Corporate Services"
            : "Fyrirtækjaþjónusta"
          : language === "en"
            ? "General Inquiry"
            : "Almenn fyrirspurn";

    alert(
      language === "en"
        ? `Your inquiry regarding "${alertSubject}" has been sealed and sent to Dýrð!`
        : `Erindi þitt varðandi "${alertSubject}" hefur verið innsiglað og sent til Dýrðar!`,
    );
  };

  const currentDayOfWeek = bookingDate ? getDayOfWeekAbsolute(bookingDate) : -1;

  return (
    <fMotion.div
      className="parchment-letter"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      <div className="letter-seal">D</div>

      <form onSubmit={handleSubmit} className="letter-form" noValidate>
        <fMotion.p
          key={`salutation-${language}`}
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
          key={`intro-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="letter-prose"
        >
          {language === "en" ? "I, " : "Ég, "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setFormError("");
            }}
            placeholder={
              language === "en" ? "Your full name" : "Fullt nafn þitt"
            }
            className="letter-input name-input"
          />
          {language === "en"
            ? ", wish to contact you regarding "
            : ", vil senda ykkur erindi sem varðar "}
          <select
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setFormError("");
            }}
            className="letter-select"
          >
            <option value="Almenn fyrirspurn">
              {language === "en" ? "General Inquiry" : "Almenn fyrirspurn"}
            </option>
            <option value="Bókanir">
              {language === "en" ? "Bookings" : "Bókanir"}
            </option>
            <option value="Fyrirtækjaþjónusta">
              {language === "en" ? "Corporate Services" : "Fyrirtækjaþjónusta"}
            </option>
          </select>
        </fMotion.p>

        {subject === "Bókanir" && (
          <fMotion.div
            key={`bookings-${language}`}
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
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                  setFormError("");
                }}
                placeholder={language === "en" ? "Guests" : "Fjöldi"}
                className="letter-input number-input"
              />
              {language === "en" ? " guests, on " : " gesti, þann "}
              <input
                type="date"
                min={todayStr}
                value={bookingDate}
                onChange={(e) => handleDateChange(e.target.value)}
                className="letter-input date-input"
              />
              {language === "en" ? " at " : " klukkan "}
              <select
                value={bookingTime}
                onChange={(e) => {
                  setBookingTime(e.target.value);
                  setFormError("");
                }}
                className="letter-select time-select"
              >
                {!bookingDate && (
                  <option value="">
                    {language === "en" ? "Select date..." : "Veldu dag..."}
                  </option>
                )}
                {bookingDate && currentDayOfWeek === 0 && (
                  <option value="">
                    {language === "en" ? "Closed" : "Lokað"}
                  </option>
                )}
                {bookingDate && currentDayOfWeek !== 0 && (
                  <option value="">
                    {language === "en" ? "Time" : "Tími"}
                  </option>
                )}
                {getTimeOptions().map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </p>
            <p className="letter-prose">
              {language === "en"
                ? "Here is my email address for confirmation: "
                : "Hér er netfangið mitt fyrir staðfestingu: "}
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFormError("");
                }}
                placeholder={language === "en" ? "Your email" : "Netfang þitt"}
                className="letter-input email-input"
              />
            </p>
            <p className="letter-prose flex-prose">
              {language === "en"
                ? "Our special requests (dietary needs, allergies):"
                : "Séróskir okkar eru (mataræði, ofnæmi):"}
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setFormError("");
                }}
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
            key={`inquiry-${language}`}
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFormError("");
                }}
                placeholder={language === "en" ? "Your email" : "Netfang þitt"}
                className="letter-input email-input"
              />
            </p>
            <p className="letter-prose flex-prose">
              {language === "en"
                ? "My message and questions are as follows:"
                : "Skilaboð mín og spurningar eru eftirfarandi:"}
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setFormError("");
                }}
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
            key={`corporate-${language}`}
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
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                  setFormError("");
                }}
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFormError("");
                }}
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
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setFormError("");
                }}
                placeholder={
                  language === "en"
                    ? "Write a detailed description of the upcoming event..."
                    : "Skrifaðu nánari lýsingu á fyrirhuguðum viðburði..."
                }
                className="letter-textarea"
                rows={4}
              />
            </p>
          </fMotion.div>
        )}

        {formError && <p className="form-error-message">{formError}</p>}

        <fMotion.p
          key={`closing-${language}`}
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
            key={`signoff-${language}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="letter-prose"
          >
            {language === "en"
              ? "With anticipation and pleasure,"
              : "Með tilhlökkun og ánægju,"}
          </fMotion.p>

          <fMotion.p
            key={name.length}
            initial={{ opacity: 5, scale: 0.98, y: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="letter-signature"
          >
            {name || "________________"}
          </fMotion.p>
        </div>

        <div className="letter-footer">
          <fMotion.button
            key={`button-${language}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            type="submit"
            className="seal-button"
          >
            {language === "en" ? "Seal Inquiry" : "Innsigla erindi"}
          </fMotion.button>
        </div>
      </form>
    </fMotion.div>
  );
}
