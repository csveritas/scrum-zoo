import React from 'react';
import Footer from '../../components/Footer';
import {pandaImage} from "../../assets/assets";

const PandaHome: React.FC = () => {
    return (
        <div>
            <main style={{ backgroundColor: 'white' }}>
                <h1>The Scrum Zoo - Panda World</h1>
                <img src={pandaImage} alt="Panda" />
                <p>Welcome to Panda World! Explore the fascinating life of pandas.</p>
            </main>
            <Footer />
        </div>
    );
};

export default PandaHome;