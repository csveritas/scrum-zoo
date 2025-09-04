import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const About: React.FC = () => {
    return (
        <div>
            <h1>About Pandas</h1>
            <p>Pandas are large, bear-like mammals that are native to China. They are known for their distinctive black and white coloring and are a symbol of conservation efforts worldwide.</p>
            <p>Pandas primarily eat bamboo, but they are technically classified as carnivores. They have a unique digestive system that allows them to process large amounts of bamboo daily.</p>
            <Footer />
        </div>
    );
};

export default About;