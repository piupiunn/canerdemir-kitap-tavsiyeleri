import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./navbar/Navbar";
import Felsefe from "./categories/felsefe/Felsefe";
import Tarih from "./categories/tarih/Tarih";
import Sanat from "./categories/sanat/Sanat";
import Bilim from "./categories/bilim/Bilim";
import Yonetım from "./categories/yonetim/Yonetım";
import KisiselGelisim from "./categories/kisisel-gelisim/KisiselGelisim";
import AnaSayfa from "./categories/ana-sayfa/Anasayfa";
import Roman from "./categories/roman/Roman";
import BilimKurgu from "./categories/bilim-kurgu/BilimKurgu";
//style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/canerdemir-kitap-tavsiyeleri" element={<AnaSayfa />} />
          <Route path="/felsefe" element={<Felsefe />} />
          <Route path="/tarih" element={<Tarih />} />
          <Route path="/sanat" element={<Sanat />} />
          <Route path="/bilim" element={<Bilim />} />
          <Route path="/yonetim" element={<Yonetım />} />
          <Route path="/kisisel-gelisim" element={<KisiselGelisim />} />
          <Route path="/roman" element={<Roman />} />
          <Route path="/bilim-kurgu" element={<BilimKurgu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
