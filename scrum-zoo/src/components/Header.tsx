import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a CSS file for header styles
import PandaWorldDropdown from './Dropdown';
import SearchBox from './SearchBox';

const Header: React.FC = () => {
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
        <header className="header">
            <h1>The Scrum Zoo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <PandaWorldDropdown label="Panda World" links={navLinks} />
                    </li>
                    <li>
                        <SearchBox />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;