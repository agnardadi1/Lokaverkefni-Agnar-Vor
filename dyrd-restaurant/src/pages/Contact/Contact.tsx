import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import ParchmentLetter from "../../components/ParchmentLetter/ParchmentLetter";
import "./styles.css";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <main className="contact-page">
      <ContactHeader language={language} />
      <ParchmentLetter language={language} />
    </main>
  );
}
