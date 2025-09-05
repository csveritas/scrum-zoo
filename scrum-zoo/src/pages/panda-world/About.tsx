import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const About: React.FC = () => {
    return (
        <div style={{padding: '2rem', borderRadius: '8px', maxWidth: '700px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: '#b33c00', marginBottom: '1rem' }}>About Red Pandas</h1>

            <section style={{ marginBottom: '1.5rem' }}>
                <p>Pandas are large, bear-like mammals that are native to China. They are known for their distinctive black and white coloring and are a symbol of conservation efforts worldwide.</p>
            <p>Pandas primarily eat bamboo, but they are technically classified as carnivores. They have a unique digestive system that allows them to process large amounts of bamboo daily.</p>
            </section>
        </div>
    );
};

export default About;