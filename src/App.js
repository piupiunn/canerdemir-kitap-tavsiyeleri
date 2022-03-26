import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./navbar/Navbar";
import Felsefe from "./categories/felsefe/Felsefe";
import Tarih from "./categories/tarih/Tarih";
import Sanat from "./categories/sanat/Sanat";
import Bilim from "./categories/bilim/Bilim";
import KisiselGelisim from "./categories/kisisel-gelisim/KisiselGelisim";

//style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/felsefe" element={<Felsefe />} />
          <Route path="/tarih" element={<Tarih />} />
          <Route path="/sanat" element={<Sanat />} />
          <Route path="/bilim" element={<Bilim />} />
          <Route path="/kisisel-gelisim" element={<KisiselGelisim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;