import React from 'react';

const AnatomyBio: React.FC = () => {
    return (
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '700px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: '#b33c00', marginBottom: '1rem' }}>Red Panda Anatomy & Biology</h1>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Physical Characteristics</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li><strong>Size:</strong> 20–25 inches (50–64 cm) body length, 11–23 inches (28–59 cm) bushy tail</li>
                    <li><strong>Weight:</strong> 8–17 pounds (3.5–8 kg); males slightly larger</li>
                    <li><strong>Fur:</strong> Dense, reddish-brown for camouflage; thick tail for balance and warmth</li>
                    <li><strong>Face:</strong> Round with white markings, pointed ears</li>
                    <li><strong>Claws:</strong> Strong, curved for gripping branches</li>
                </ul>
            </section>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Biological Traits</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li><strong>Respiration:</strong> Mammalian lungs, diaphragm, rib-driven breathing</li>
                    <li><strong>Activity:</strong> Solitary, mostly nocturnal and crepuscular (active at dawn/dusk)</li>
                    <li><strong>Habitat:</strong> Arboreal, tree-dwelling; skilled climbers with flexible ankles</li>
                </ul>
            </section>
            <section>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Diet & Digestion</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li><strong>Diet:</strong> Primarily bamboo; also fruits, eggs, small insects</li>
                    <li><strong>Digestive System:</strong> Classified as carnivores but inefficient at processing plant material</li>
                    <li><strong>Feeding:</strong> Must consume large amounts of food to meet energy needs</li>
                </ul>
            </section>
        </div>
    );
};

export default AnatomyBio;