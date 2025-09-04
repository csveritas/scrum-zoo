import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f8f8' }}>
            <p>&copy; {new Date().getFullYear()} The Scrum Zoo. All rights reserved.</p>
        </footer>
    );
};

export default Footer;