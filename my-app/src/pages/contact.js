import React, { useState } from 'react';
import hala from "../static/images/home/1.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";


export default function ContactPage() {
    return (
        <section className="py-10 px-5">
            <div className="container  max-w-screen-lg mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    Contact
                </h1>
                <p className="text-left md:text-xl leading-relaxed mb-4">
                    Modalitatea preferata de contact este prin telefon la 0769 972 702.
                </p>
                <p className="text-left md:text-xl leading-relaxed mb-4">
                    Ne puteți contacta rapid și simplu prin WhatsApp, apăsând pe pictograma de mai jos.
                </p>
                <p className="text-left text-6xl leading-relaxed mb-4">
                    <a className="" href="https://wa.me/+40769972702" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </p>
                <p className="text-left md:text-xl leading-relaxed mb-4">
                    Așteptăm mesajul dumneavoastră!
                </p>
            </div>
        </section>

    )
}