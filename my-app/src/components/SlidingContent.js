import React, { useState, useEffect } from 'react';


function SlidingContentRight({ onNavigation, url, imagePath, title, description, id, visible }) {
    const [isVisible, setIsVisible] = useState(visible || false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(id); // Get the element by ID
            if (!element) return;
            const rect = element.getBoundingClientRect();
            setIsVisible(rect.top < window.innerHeight); // Check if element is in viewport
        };

        window.addEventListener('scroll', handleScroll, true);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id={id} // Add ID for scrolling reference
            className={`mt-5 md:mt-10 flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform duration-500 py-12 ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="md:w-1/2 text-left md:pr-8 mb-4 md:mb-0">
                <h2 className="text-3xl pb-6 font-bold mb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[3px] after:w-16 after:bg-primary-500">{title}</h2>
                <p className="text-gray-600 pt-6 pb-6 mb-4">{description}</p>
                <a href={"#"+url} role={"button"} onClick={() => onNavigation(url)} className="bg-primary-100 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded">
                    Vezi detalii
                </a>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
                <img
                    src={imagePath}
                    alt="Descriptive alt text"
                    className="rounded-lg object-cover h-auto w-full"
                />
            </div>
        </section>
    );
}

function SlidingContentLeft({ onNavigation, url, imagePath, title, description, id, visible }) {
    const [isVisible, setIsVisible] = useState(visible || false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(id);
            if (!element) return;
            const rect = element.getBoundingClientRect();

            setIsVisible(rect.top < window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll, true);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id={id} // Unique ID for this component
            className={`mt-5 md:mt-10 flex flex-col-reverse md:flex-row items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform duration-500 py-12 ${
                isVisible ? 'translate-x-0' : '-translate-x-full' // Slide in from left
            }`}
        >
            <div className="md:w-1/2  mt-10 md:mt-0">
                <img
                    src={imagePath}
                    alt="Descriptive alt text"
                    className="rounded-lg object-cover h-auto w-full"
                />
            </div>
            <div className="md:w-1/2 text-left md:pl-8 mb-4 md:mb-0">
                <h2 className="text-3xl pb-6 font-bold mb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[3px] after:w-16 after:bg-primary-100">{title}</h2>
                <p className="text-gray-600 mb-4 pt-6 pb-6 ">{description}</p>
                <a href={"#"+url} role={"button"} onClick={() => onNavigation(url)} className="bg-primary-100 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded">
                    Vezi detalii
                </a>
            </div>
        </section>
    );
}

export {SlidingContentRight, SlidingContentLeft}
