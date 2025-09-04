import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/panda-world" exact component={PandaHome} />
          <Route path="/panda-world/about" component={About} />
          <Route path="/panda-world/contact" component={Contact} />
          <Route path="/panda-world/mating" component={Mating} />
          <Route path="/panda-world/dietary-info" component={DietaryInfo} />
          <Route path="/panda-world/image-gallery" component={ImageGallery} />
          <Route path="/panda-world/anatomy-bio" component={AnatomyBio} />
          <Route path="/panda-world/behavior" component={Behavior} />
          <Route path="/panda-world/misc-facts" component={MiscFacts} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;