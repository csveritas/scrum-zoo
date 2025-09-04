import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import pandaImage from '../assets/panda.jpg';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main style={{ backgroundColor: 'white' }}>
                <h1>The Scrum Zoo</h1>
                <SearchBox />
                <h2>Welcome to The Scrum Zoo!</h2>
                <div>
                    <Link to="/panda-world/PandaHome">
                        <img src={pandaImage} alt="Panda" style={{ width: '300px', height: 'auto' }} />
                        <h3>Panda World</h3>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;