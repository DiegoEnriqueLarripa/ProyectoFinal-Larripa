import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
        <div className="container">
            <Link to='/' className="navbar-brand">
                Tech Store
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <NavLink to='/category/notebooks' className="nav-link">Laptops</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/smartphones' className="nav-link">Celulares</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/tablets' className="nav-link">Tablets</NavLink>
                    </li>
                </ul>
                <div className="ms-auto">
                    <CartWidget />
                </div>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;