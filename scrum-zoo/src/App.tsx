import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import Home from './pages/Home';
import PandaHome from './pages/panda-world/PandaHome';
import About from './pages/panda-world/About';
import Contact from './pages/panda-world/Contact';
import Mating from './pages/panda-world/Mating';
import DietaryInfo from './pages/panda-world/DietaryInfo';
import ImageGallery from './pages/panda-world/ImageGallery';
import AnatomyBio from './pages/panda-world/AnatomyBio';
import Behavior from './pages/panda-world/Behavior';
import MiscFacts from './pages/panda-world/MiscFacts';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <SearchBox />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panda-world" element={<PandaHome />} />
          <Route path="/panda-world/about" element={<About />} />
          <Route path="/panda-world/contact" element={<Contact />} />
          <Route path="/panda-world/mating" element={<Mating />} />
          <Route path="/panda-world/dietary-info" element={<DietaryInfo />} />
          <Route path="/panda-world/image-gallery" element={<ImageGallery />} />
          <Route path="/panda-world/anatomy-bio" element={<AnatomyBio />} />
          <Route path="/panda-world/behavior" element={<Behavior />} />
          <Route path="/panda-world/misc-facts" element={<MiscFacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;