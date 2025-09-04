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
                        <Link to="/panda-world">Panda World</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/about">About</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/mating">Mating</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/dietary-info">Dietary Info</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/image-gallery">Image Gallery</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/anatomy-bio">Anatomy/Bio</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/behavior">Behavior</Link>
                    </li>
                    <li>
                        <Link to="/panda-world/misc-facts">Misc Facts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;