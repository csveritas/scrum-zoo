import React from 'react';
import Footer from '../../components/Footer';
import { pandaImage } from "../../assets/assets";
import { Link } from 'react-router-dom';

const PandaHome: React.FC = () => {

    const navLinks = [
        { label: "About", href: "/panda-world/About" },
        { label: "Contact", href: "/panda-world/Contact" },
        { label: "Mating", href: "/panda-world/Mating" },
        { label: "Dietary Info", href: "/panda-world/DietaryInfo" },
        { label: "Image Gallery", href: "/panda-world/ImageGallery" },
        { label: "Anatomy/Bio", href: "/panda-world/AnatomyBio" },
        { label: "Behavior", href: "/panda-world/Behavior" },
        { label: "Misc Facts", href: "/panda-world/MiscFacts" },
    ];

    return (
        <div>
            <main className='panda-background'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12" style={{ marginBottom: '2rem' }}>
                            <h1 style={{ color: '#b33c00', fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>Welcome to Panda World at the Milwaukee Zoo!</h1>
                            <img src={pandaImage} alt="Panda" style={{ width: '300px', height: 'auto', paddingBottom: '20px' }} />
                            <p style={{ fontSize: '1.2rem' }}>
                                Hi kids! Did you know the <strong>Milwaukee Zoo</strong> is home to some of the cutest animals in the world—including the amazing <strong>Red Panda</strong>? Come visit our special Red Panda exhibit and see these furry, tree-climbing friends up close!
                            </p>
                            <p style={{ fontSize: '1.1rem' }}>
                                Red pandas are small, playful mammals with soft, reddish fur and big bushy tails. They love to climb trees and munch on bamboo. Even though they look like little bears, red pandas are in their own special animal family!
                            </p>
                            <p style={{ fontSize: '1.1rem' }}>
                                At the Milwaukee Zoo, you can watch red pandas explore their habitat, play with each other, and take cozy naps in the trees. Don’t forget to check out our daily red panda talks and fun activities just for kids ages 5 to 10!
                            </p>
                            <p style={{ fontSize: '1.1rem' }}>
                                <strong>Fun Fact:</strong> Red pandas use their fluffy tails as blankets to keep warm while they sleep. How cool is that?
                            </p>
                            <p style={{ fontSize: '1.1rem' }}>
                                Pandas are large, bear-like mammals that are native to China. They are known for their distinctive black and white coloring and are a symbol of conservation efforts worldwide. Pandas primarily eat bamboo, but they are technically classified as carnivores. They have a unique digestive system that allows them to process large amounts of bamboo daily.
                            </p>
                        </div>
                        <div className="container col-6 col-sm-4" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50vh"
                        }}>
                            <ul>
                                <div>
                                    {navLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                to={link.href}
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PandaHome;