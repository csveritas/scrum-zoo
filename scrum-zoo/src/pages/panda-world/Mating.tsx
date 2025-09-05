import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Mating = () => {
    return (
        <div className='panda-background' style={{padding: '2rem', borderRadius: '8px', maxWidth: '700px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: '#b33c00', marginBottom: '1rem' }}>Red Panda Mating & Reproduction</h1>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Gestational Period</h2>
                <p>The gestation period of a red panda ranges from about <strong>112 to 158 days</strong>. Red pandas exhibit <strong>delayed implantation</strong>, meaning fertilized eggs can pause development before implanting in the uterus, making their reproductive cycle variable.</p>
            </section>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Number of Offspring</h2>
                <p>A female red panda typically gives birth to <strong>1 to 4 cubs</strong>, with <strong>2 cubs</strong> being the most common.</p>
            </section>
            <section>
                <h2 style={{ color: '#333', fontSize: '1.2rem' }}>Duration with the Parent</h2>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem' }}>
                    <li>Cubs are born blind and helpless, covered in a thin layer of fur.</li>
                    <li>They remain in the nest for about <strong>90 days</strong>, with the mother frequently moving them between nest sites for protection.</li>
                    <li>Cubs are weaned at around <strong>5 to 6 months</strong> and stay with the mother for up to <strong>8 to 10 months</strong>, sometimes until the next breeding season.</li>
                </ul>
            </section>
        </div>
    );
};

export default Mating;