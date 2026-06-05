import { motion } from "framer-motion";

interface CardData {
  image: string;
  alt: string;
  imageClass: string;
  titleKey: string;
  descKey: string;
}

interface ExperienceCardProps {
  card: CardData;
  language: string;
  t: (key: string) => string;
}

export default function ExperienceCard({
  card,
  language,
  t,
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="card-image-wrapper">
        <div className="card-overlay"></div>
        <img src={card.image} alt={card.alt} className={card.imageClass} />
      </div>
      <motion.h3
        key={`${card.titleKey}-${language}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {t(card.titleKey)}
      </motion.h3>
      <motion.p
        key={`${card.descKey}-${language}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {t(card.descKey)}
      </motion.p>
    </div>
  );
}
