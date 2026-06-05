import { motion } from "framer-motion";
import { foodItems, drinkItems } from "../../data/menuItems";

interface MenuItem {
  nameEn: string;
  nameIs: string;
  priceEn: string;
  priceIs: string;
}

interface MenuCategory {
  categoryEn: string;
  categoryIs: string;
  items: MenuItem[];
}

interface MenuSectionProps {
  language: "is" | "en";
  t: (key: string) => string;
}

export default function MenuSection({ language }: MenuSectionProps) {
  const allCategories: MenuCategory[] = [...foodItems, ...drinkItems];

  return (
    <div className="menu-container">
      {allCategories.map((categoryObj: MenuCategory) => {
        const categoryTitle =
          language === "en" ? categoryObj.categoryEn : categoryObj.categoryIs;

        return (
          <section
            key={categoryObj.categoryEn}
            className="menu-category-section"
          >
            <motion.h2
              className="category-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              {categoryTitle}
            </motion.h2>

            <div className="menu-items-list">
              {categoryObj.items.map((item: MenuItem, index: number) => {
                const itemName = language === "en" ? item.nameEn : item.nameIs;
                const itemPrice =
                  language === "en" ? item.priceEn : item.priceIs;

                return (
                  <motion.div
                    key={item.nameEn}
                    className="menu-item"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.215, 0.61, 0.355, 1.0],
                    }}
                  >
                    <div className="menu-item-main">
                      <h3 className="item-name">{itemName}</h3>
                      <div className="item-dots"></div>
                      <span className="item-price">{itemPrice}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
