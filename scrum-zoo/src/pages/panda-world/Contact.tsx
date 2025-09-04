import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contact: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Contact Us</h1>
            <p>If you have any questions or inquiries about pandas, feel free to reach out!</p>
            <p>Email: info@scrumzoo.com</p>
            <p>Phone: (123) 456-7890</p>
            <Footer />
        </div>
    );
};

export default Contact;