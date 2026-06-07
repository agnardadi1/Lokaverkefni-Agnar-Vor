# Dýrð Restaurant – Lokaverkefni

Nútímalegur, dýnamískur og fágaður vefur fyrir hágæða veitingastaðinn Dýrð. Vefurinn er hannaður með fágun og lúxusútlit í huga ásamt því að bjóða upp á aðlaðandi upplifun, mjúkar hreyfingar og snjalla virkni á öllum skjástærðum.

---

# Leiðbeiningar fyrir kennara – Ræsing síðunar

Fylgdu þessum einföldu skrefum til þess að keyra verkefnið upp í þróunarumhverfi á þinni tölvu:

# 1. Sækja og opna verkefnið

Gakktu úr skugga um að þú sért í rótarskránni (`dyrd-restaurant/`).

# 2. Setja upp dependencies

Keyrðu eftirfarandi skipun í terminalinu til þess að sækja alla nauðsynlega pakka (svo sem Framer Motion, Lenis o.fl.):
npm install

# 3. Ræsa þróunarþjóninn (Vite)

Til þess að keyra verkefnið af stað og opna fyrir aðgang á staðarneti (t.d. til þess að prófa flæðið í síma), notaðu skipunina:
npm run dev -- --host

# 4. Opna vefsíðu í vafra

Eftir ræsingu birtast staðbundnar slóðir í terminalinu. Smelltu á slóðina eða opnaðu vafra og sláðu inn:
➜ Local: http://localhost:5173/
➜ Network: http://192.168.68.61:5173/ (Fyrir t.d. að skoða vef í síma)

# 5. Tækni og tól í verkefninu

React (TypeScript): Notað fyrir alla íhluti og dýnamískt state til að halda utan um gögnin með sterkri týpunotkun.

Vite: Notað sem hraðvirkur byggingarþjónn og þróunarumhverfi.

Framer Motion: Keyrir allar hreyfingar, flettingar (scroll animations) og rauntíma blekflæðið á undirskriftinni.

Lenis Scroll: Sér um heildstæða og ofur-mjúka flettingu (smooth scrolling) yfir alla síðuna.

# 6. Helstu eiginleikar og virkni

Gagnvirkt bréf (Parchment Letter): Samskipta- og bókunarform sem breytist dýnamískt eftir því hvort valið er Bókanir, Almenn fyrirspurn eða Fyrirtækjaþjónusta.

Snjall tíma-fellilisti (Time Options): Sýnir mismunandi tíma dýnamískt eftir því hvort valinn er virkur dagur eða helgi, og lokar algjörlega á bókanir á sunnudögum. Einnig kemur error skilaboð ef notandi gleymir að fylla út í reit/i. Staðfesting birtist ef allt fyllt út.

Blek-hreyfing á undirskrift: Keyrt með framer-motion þar sem undirskriftin í MS Madi fontinum hreyfist mjúklega við hvern einasta slegna bókstaf, sem gefur tilfinningu fyrir lifandi bleki á pappír.

Tungumála valmöguleikar: Viðmótið styður fullkomlega skiptingu á milli íslensku og ensku með samstilltri þýðingu á öllum reitum og texta.

Farsímavæn hönnun (Responsive UI): Allir textar, línubrot, undirskriftir og hnappar minnka og raðast dýnamískt á minni skjáum til að koma í veg fyrir skörun.

Fáguð valmynd: Navigation bar sem byrjar gegnsætt en þegar notandi færir sig neðar á síðuna þá verður það frosted til að gera textann læsilegri og gerir vefinn fagmanlegri.

Samfélagsmiðlar: Neðst í footer er Instagram takki sem færir þig á Instagram síðu staðarins.

Þemu valkostir: Eftst upp í hægra horni getur notandi valið ljóst þema með því að ýta á sólina og tunglið síðan til að fara tilbaka.
