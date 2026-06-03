import { motion } from "framer-motion";
import "./styles.css";

export default function About() {
  return (
    <main className="about-page">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <p className="about-subtitle">Sagan á bak við staðinn</p>
        <h1 className="about-title">Um Dýrð</h1>
        <div className="gold-divider"></div>
      </motion.div>

      <div className="about-container">
        <section className="about-split-section">
          <motion.div
            className="about-text-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-section-title">Matreiðsla án málamiðlana</h2>
            <p className="about-paragraph">
              Dýrð var stofnað með þá hugsjón að leiða saman dýrustu hráefni
              veraldar og framúrstefnulega íslenska matreiðslulist. Okkar markið
              er að kynna Íslendingum fyrir því besta sem völ er á.
            </p>
            <p className="about-paragraph">
              Hvert einasta smáatriði – frá handvöldu A5 Kobe nautakjöti yfir í
              stórbrotna Beluga kavíarinn – er allt meðhöndlað af ýtrustu
              virðingu og nákvæmni af matreiðslumönnum okkar.
            </p>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="about_1.png" alt="Matreiðslulist á Dýrð" />
          </motion.div>
        </section>

        <section className="about-split-section reverse">
          <motion.div
            className="about-text-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-section-title">Upplifunin í fyrsta sæti</h2>
            <p className="about-paragraph">
              Andrúmsloftið á Dýrð er órjúfanlegur hluti af matnum. Húsið er
              hannað með djúpa, dökka tóna og lágstemmda lýsingu í huga til þess
              að draga fram dýptina í hverjum rétti og leyfa bragðlaukunum að
              njóta sín í botn.
            </p>
            <p className="about-paragraph">
              Hér mætast fágun, dramatík og lúxus í formi sem þú upplifir hvergi
              annars staðar á Íslandi. Hvert borð er sérútbúið lokað svæði þar
              sem þú og þínir gestir getið átt ógleymanlega stund.
            </p>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="about_2.png" alt="Hönnun Dýrðar" />
          </motion.div>
        </section>
      </div>
    </main>
  );
}
