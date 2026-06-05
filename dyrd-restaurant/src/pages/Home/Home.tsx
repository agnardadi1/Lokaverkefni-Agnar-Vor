import { useLanguage } from "../../context/LanguageContext";
import HeroSection from "../../components/HeroSection/HeroSection";
import IntroSection from "../../components/IntroSection/IntroSection";
import ExperienceSection from "../../components/ExperienceSection/ExperienceSection";
import "./styles.css";

export default function Home() {
  const { language, t } = useLanguage();

  return (
    <main className="home-container">
      <HeroSection language={language} t={t} />
      <IntroSection language={language} t={t} />
      <ExperienceSection language={language} t={t} />
    </main>
  );
}
