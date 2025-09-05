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
                    <h1 style={{ paddingTop: "20px", paddingBottom: "20px" }}>The Scrum Zoo - Panda World</h1>
                    <p>Welcome to Panda World! Explore the fascinating life of pandas.</p>
                    <div className="row">
                        <div className="col-6 col-sm-6">
                            <img src={pandaImage} alt="Panda" style={{ width: '300px', height: 'auto', paddingBottom: '20px' }} />
                            
                        </div>
                        <div className="container col-6 col-sm-4" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50vh"
                        }}>

                            <div className="container text-center">
                                {navLinks.map((link, index) => (
                                    <div className="row" style={{padding: "15px"}}>
                                        <div className="col">
                                            <Link
                                                key={index}
                                                to={link.href}
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                {link.label}
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            
                        </div>
                    </div>
                    </div>
            </main>
        </div>
    );
};

export default PandaHome;