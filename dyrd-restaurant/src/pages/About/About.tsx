import { useLanguage } from "../../context/LanguageContext";
import AboutHeader from "../../components/AboutHeader/AboutHeader";
import AboutSection from "../../components/AboutSection/AboutSection";
import "./styles.css";

export default function About() {
  const { language, t } = useLanguage();

  return (
    <main className="about-page">
      <AboutHeader language={language} t={t} />

      <div className="about-container">
        <AboutSection
          language={language}
          t={t}
          titleKey="aboutSec1Title"
          p1Key="aboutSec1Para1"
          p2Key="aboutSec1Para2"
          imageSrc="/about_1.png"
          imageAlt="Matreiðslulist á Dýrð"
        />

        <AboutSection
          language={language}
          t={t}
          titleKey="aboutSec2Title"
          p1Key="aboutSec2Para1"
          p2Key="aboutSec2Para2"
          imageSrc="/about_2.png"
          imageAlt="Hönnun Dýrðar"
          reverse={true}
        />
      </div>
    </main>
  );
}
