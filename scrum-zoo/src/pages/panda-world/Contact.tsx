import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact: React.FC = () => {
    return (

        <div className="container">
            <div className="contact-form">
                <h2 className="text-center mb-4" style= {{color:"#c00" }}>Contact Us</h2>
                <p>If you have any questions or inquiries about pandas, feel free to reach out!</p>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email"/ >
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Subject" / >
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Message</label>
                        <textarea className="form-control" id="message"  placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-custom w-100">Send Message</button>
                </form>
            </div>
        </div>
    )};

export default Contact;