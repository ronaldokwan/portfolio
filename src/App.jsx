import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

// Route components are lazy-loaded so each page (and its heavy deps, e.g.
// react-pdf on Resume and tsparticles on the others) ships as its own chunk.
const Home = lazy(() => import("./components/Home/Home"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function App() {
  const [load, update] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      update(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<Preloader load={true} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
