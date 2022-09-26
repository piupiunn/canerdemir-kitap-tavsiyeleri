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
//style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/canerdemir-kitap-tavsiyeleri" element={<AnaSayfa />} />
          <Route
            path="/canerdemir-kitap-tavsiyeleri/felsefe"
            element={<Felsefe />}
          />
          <Route
            path="/canerdemir-kitap-tavsiyeleri/tarih"
            element={<Tarih />}
          />
          <Route
            path="/canerdemir-kitap-tavsiyeleri/sanat"
            element={<Sanat />}
          />
          <Route
            path="/canerdemir-kitap-tavsiyeleri/bilim"
            element={<Bilim />}
          />
          <Route
            path="/canerdemir-kitap-tavsiyeleri/yonetim"
            element={<Yonetım />}
          />
          <Route
            path="/canerdemir-kitap-tavsiyeleri/kisisel-gelisim"
            element={<KisiselGelisim />}
          />
          <Route
            path="/canerdemir-kitap-tavsiyeleri/roman"
            element={<Roman />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
