import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.css";

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <p className="hero-subtitle">Einstök upplifun</p>
          <h1 className="hero-title">
            ÓGLEYMANLEG <br />
            <span className="hero-title-sub">STUND.</span>
          </h1>
          <p className="hero-description">
            Dýrð er einstök upplifun þar sem lagt er mikil áhersla á upplifunina
            í heild sinni. Allir réttir eru sérstaklega hannaðir fyrir staðinn
            af margverðlaunuðum matreiðslumönnum og eru framleiddir úr bestu
            hráefnum sem völ er á. Við sameinum framúrstefnulega tækni, fáguð
            bragðbönd og dramatískt andrúmsloft þar sem smáatriðin skapa
            heildina. Fáðu þér sæti og leyfðu þér að njóta.
          </p>
          <div className="hero-buttons-group">
            <Link to="/hafa-samband" className="hero-btn-filled">
              Panta borð
            </Link>

            <Link to="/matsedill" className="hero-btn-outline">
              Skoða matseðil
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2 className="intro-title">Smáatriðin fá að njóta sín</h2>
          <p className="intro-text">
            Ekkert á Dýrð er tilviljun. Frá hráefnum og framsetningu til
            lýsingar, þjónustu og hljóðláts andrúmslofts er hvert smáatriði
            hluti af stærri upplifun.
          </p>
          <Link to="/um-okkur" className="intro-outline-btn">
            MEIRA UM DÝRÐ
          </Link>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-header">
          <p className="experience-subtitle"></p>
          <h2 className="experience-title">Upplifunin</h2>
          <div className="gold-divider"></div>
        </div>

        <div className="experience-grid">
          <div className="experience-card">
            <div className="card-image-wrapper">
              <div className="card-overlay"></div>
              <img
                src="/card-image-1.png"
                alt="Card 1"
                className="card-image-1"
              />
            </div>
            <h3>Matseðillinn</h3>
            <p>
              Úthugsaður matseðill þar sem hver réttur er listaverk, samsettur
              úr bestu hráefnum heims.
            </p>
          </div>

          <div className="experience-card">
            <div className="card-image-wrapper">
              <div className="card-overlay"></div>
              <img
                src="/card-image-2.png"
                alt="Card 2"
                className="card-image-2"
              />
            </div>
            <h3>Umhverfið</h3>
            <p>
              Dökk, lifandi og dramatísk lýsing sem dregur þig inn í heim
              fágunar og dýrðar.
            </p>
          </div>

          <div className="experience-card">
            <div className="card-image-wrapper">
              <div className="card-overlay"></div>
              <img
                src="/card-image-3.png"
                alt="Card 3"
                className="card-image-3"
              />
            </div>
            <h3>Salurinn & Barinn</h3>
            <p>
              Vandað vínúrval og nýstárlegir kokteilar hannaðir til að tóna
              fullkomlega við matinn og dýpri upplifun.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
