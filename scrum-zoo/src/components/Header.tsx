import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a CSS file for header styles
import PandaWorldDropdown from './Dropdown';
import SearchBox from './SearchBox';

const Header: React.FC = () => {
    const navLinks = [
        { label: "Contact", href: "/panda-world/contact" },
        { label: "Habitat", href: "/panda-world/habitat" },
        { label: "Dietary Info", href: "/panda-world/DietaryInfo" },
        { label: "Anatomy/Bio", href: "/panda-world/AnatomyBio" },
        { label: "Behavior", href: "/panda-world/Behavior" },
    ];


    return (
        <header className="header">
            <h1>The Scrum Zoo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link to={link.href}>{link.label}</Link>
                        </li>
                    ))}
                    <li>
                        <SearchBox />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;