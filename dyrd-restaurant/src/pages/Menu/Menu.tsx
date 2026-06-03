import { motion } from "framer-motion";
import "./styles.css";

export default function Menu() {
  const foodItems = [
    {
      category: "Forréttir",
      items: [
        {
          name: "Bláugga túnfiskur (Otoró), fermentað yuzu & Beluga kavíar",
          price: "8.900 kr",
        },
        {
          name: "Gullin hrossaslyðra, vetrar-truffla, brennt smjör & valhnetuský",
          price: "7.600 kr",
        },
        {
          name: "Hörpuskelfiskur frá Hokkaido, hvítasúkkulaði-velouté & dilliolía",
          price: "7.900 kr",
        },
      ],
    },
    {
      category: "Aðalréttir",
      items: [
        {
          name: "Vottað A5 Kobe beef (100g), reyktur mergur, sake-gljái & trufflumús",
          price: "34.500 kr",
        },
        {
          name: "Heilgrillaður villtur humar, hlynsíróps-gljáð tómatsulta & gullblað",
          price: "18.900 kr",
        },
        {
          name: "Þurrkuð andarbringa, villisveppatartaletta, rifsberjaryk & dökkt pækilsíróp",
          price: "16.400 kr",
        },
      ],
    },
    {
      category: "Eftirréttir",
      items: [
        {
          name: "Gullskreytt Valrhona súkkulaðimousse, hvítt trufflukrem & brennt hraun",
          price: "4.800 kr",
        },
        {
          name: "Kandíseruð yuzu-tarta, kampavíns-graníta & lífrænt vanillu-hafraryk",
          price: "4.200 kr",
        },
      ],
    },
  ];

  const drinkItems = [
    {
      category: "Vínseðill",
      items: [
        { name: "Dom Pérignon Brut Rose 2012 (Glas)", price: "9.500 kr" },
        { name: "Dom Pérignon Brut Rose 2012 (Flaska)", price: "68.000 kr" },
        {
          name: "Château Margaux Premier Grand Cru Classé 2015 (Flaska)",
          price: "185.000 kr",
        },
        {
          name: "Krug Clos d'Ambonnay Champagne (Flaska)",
          price: "320.000 kr",
        },
      ],
    },
    {
      category: "Kokteilar",
      items: [
        {
          name: "Liquid Gold — Louis XIII koníak, 24k gullblað, brennt saffron & reykur",
          price: "6.900 kr",
        },
        {
          name: "Eclipse — Reykt hvítt te, dökkt róm, villihunang & hlutlaus trufflu-úði",
          price: "4.800 kr",
        },
        {
          name: "Midnight Elixir — Japanskt yuzu, jurtalíkjör, kampavíns-toppur & fjólublátt ryk",
          price: "4.500 kr",
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
        <h1 className="menu-title">Matseðillinn</h1>
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
          <h2 className="menu-title">Vín & Kokteilar</h2>
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
