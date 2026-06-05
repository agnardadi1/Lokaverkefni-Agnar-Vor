import { useLanguage } from "../../context/LanguageContext";
import MenuSection from "../../components/MenuSection/MenuSection";
import "./styles.css";

export default function Menu() {
  const { language, t } = useLanguage();

  return (
    <main className="menu-page">
      <div className="menu-header">
        <h1 className="menu-title">{t("navMenu") || "Matseðill"}</h1>
        <div className="long-gold-line"></div>
      </div>
      <MenuSection language={language} t={t} />
    </main>
  );
}
