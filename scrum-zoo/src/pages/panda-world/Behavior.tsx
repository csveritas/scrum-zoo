import React from 'react';

const Behavior: React.FC = () => {
    return (
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '700px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: '#b33c00', marginBottom: '1rem' }}>Red Panda Behavior</h1>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Communication</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li><strong>Vocalizations:</strong> Squeals, twitters, huff-quacks signal alarm, mating interest, or social interaction.</li>
                    <li><strong>Scent Marking:</strong> Scent glands at tail base and feet; rub on trees, rocks, ground to mark territory and convey identity, reproductive status, and boundaries.</li>
                    <li><strong>Territoriality:</strong> Scent markings help avoid direct confrontations; red pandas are solitary and territorial.</li>
                </ul>
                <h3 style={{ color: '#555', fontSize: '1rem', marginTop: '1.2rem' }}>Communication with Other Species</h3>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li><strong>Warning Calls:</strong> Sharp calls or hissing to scare away predators or unfamiliar animals.</li>
                    <li><strong>Body Language:</strong> Standing on hind legs, arching back, baring teeth to appear larger and more intimidating.</li>
                    <li><strong>Defensive Signals:</strong> Actions serve as defensive signals to avoid conflict and danger, not for cooperative communication.</li>
                </ul>
            </section>
        </div>
    );
};

export default Behavior;