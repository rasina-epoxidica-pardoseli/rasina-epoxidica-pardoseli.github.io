import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import hala from "../static/images/blog/hala-industriala.jpeg"
import marcaje from "../static/images/blog/marcaje.jpeg"
import parcari from "../static/images/blog/parcari.jpeg"


export default function ThreeItemSection( ) {
    const items = [
        {
            title: 'Pardoseli industriale',
            description: 'De ce sa alegi rasina epoxidica pentru pardoseli industriale?',
            imageUrl: hala,
            url: "/rasina-epoxidica-pentru-pardoseli-industriale"
        },
        {
            title: 'Marcaje',
            description: 'Ghid complet pentru trasarea marcajelor cu rășină epoxidică',
            imageUrl: marcaje,
            url: "/trasarea-marcajelor-cu-rasina-epoxidica"
        },
        {
            title: 'Garaje',
            description: 'Recomandări pentru o pardoseală de garaj rezistentă',
            imageUrl: parcari,
            url: "/pardoseala-garaj-rezistenta"
        },
    ];

    const itemRefs = useRef([]); // Array to hold references to item elements

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100'); // Fade in
                        entry.target.classList.remove('opacity-0');
                    } else {
                        entry.target.classList.remove('opacity-100'); // Fade out (optional)
                        entry.target.classList.add('opacity-0');
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)} // Assign ref
                        className="bg-white rounded-lg overflow-hidden shadow-md opacity-0 transition-opacity duration-1000" // Initial opacity and transition
                    >
                        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 py-2">{item.title}</h3>
                            <p className="text-gray-600 pt-4 pb-8">{item.description}</p>
                            <Link
                                to={item.url}
                                role="button" className="mt-4 bg-primary-100 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded">
                                Citește mai mult
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
