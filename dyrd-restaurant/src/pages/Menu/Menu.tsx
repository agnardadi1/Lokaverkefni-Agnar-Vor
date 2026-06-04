import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { foodItems, drinkItems } from "./menuData";
import "./styles.css";

export default function Menu() {
  const { language } = useLanguage();

  const isEn = language === "en";

  return (
    <main className="menu-page">
      <motion.div
        className="menu-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="long-gold-line"></div>
        <motion.h1
          key={`menu-title-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="menu-title"
        >
          {isEn ? "The Menu" : "Matseðillinn"}
        </motion.h1>
        <div className="long-gold-line"></div>
        <div className="gold-divider"></div>
      </motion.div>

      <div className="menu-container">
        {foodItems.map((cat, catIdx) => (
          <motion.section
            key={`${catIdx}-${language}`}
            className="menu-category-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: catIdx * 0.15 }}
          >
            <h2 className="category-title">
              {isEn ? cat.categoryEn : cat.categoryIs}
            </h2>
            <div className="menu-items-list">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="menu-item">
                  <div className="menu-item-main">
                    <motion.h3
                      key={`food-name-${itemIdx}-${language}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="item-name"
                    >
                      {isEn ? item.nameEn : item.nameIs}
                    </motion.h3>
                    <div className="item-dots"></div>
                    <motion.span
                      key={`food-price-${itemIdx}-${language}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="item-price"
                    >
                      {isEn ? item.priceEn : item.priceIs}
                    </motion.span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        <motion.div
          className="menu-section-divider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="long-gold-line"></div>
          <motion.h2
            key={`drink-title-${language}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="menu-title"
          >
            {isEn ? "Wine & Cocktails" : "Vín & Kokteilar"}
          </motion.h2>
          <div className="long-gold-line"></div>
        </motion.div>

        {drinkItems.map((cat, catIdx) => (
          <motion.section
            key={`${catIdx}-drinks-${language}`}
            className="menu-category-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: catIdx * 0.15 }}
          >
            <h2 className="category-title">
              {isEn ? cat.categoryEn : cat.categoryIs}
            </h2>
            <div className="menu-items-list">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="menu-item">
                  <div className="menu-item-main">
                    <motion.h3
                      key={`drink-name-${itemIdx}-${language}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="item-name"
                    >
                      {isEn ? item.nameEn : item.nameIs}
                    </motion.h3>
                    <div className="item-dots"></div>
                    <motion.span
                      key={`drink-price-${itemIdx}-${language}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="item-price"
                    >
                      {isEn ? item.priceEn : item.priceIs}
                    </motion.span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
