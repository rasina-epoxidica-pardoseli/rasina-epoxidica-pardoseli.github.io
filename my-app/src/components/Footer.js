import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'
import logo_text from '../static/images/logo_with_text.png';


export default function Footer({onNavigation}) {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4 mt-5 md:mt-10">
            <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">

                {/* Logo */}
                <a href="#acasa" onClick={() => onNavigation('acasa')} className="cursor-pointer logo w-40 mb-10 md:mb-0">
                    <img src={logo_text} alt="Pardoseli epoxidice" />
                </a>

                {/* Phone Number */}
                <div className="flex items-center mb-10 md:mb-0">
                    <a className="mr-4" href="tel:+40769972702" target="_blank">
                        0769.972.702
                    </a>
                    <a className="" href="https://wa.me/+40769972702" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a className="" href="https://www.facebook.com/share/zEVFrZkBEJmM6WAH/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    {/*<a className="mr-4" href="https://www.facebook.com/share/zEVFrZkBEJmM6WAH/" target="_blank">*/}
                    {/*    <FontAwesomeIcon icon={faTiktok} />*/}
                    {/*</a>*/}
                </div>
            </div>
        </footer>
    );
};