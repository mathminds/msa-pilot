import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <a href="#pricing">Pricing</a>
                <a href="#solutions">Solutions</a>
                <a href="#community">Community</a>
                <a href="#resources">Resources</a>
                <a href="#contact">Contact</a>
                <button>Sign in</button>
                <button>Register</button>
            </nav>
        </header>
    );
};

export default Header;
