import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matsedill" element={<Menu />} />
        <Route path="/um-okkur" element={<About />} />
        <Route path="/hafa-samband" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
