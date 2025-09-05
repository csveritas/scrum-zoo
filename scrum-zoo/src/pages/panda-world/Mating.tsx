import React from 'react';
const Habitat = () => {
    return (
        <div className='panda-background' style={{padding: '2rem', borderRadius: '8px', maxWidth: '700px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: '#b33c00', marginBottom: '1rem', fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>Where Do Red Pandas Live?</h1>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#228B22', fontSize: '1.2rem' }}>A Forest Wonderland</h2>
                <p style={{ fontSize: '1.1rem' }}>Red pandas are amazing tree climbers! They live high up in the cool, misty forests of the <strong>Himalayas</strong> and <strong>southwestern China</strong>. Their favorite places are full of tall trees, thick bamboo, and lots of places to hide and play.</p>
            </section>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#228B22', fontSize: '1.2rem' }}>Home Sweet Home</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem', fontSize: '1.1rem' }}>
                    <li><strong>Bamboo Forests:</strong> Red pandas love bamboo! They munch on bamboo leaves and shoots all day long.</li>
                    <li><strong>Tree Nests:</strong> They make cozy nests in tree hollows or branches, lining them with soft leaves and moss.</li>
                    <li><strong>High Up:</strong> Living in the trees keeps them safe from bigger animals and gives them a great view!</li>
                    <li><strong>Cool Weather:</strong> Red pandas like it cool and shady, so they live in forests that are high up in the mountains.</li>
                </ul>
            </section>
            <section>
                <h2 style={{ color: '#228B22', fontSize: '1.2rem' }}>Fun Fact!</h2>
                <p style={{ fontSize: '1.1rem' }}>Red pandas use their big, bushy tails as blankets to keep warm while they nap in the trees. How cozy is that?</p>
            </section>
        </div>
    );
};

export default Habitat;