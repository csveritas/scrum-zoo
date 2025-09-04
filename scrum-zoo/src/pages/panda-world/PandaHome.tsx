import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';
import pandaImage from '../../assets/panda.jpg';

const PandaHome: React.FC = () => {
    return (
        <div>
            <Header />
            <main style={{ backgroundColor: 'white' }}>
                <h1>The Scrum Zoo - Panda World</h1>
                <img src={pandaImage} alt="Panda" />
                <SearchBox />
                <p>Welcome to Panda World! Explore the fascinating life of pandas.</p>
            </main>
            <Footer />
        </div>
    );
};

export default PandaHome;