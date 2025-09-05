import React from 'react';

const MiscFacts: React.FC = () => {
    return (

        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '700px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: '#b33c00', marginBottom: '1rem' }}>Miscellaneous Facts about Pandas</h1>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Communication</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>

                    <li>Pandas are native to China and are known for their distinct black and white coloring.</li>
                <li>They primarily eat bamboo, consuming up to 40 pounds a day.</li>
                <li>Pandas are excellent climbers and can climb trees to escape predators.</li>
                <li>They have a special bone in their wrist that acts like a thumb, helping them grasp bamboo.</li>
                <li>Pandas are solitary animals and have a very low reproductive rate.</li>
                </ul>
            </section>
        </div>
    );
};

export default MiscFacts;