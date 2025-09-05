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
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#228B22', fontSize: '1.2rem' }}>🗣️ How Do Red Pandas Talk?</h2>
                <p style={{ fontSize: '1.1rem' }}>Red pandas don’t talk like people, but they have their own special ways of communicating!</p>
                <h3 style={{ color: '#b33c00', fontSize: '1.1rem', marginTop: '1rem' }}>🐾 Sounds and Noises</h3>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem', fontSize: '1.1rem' }}>
                    <li><strong>Squeals</strong> – when they’re excited or scared</li>
                    <li><strong>Twitters</strong> – soft chirpy noises</li>
                    <li><strong>Huff-quacks</strong> – a mix between a puff and a duck sound!</li>
                </ul>
                <p style={{ fontSize: '1.1rem' }}>They use these sounds to say things like “I’m here!” or “Watch out!”—especially when it’s time to find a mate or protect their space.</p>
                <h3 style={{ color: '#b33c00', fontSize: '1.1rem', marginTop: '1rem' }}>🌳 Smelly Messages (Scent Marking)</h3>
                <p style={{ fontSize: '1.1rem' }}>Red pandas also use smells to send messages. They have special scent glands near their tails and feet. They rub these on trees, rocks, and the ground to say:</p>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem', fontSize: '1.1rem' }}>
                    <li>“This is my home!”</li>
                    <li>“I’ve been here!”</li>
                    <li>“Stay away!”</li>
                </ul>
                <p style={{ fontSize: '1.1rem' }}>This helps red pandas avoid fights, since they like to live alone and have their own space.</p>
                <h3 style={{ color: '#b33c00', fontSize: '1.1rem', marginTop: '1rem' }}>😼 What If They Feel Scared?</h3>
                <ul style={{ lineHeight: '1.7', marginLeft: '1.5rem', fontSize: '1.1rem' }}>
                    <li>Hiss or make a loud warning sound</li>
                    <li>Stand on its back legs to look bigger</li>
                    <li>Arch its back or show its teeth</li>
                </ul>
                <p style={{ fontSize: '1.1rem' }}>These moves help red pandas look tough and tell others, “Don’t mess with me!”</p>
                <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Even though red pandas are small and quiet, they’re pretty smart when it comes to keeping safe and talking to other animals!</p>
            </section>
        </div>
    );
};

export default Habitat;
