import { motion } from "framer-motion";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

interface ExperienceSectionProps {
  language: string;
  t: (key: string) => string;
}

export default function ExperienceSection({
  language,
  t,
}: ExperienceSectionProps) {
  const cards = [
    {
      image: "/card-image-1.png",
      imageClass: "card-image-1",
      alt: "Card 1",
      titleKey: "card1Title",
      descKey: "card1Desc",
    },
    {
      image: "/card-image-2.png",
      imageClass: "card-image-2",
      alt: "Card 2",
      titleKey: "card2Title",
      descKey: "card2Desc",
    },
    {
      image: "/card-image-3.png",
      imageClass: "card-image-3",
      alt: "Card 3",
      titleKey: "card3Title",
      descKey: "card3Desc",
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-header">
        <p className="experience-subtitle"></p>
        <motion.h2
          key={`exp-title-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="experience-title"
        >
          {t("expTitle")}
        </motion.h2>
        <div className="gold-divider"></div>
      </div>

      <div className="experience-grid">
        {cards.map((card) => (
          <ExperienceCard
            key={card.titleKey}
            card={card}
            language={language}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}
