import { motion } from "framer-motion";

interface AboutSectionProps {
  language: string;
  t: (key: string) => string;
  titleKey: string;
  p1Key: string;
  p2Key: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function AboutSection({
  language,
  t,
  titleKey,
  p1Key,
  p2Key,
  imageSrc,
  imageAlt,
  reverse = false,
}: AboutSectionProps) {
  const textXOffset = reverse ? 30 : -30;
  const imageXOffset = reverse ? -30 : 30;

  return (
    <section className={`about-split-section ${reverse ? "reverse" : ""}`}>
      <motion.div
        className="about-text-content"
        initial={{ opacity: 0, x: textXOffset }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          key={`${titleKey}-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="about-section-title"
        >
          {t(titleKey)}
        </motion.h2>
        <motion.p
          key={`${p1Key}-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="about-paragraph"
        >
          {t(p1Key)}
        </motion.p>
        <motion.p
          key={`${p2Key}-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="about-paragraph"
        >
          {t(p2Key)}
        </motion.p>
      </motion.div>

      <motion.div
        className="about-image-wrapper"
        initial={{ opacity: 0, x: imageXOffset }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src={imageSrc} alt={imageAlt} />
      </motion.div>
    </section>
  );
}
