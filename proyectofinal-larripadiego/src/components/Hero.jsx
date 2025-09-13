import React from 'react';

const Hero = ({ title, subtitle }) => {
    return (
        <div className="bg-light text-dark text-center py-5 mb-4">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{subtitle}</p>
            </div>
        </div>
    );
};

export default Hero;