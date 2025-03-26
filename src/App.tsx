import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LenisProvider } from "./context/LenisContext";
import { ScrollToTop } from "./components/ScrollToTop";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <LenisProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LenisProvider>
  );
}

export default App;
