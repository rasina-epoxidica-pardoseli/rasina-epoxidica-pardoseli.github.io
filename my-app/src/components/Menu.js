import logo_text from '../static/images/logo_with_text_purple.png';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function Menu({ onNavigation }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="main-header relative flex justify-between items-center py-4 md:py-6 px-8 md:px-0 max-w-screen-lg mx-auto">
            <a href="#acasa" onClick={() => onNavigation('acasa')} className="cursor-pointer logo w-48 max-w-full max-w-xs">
                <img src={logo_text} alt="Pardoseli epoxidice" />
            </a>
            <nav className="menu relative">
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="mobile-menu-button p-2 rounded-md focus:outline-none focus:ring">
                        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex space-x-4 text-lg cursor-pointer"> {/* Desktop menu */}
                    <a className="hover:underline" href="#acasa" onClick={() => onNavigation('acasa')}>Acasă</a>
                    <a className="hover:underline" href="#despre" onClick={() => onNavigation('despre')}>Despre noi</a>
                    <a className="hover:underline group relative inline-block"> {/* Dropdown container */}
                        Servicii
                        <FontAwesomeIcon icon={faAngleDown} className="ml-2 group-hover:rotate-180 transition-transform" />
                        <div className="hidden group-hover:block absolute top-full left-0 z-10 pt-4 space-y-3 bg-white shadow-lg rounded-md min-h-48 w-48 text-left pl-4">
                            <a href="#hale-industriale" onClick={() => onNavigation('hale-industriale')} className="hover:underline block">Hale industriale</a>
                            <a href="#parcari-garaje" onClick={() => onNavigation('parcari-garaje')}  className="hover:underline block">Parcări și garaje</a>
                            <a href="#terase-exterioare" onClick={() => onNavigation('terase-exterioare')} className="hover:underline block">Terase exterioare</a>
                            <a href="#marcaje" onClick={() => onNavigation('marcaje')} className="hover:underline block">Marcaje</a>
                        </div>
                    </a>
                    <a className="hover:underline" href="#clienti" onClick={() => onNavigation('clienti')}>Clienți</a>
                    <a className="hover:underline" href="#blog" onClick={() => onNavigation('blog')}>Blog</a>
                    <a className="hover:underline" href="#contact" onClick={() => onNavigation('contact')}>Contact</a>
                </div>

            </nav>
            <div className={`mobile-menu md:hidden text-lg space-y-3 pl-4 pt-4 text-left absolute z-10 top-20 right-0 w-52 min-h-100 bg-white shadow-lg transition-transform transform duration-1000 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <a className="block" href="#acasa" onClick={() => { onNavigation('acasa'); toggleMobileMenu(); }}>Acasă</a>
                <a className="block" href="#despre" onClick={() => { onNavigation('despre'); toggleMobileMenu(); }}>Despre noi</a>
                <a className="block mb-2 "> {/* Mobile dropdown */}
                    Servicii
                    <div className="pl-6 text-lg pt-4 space-y-3">
                        <a className="block" href="#hale-industriale" onClick={() => { onNavigation('hale-industriale'); toggleMobileMenu(); }}>Hale industriale</a>
                        <a className="block" href="#parcari-garaje" onClick={() => { onNavigation('parcari-garaje'); toggleMobileMenu(); }}>Parcări și garaje</a>
                        <a className="block" href="#terase-exterioare" onClick={() => { onNavigation('terase-exterioare'); toggleMobileMenu(); }}>Terase exterioare</a>
                        <a className="block" href="#marcaje" onClick={() => { onNavigation('marcaje'); toggleMobileMenu(); }}>Marcaje</a>
                    </div>
                </a>
                <a className="block" href="#clienti" onClick={() => { onNavigation('clienti'); toggleMobileMenu(); }}>Clienți</a>
                <a className="block" href="#blog" onClick={() => { onNavigation('blog'); toggleMobileMenu(); }}>Blog</a>
                <a className="block" href="#contact" onClick={() => { onNavigation('contact'); toggleMobileMenu(); }}>Contact</a>
            </div>

        </div>
    )
}