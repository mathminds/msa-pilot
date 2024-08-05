import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>홍길동 님</h1>
            <p>마이데이터 대시보드</p>
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
