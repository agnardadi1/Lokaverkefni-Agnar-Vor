import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import "./styles.css";

export default function Menu() {
  const { language } = useLanguage();

  const foodItems = [
    {
      category: language === "en" ? "Appetizers" : "Forréttir",
      items: [
        {
          name:
            language === "en"
              ? "Bluefin tuna (Otoro), fermented yuzu & Beluga caviar"
              : "Bláugga túnfiskur (Otoró), fermentað yuzu & Beluga kavíar",
          price: language === "en" ? "$64" : "8.900 kr",
        },
        {
          name:
            language === "en"
              ? "Golden foal tenderloin, winter truffle, browned butter & walnut foam"
              : "Gullin hrossaslyðra, vetrar-truffla, brennt smjör & valhnetuský",
          price: language === "en" ? "$55" : "7.600 kr",
        },
        {
          name:
            language === "en"
              ? "Hokkaido scallops, white chocolate velouté & dill oil"
              : "Hörpuskelfiskur frá Hokkaido, hvítasúkkulaði-velouté & dilliolía",
          price: language === "en" ? "$57" : "7.900 kr",
        },
      ],
    },
    {
      category: language === "en" ? "Main Courses" : "Aðalréttir",
      items: [
        {
          name:
            language === "en"
              ? "Certified A5 Kobe beef (100g), smoked bone marrow, sake glaze & truffle purée"
              : "Vottað A5 Kobe beef (100g), reyktur mergur, sake-gljái & trufflumús",
          price: language === "en" ? "$248" : "34.500 kr",
        },
        {
          name:
            language === "en"
              ? "Whole grilled wild langoustine, maple-glazed tomato jam & gold leaf"
              : "Heilgrillaður villtur humar, hlynsíróps-gljáð tómatsulta & gullblað",
          price: language === "en" ? "$136" : "18.900 kr",
        },
        {
          name:
            language === "en"
              ? "Lightly cured duck breast, wild mushroom tartalette, redcurrant dust & dark brine syrup"
              : "Létt þurrkuð andarbringa, villisveppatartaletta, rifsberjaryk & dökkt pækilsíróp",
          price: language === "en" ? "$118" : "16.400 kr",
        },
      ],
    },
    {
      category: language === "en" ? "Desserts" : "Eftirréttir",
      items: [
        {
          name:
            language === "en"
              ? "Gold-leaf Valrhona chocolate mousse, white truffle cream & scorched lava"
              : "Gullskreytt Valrhona súkkulaðimousse, hvítt trufflukrem & brennt hraun",
          price: language === "en" ? "$35" : "4.800 kr",
        },
        {
          name:
            language === "en"
              ? "Candied yuzu tart, champagne granita & organic vanilla oat dust"
              : "Kandíseruð yuzu-tarta, kampavíns-graníta & lífrænt vanillu-hafraryk",
          price: language === "en" ? "$30" : "4.200 kr",
        },
      ],
    },
  ];

  const drinkItems = [
    {
      category: language === "en" ? "Wine Selection" : "Vínseðill",
      items: [
        {
          name: "Dom Pérignon Brut Rose 2012 (Glass)",
          price: language === "en" ? "$68" : "9.500 kr",
        },
        {
          name: "Dom Pérignon Brut Rose 2012 (Bottle)",
          price: language === "en" ? "$490" : "68.000 kr",
        },
        {
          name: "Château Margaux Premier Grand Cru Classé 2015 (Bottle)",
          price: language === "en" ? "$1,330" : "185.000 kr",
        },
        {
          name: "Krug Clos d'Ambonnay Champagne (Bottle)",
          price: language === "en" ? "$2,300" : "320.000 kr",
        },
      ],
    },
    {
      category: language === "en" ? "Cocktails" : "Kokteilar",
      items: [
        {
          name:
            language === "en"
              ? "Liquid Gold — Louis XIII cognac, 24k gold leaf, charred saffron & smoke"
              : "Liquid Gold — Louis XIII koníak, 24k gullblað, brennt saffron & reykur",
          price: language === "en" ? "$50" : "6.900 kr",
        },
        {
          name:
            language === "en"
              ? "Eclipse — Smoked white tea, dark rum, wild honey & neutral truffle mist"
              : "Eclipse — Reykt hvítt te, dökkt róm, villihunang & hlutlaus trufflu-úði",
          price: language === "en" ? "$35" : "4.800 kr",
        },
        {
          name:
            language === "en"
              ? "Midnight Elixir — Japanese yuzu, herbal liqueur, champagne top & violet dust"
              : "Midnight Elixir — Japanskt yuzu, jurtalíkjör, kampavíns-toppur & fjólublátt ryk",
          price: language === "en" ? "$32" : "4.500 kr",
        },
      ],
    },
  ];

  return (
    <main className="menu-page">
      <motion.div
        className="menu-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="long-gold-line"></div>
        <h1 className="menu-title">
          {language === "en" ? "The Menu" : "Matseðillinn"}
        </h1>
        <div className="long-gold-line"></div>
        <div className="gold-divider"></div>
      </motion.div>

      <div className="menu-container">
        {foodItems.map((cat, catIdx) => (
          <motion.section
            key={catIdx}
            className="menu-category-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: catIdx * 0.15 }}
          >
            <h2 className="category-title">{cat.category}</h2>
            <div className="menu-items-list">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="menu-item">
                  <div className="menu-item-main">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-dots"></div>
                    <span className="item-price">{item.price}</span>
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
          <h2 className="menu-title">
            {language === "en" ? "Wine & Cocktails" : "Vín & Kokteilar"}
          </h2>
          <div className="long-gold-line"></div>
        </motion.div>

        {drinkItems.map((cat, catIdx) => (
          <motion.section
            key={catIdx}
            className="menu-category-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: catIdx * 0.15 }}
          >
            <h2 className="category-title">{cat.category}</h2>
            <div className="menu-items-list">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="menu-item">
                  <div className="menu-item-main">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-dots"></div>
                    <span className="item-price">{item.price}</span>
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
