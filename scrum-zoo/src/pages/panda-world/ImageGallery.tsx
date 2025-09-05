import React from 'react';

const ImageGallery: React.FC = () => {
    return (
    <div>
            <h1>Panda Image Gallery</h1>
            <p>Welcome to the Panda Image Gallery! Here you will find a collection of adorable panda images.</p>
            {/* Placeholder for image gallery */}
            <div className="gallery">
                <img src="/assets/panda.png" alt="Panda" />
                {/* Additional images can be added here */}
            </div>
        </div>
    );
};

export default ImageGallery;