import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a CSS file for header styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>The Scrum Zoo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/PandaHome">Panda World</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/About">About</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/Mating">Mating</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/DietaryInfo">Dietary Info</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/ImageGallery">Image Gallery</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/anatomy-bio">Anatomy/Bio</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/Behavior">Behavior</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/MiscFacts">Misc Facts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;