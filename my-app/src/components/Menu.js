import logo_text from '../static/images/logo_with_text_purple.png';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Menu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="main-header relative flex justify-between items-center py-4 md:py-6 px-8 md:px-0 max-w-screen-lg mx-auto">
            <Link to="/" className="cursor-pointer logo w-48 max-w-full max-w-xs">
                <img src={logo_text} alt="Pardoseli epoxidice" />
            </Link>
            <nav className="menu relative">
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="mobile-menu-button p-2 rounded-md focus:outline-none focus:ring">
                        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex space-x-4 text-lg cursor-pointer"> {/* Desktop menu */}
                    <Link className="hover:underline" to="/">Acasă</Link>
                    <Link className="hover:underline" to="despre">Despre noi</Link>
                    <Link className="hover:underline group relative inline-block"> {/* Dropdown container */}
                        Servicii
                        <FontAwesomeIcon icon={faAngleDown} className="ml-2 group-hover:rotate-180 transition-transform" />
                        <div className="hidden group-hover:block absolute top-full left-0 z-10 pt-4 space-y-3 bg-white shadow-lg rounded-md min-h-48 w-48 text-left pl-4">
                            <Link to="hale-industriale" className="hover:underline block">Hale industriale</Link>
                            <Link to="parcari-garaje" className="hover:underline block">Parcări și garaje</Link>
                            <Link to="terase-exterioare" className="hover:underline block">Terase exterioare</Link>
                            <Link to="marcaje" className="hover:underline block">Marcaje</Link>
                        </div>
                    </Link>
                    <Link className="hover:underline" to="clienti">Clienți</Link>
                    <Link className="hover:underline" to="blog">Blog</Link>
                    <Link className="hover:underline" to="contact">Contact</Link>
                </div>

            </nav>
            <div className={`mobile-menu md:hidden text-lg space-y-3 pl-4 pt-4 text-left absolute z-10 top-20 right-0 w-52 min-h-100 bg-white shadow-lg transition-transform transform duration-1000 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <Link className="block" to="/" onClick={() => { toggleMobileMenu(); }}>Acasă</Link>
                <Link className="block" to="despre" onClick={() => { toggleMobileMenu(); }}>Despre noi</Link>
                <Link className="block mb-2 "> {/* Mobile dropdown */}
                    Servicii
                    <div className="pl-6 text-lg pt-4 space-y-3">
                        <Link className="block" to="hale-industriale" onClick={() => { toggleMobileMenu(); }}>Hale industriale</Link>
                        <Link className="block" to="parcari-garaje" onClick={() => { toggleMobileMenu(); }}>Parcări și garaje</Link>
                        <Link className="block" to="terase-exterioare" onClick={() => {  toggleMobileMenu(); }}>Terase exterioare</Link>
                        <Link className="block" to="marcaje" onClick={() => { toggleMobileMenu(); }}>Marcaje</Link>
                    </div>
                </Link>
                <Link className="block" to="clienti" onClick={() => { toggleMobileMenu(); }}>Clienți</Link>
                <Link className="block" to="blog" onClick={() => {  toggleMobileMenu(); }}>Blog</Link>
                <Link className="block" to="contact" onClick={() => { toggleMobileMenu(); }}>Contact</Link>
            </div>

        </div>
    )
}