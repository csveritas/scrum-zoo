import React from 'react';

const Habitat: React.FC = () => {
    return (
        <div style={{padding: '2rem', borderRadius: '8px', maxWidth: '700px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
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

            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Seasonal Habitat Variation</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li><strong>Summer migrations:</strong> Move to higher altitudes with dense bamboo and cooler temperatures.</li>
                    <li><strong>Winter adaptations:</strong> Descend to lower, warmer valleys where food is more accessible.</li>
                    <li><strong>Sheltering behavior:</strong> Use hollow trees or rocky crevices during extreme weather.</li>
                    <li><strong>Seasonal diet shifts:</strong> Supplement bamboo with berries, roots, and small insects when needed.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Habitat Threats & Conservation</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li><strong>Deforestation:</strong> Logging and agriculture reduce bamboo forests.</li>
                    <li><strong>Habitat fragmentation:</strong> Forces red pandas into smaller, isolated areas.</li>
                    <li><strong>Livestock competition:</strong> Grazing animals deplete undergrowth food sources.</li>
                    <li><strong>Conservation measures:</strong> Establishing protected forests and eco-corridors to preserve habitat.</li>
                </ul>
            </section>

            <section style={{ padding: "60px", marginBottom: '1.5rem', textAlign: 'center' }}>
                <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', backgroundColor: '#fafafa', display: 'inline-block', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/RedPandaFullBody.JPG" alt="Red Panda in its natural habitat" style={{ maxWidth: '100%', borderRadius: '6px', marginBottom: '0.5rem' }} />
                    <p style={{ fontSize: '0.9rem', color: '#555' }}>A red panda in a bamboo-rich forest, its preferred habitat.</p>
                </div>
            </section>
        </div>
    );
};

export default Habitat;
