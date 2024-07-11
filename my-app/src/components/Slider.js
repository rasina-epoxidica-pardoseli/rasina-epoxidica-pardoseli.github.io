import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useEffect } from 'react';


export default function SimpleSlider() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const imageFiles = require.context('../static/images/home/', false, /\.(png|jpe?g|svg)$/);
        setImages(imageFiles.keys().map(imageFiles));
    }, []);

    const headlines = [
        "Avem peste 10 ani de experiență",
        "Soluții complete pentru pardoseli industriale",
        "Am realizat peste 10 km de marcaje",
        "Avem 15 clienți mulțumiți de soluțiile noastre pentru marcaje",
        "Trafic intens? Calitatea contează",
        "Pardoseli industriale impecabile"
    ];

    const descriptions = [
        "Dispunem de scule și echipamente de ultimă generație, ceea ce ne permite să realizăm lucrări de înaltă calitate, adaptate nevoilor specifice ale fiecărui client. Echipa noastră calificată transformă spațiile industriale în suprafețe durabile, sigure și estetice. ",
        "De la pregătirea meticuloasă a suportului până la finisajul impecabil, fiecare etapă este realizată cu profesionalism și atenție la detalii, garantând rezultate de excepție și o investiție pe termen lung.",
        "Marcajele noastre sunt rezistente la uzură, trafic intens și substanțe chimice, contribuind la siguranța și eficiența operațiunilor din halele industriale.",
        "Echipa noastră calificată execută marcajele cu profesionalism și atenție la detalii, respectând toate normele și standardele în vigoare.",
        "Serviciile noastre includ trasarea locurilor de parcare, a benzilor de circulație, a indicatoarelor și a altor elemente necesare pentru o parcare funcțională și sigură. Utilizăm vopsele speciale, rezistente la trafic intens și intemperii, care garantează vizibilitate optimă în orice condiții. ",
        "Echipa noastră de specialiști vă stă la dispoziție cu consultanță, proiectare și execuție, garantând rezultate de înaltă calitate și o investiție pe termen lung."
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
    };

    return (
        <div className="slide-wrapper relative w-full"> {/* Set max height for mobile and height for desktop */}
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="custom-slide">
                        <div
                            key={index}
                            className="relative md:h-125 h-52 xl:h-150 bg-center bg-cover"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            <div className="absolute hidden md:block top-1/2 left-12 transform -translate-y-1/2 bg-black bg-opacity-50 p-6 rounded-md max-w-xs">
                                <p className="text-white text-4xl pb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-1/2 after:left-1/4 after:bg-gray-300">{headlines[index]}</p>
                                <p className="text-white text-lg pt-6">{descriptions[index]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );

}