import Home from "../../pages/LandingPage/home";
import About from "../../pages/About/about";
import Gallery from "../../pages/Gallery/gallery";
import Pricing from "../../pages/Pricing/pricing";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="blogs" element={<Gallery />} />
          <Route path="contact" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
