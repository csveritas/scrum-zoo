import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PandaHome from './pages/panda-world/PandaHome';
import About from './pages/panda-world/About';
import Contact from './pages/panda-world/Contact';
import DietaryInfo from './pages/panda-world/DietaryInfo';
import ImageGallery from './pages/panda-world/ImageGallery';
import AnatomyBio from './pages/panda-world/AnatomyBio';
import Habitat from './pages/panda-world/Habitat';
import Behavior from './pages/panda-world/Behavior';
import MiscFacts from './pages/panda-world/MiscFacts';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panda-world/PandaHome" element={<PandaHome />} />
          <Route path="/panda-world/about" element={<About />} />
          <Route path="/panda-world/contact" element={<Contact />} />
          <Route path="/panda-world/habitat" element={<Habitat />} />
          <Route path="/panda-world/dietaryinfo" element={<DietaryInfo />} />
          <Route path="/panda-world/anatomybio" element={<AnatomyBio />} />
          <Route path="/panda-world/habitat" element={<Habitat />} />
          <Route path="/panda-world/behavior" element={<Behavior />} />
          <Route path="/panda-world/miscfacts" element={<MiscFacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;