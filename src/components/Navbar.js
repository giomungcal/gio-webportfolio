import React from 'react'

import hamburger from '../imgs/hamburger.png'


const Navbar = () => {
    return (
    <div className="header">
        <h1 className="header__title">gio-portfolio</h1>
        <nav className="header__nav">
        <a href="#"><img className="header__hamburger hide-desktop" src={hamburger} alt="hamburger"/></a>
        <ul className="header__list show-desktop hide-mobile">
            <li className="hide-desktop"><a href="#home">X</a></li>
            <li className="header__link header__link--active"><a href="#">home</a></li>
            <li className="header__link"><a href="#skills">skills</a></li>
            <li className="header__link"><a href="#projects">projects</a></li>
            <li className="header__link"><a href="#about">about</a></li>
        </ul>
        </nav>
    </div>
    )
}

export default Navbar
