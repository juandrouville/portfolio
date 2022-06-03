import React from "react";
import './Header.css';
import banner from '../../banner.png';
import png from '../../portfolio-bodoni-white.svg';

function Header(){
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0);
    });
    return(
        <header>
            <img src={banner} alt='Banner' className="banner"/>
            <img src={png} alt='Logo' className='logo'/>
            <section className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </section>
        </header>
    )
};


export default Header;