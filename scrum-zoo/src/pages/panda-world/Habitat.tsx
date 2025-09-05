import React from 'react';

const Habitat: React.FC = () => {
    return (
        <div className='panda-background' style={{padding: '2rem', borderRadius: '8px', maxWidth: '700px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: '#b33c00', marginBottom: '1rem' }}>Red Panda Habitat</h1>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Geographic Range & Environment</h2>
                <p>Red pandas are small, tree-dwelling mammals found in the temperate forests of the eastern Himalayas and southwestern China. They primarily inhabit regions of Nepal, Bhutan, India, Myanmar, and China, where cool climates and dense forests with abundant bamboo provide the ideal environment for their survival. These forests typically exist at elevations between 2,200 and 4,800 meters (7,200 to 15,700 feet), where thick canopies and understories help protect red pandas from predators and harsh weather conditions.</p>
            </section>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Habitat Needs</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li><strong>Bamboo-rich forests:</strong> Essential for their diet and survival.</li>
                    <li><strong>Old trees & natural hollows:</strong> Used for nesting and shelter.</li>
                    <li><strong>High tree nests:</strong> Built in hollow trunks, branches, or rocky crevices, lined with leaves, moss, and soft materials.</li>
                    <li><strong>Arboreal lifestyle:</strong> Helps them stay hidden from predators and access food sources easily.</li>
                </ul>
            </section>
        </div>
    );
};

export default Habitat;
