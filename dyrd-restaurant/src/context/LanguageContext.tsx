import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "is" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  is: {
    navHome: "Forsíða",
    navMenu: "Matseðill",
    navAbout: "Um okkur",
    navContact: "Hafa samband",

    heroSubtitle: "Einstök upplifun",
    heroTitleMain: "ÓGLEYMANLEG",
    heroTitleSub: "STUND.",
    heroDescription:
      "Dýrð er einstök upplifun þar sem lagt er mikil áhersla á upplifunina í heild sinni. Allir réttir eru sérstaklega hannaðir fyrir staðinn af margverðlaunuðum matreiðslumönnum og eru framleiddir úr bestu hráefnum sem völ er á. Við sameinum framúrstefnulega tækni, fáguð bragðbönd og dramatískt andrúmsloft þar sem smáatriðin skapa heildina. Fáðu þér sæti og leyfðu þér að njóta.",
    heroBookBtn: "Panta borð",
    heroMenuBtn: "Skoða matseðil",

    introTitle: "Smáatriðin fá að njóta sín",
    introText:
      "Ekkert á Dýrð er tilviljun. Frá hráefnum og framsetningu til lýsingar, þjónustu og hljóðláts andrúmslofts er hvert smáatriði hluti af stærri upplifun.",
    introBtn: "MEIRA UM DÝRÐ",

    expTitle: "Upplifunin",
    card1Title: "Matseðillinn",
    card1Desc:
      "Úthugsaður matseðill þar sem hver réttur er listaverk, samsettur úr bestu hráefnum heims.",
    card2Title: "Umhverfið",
    card2Desc:
      "Dökk, lifandi og dramatísk lýsing sem dregur þig inn í heim fágunar og dýrðar.",
    card3Title: "Salurinn & Barinn",
    card3Desc:
      "Vandað vínúrval og nýstárlegir kokteilar hannaðir til að tóna fullkomlega við matinn og dýpri upplifun.",

    aboutSubtitle: "Sagan á bak við staðinn",
    aboutTitle: "Um Dýrð",
    aboutSec1Title: "Matreiðsla án málamiðlana",
    aboutSec1Para1:
      "Dýrð var stofnað með þá hugsjón að leiða saman dýrustu hráefni veraldar og framúrstefnulega íslenska matreiðslulist. Okkar markið er að kynna Íslendingum fyrir því besta sem völ er á.",
    aboutSec1Para2:
      "Hvert einasta smáatriði – frá handvöldu A5 Kobe nautakjöti yfir í stórbrotna Beluga kavíarinn – er allt meðhöndlað af ýtrustu virðingu og nákvæmni af matreiðslumönnum okkar.",
    aboutSec2Title: "Upplifunin í fyrsta sæti",
    aboutSec2Para1:
      "Andrúmslofts-inn á Dýrð er órjúfanlegur hluti af matnum. Húsið er hannað með djúpa, dökka tóna og lágstemmda lýsingu í huga til þess að draga fram dýptina í hverjum rétti og leyfa bragðlaukunum að njóta sín í botn.",
    aboutSec2Para2:
      "Hér mætast fágun, dramatík og lúxus í formi sem þú upplifir hvergi annars staðar á Íslandi. Hvert borð er sérútbúið lokað svæði þar sem þú og þínir gestir getið átt ógleymanlega stund.",

    locationTitle: "Staðsetning",
    hoursTitle: "Opnunartímar",
    rightsReserved: "Allur réttur áskilinn.",
  },
  en: {
    navHome: "Home",
    navMenu: "Menu",
    navAbout: "About Us",
    navContact: "Contact",

    heroSubtitle: "An Exceptional Experience",
    heroTitleMain: "AN UNFORGETTABLE",
    heroTitleSub: "MOMENT.",
    heroDescription:
      "Dýrð offers a unique culinary journey where immense focus is placed on the experience as a whole. Every dish is exclusively crafted for the establishment by award-winning chefs, using only the finest premium ingredients available. We combine cutting-edge techniques, refined flavor profiles, and a dramatic ambiance where every micro-detail builds the grand design. Take your seat and allow yourself to indulge.",
    heroBookBtn: "Book a Table",
    heroMenuBtn: "View Menu",

    introTitle: "Where Details Flourish",
    introText:
      "Nothing at Dýrð is a coincidence. From raw ingredients and presentation to illumination, hospitality, and serene acoustics, every minute detail is an essential piece of a grander experience.",
    introBtn: "MORE ABOUT DÝRÐ",

    expTitle: "The Experience",
    card1Title: "The Menu",
    card1Desc:
      "A meticulously conceptualized menu where each dish is a masterpiece, composed of the world's finest ingredients.",
    card2Title: "The Ambiance",
    card2Desc:
      "Dark, vibrant, and dramatic lighting designed to immerse you into a world of ultimate refinement and glory.",
    card3Title: "The Lounge & Bar",
    card3Desc:
      "A highly curated wine list and innovative cocktails, tailored to harmonize flawlessly with the cuisine and deepen your experience.",

    aboutSubtitle: "The story behind the venue",
    aboutTitle: "About Dýrð",
    aboutSec1Title: "Culinary without compromise",
    aboutSec1Para1:
      "Dýrð was founded with the vision of bringing together the world's most exclusive ingredients and avant-garde Icelandic culinary arts. Our objective is to introduce our guests to the absolute finest gastronomy available.",
    aboutSec1Para2:
      "Every single detail – from hand-selected A5 Kobe beef to magnificent Beluga caviar – is treated with the utmost respect and precision by our master chefs.",
    aboutSec2Title: "The experience above all",
    aboutSec2Para1:
      "The ambiance at Dýrð is an inseparable extension of the cuisine. The venue is conceptualized with deep, dark tones and low-key lighting, designed to emphasize the depth of each dish and allow your palate to indulge completely.",
    aboutSec2Para2:
      "Here, refinement, drama, and luxury converge in a form experienced nowhere else in Iceland. Each table is a meticulously tailored, private sanctuary where you and your guests can share an unforgettable moment.",

    locationTitle: "Location",
    hoursTitle: "Opening Hours",
    rightsReserved: "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("is");

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
