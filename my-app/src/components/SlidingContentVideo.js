import React, { useState, useEffect } from 'react';
import videoPath from '../static/video.mp4'


export default function SlidingContentRightVideo({ onNavigation, url, imagePath, title, description, id, visible }) {
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
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
                <div className="relative w-full h-72">
                    <video
                        poster={imagePath}
                        src={videoPath}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute rounded-lg top-0 left-0 w-full h-full object-cover z-10"
                    />
                    {/* Your other content goes here */}
                    <div className="relative z-20 p-4">
                        {/* Content */}
                    </div>
                </div>
            </div>
        </section>
    );
}


