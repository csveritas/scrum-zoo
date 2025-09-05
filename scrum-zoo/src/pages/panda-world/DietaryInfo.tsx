import React from 'react';

const DietaryInfo: React.FC = () => {
    return (
    <div style={{ padding: '2rem', borderRadius: '8px', maxWidth: '700px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: '#b33c00', marginBottom: '1rem' }}>Red Panda Dietary Information</h1>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Diet Overview</h2>
                <p>Red pandas primarily eat bamboo, but they also consume other plants and occasionally small animals.</p>
            </section>
            <section>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Key Points</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li><strong>Bamboo:</strong> Makes up about 99% of a red panda's diet.</li>
                    <li><strong>Consumption:</strong> Can eat up to 40 pounds of bamboo in a single day.</li>
                    <li><strong>Metabolic Rate:</strong> Very low, which is why they need to eat so much bamboo.</li>
                    <li><strong>Other Foods:</strong> In addition to bamboo, red pandas may eat fruits, vegetables, and meat.</li>
                </ul>
            </section>
        </div>
    );
};

export default DietaryInfo;