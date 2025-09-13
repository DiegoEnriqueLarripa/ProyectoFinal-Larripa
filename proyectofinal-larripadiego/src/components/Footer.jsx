import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center p-4 mt-auto">
            <div className="container">
                <p>&copy; {currentYear} Tech Store. Todos los derechos reservados.</p>
                <p>Proyecto Final del Curso de React</p>
            </div>
        </footer>
    );
};

export default Footer;