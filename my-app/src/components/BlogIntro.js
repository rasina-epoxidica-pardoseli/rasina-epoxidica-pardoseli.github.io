import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


export default function FadingSection({ title, description, buttonText }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.6 } // Adjust the threshold for visibility (0.2 means 20% in view)
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={` max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg p-8 my-8 transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <p className="text-gray-600 mb-4 relative pb-8 after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[3px] after:w-20 after:-translate-x-1/2  after:left-1/2 after:bg-primary-500">{description}</p>
            <h2 className="text-3xl font-bold mb-2 pt-8 pb-4">
                {title}
            </h2>
            <Link to={"blog"} role={"button"} className="bg-primary-100 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded">
                {buttonText}
            </Link>
        </section>
    );
}