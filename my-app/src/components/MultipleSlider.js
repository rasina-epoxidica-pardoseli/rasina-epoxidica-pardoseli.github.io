import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useEffect } from 'react';


export default function MultipleSlider({imageType}) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        if (imageType === "hale-industriale") {
            const imageFiles = require.context('../static/images/hale_industriale/', false, /\.(png|jpe?g|svg)$/);
            setImages(imageFiles.keys().map(imageFiles));
        } else if (imageType === "marcaje") {
            const imageFiles = require.context('../static/images/marcaje/', false, /\.(png|jpe?g|svg)$/);
            setImages(imageFiles.keys().map(imageFiles));
        } else if (imageType === "parcari-garaje") {
            const imageFiles = require.context('../static/images/parcari_garaje/', false, /\.(png|jpe?g|svg)$/);
            setImages(imageFiles.keys().map(imageFiles));
        } else {
            const imageFiles = require.context('../static/images/terase_exterioare/', false, /\.(png|jpe?g|svg)$/);
            setImages(imageFiles.keys().map(imageFiles));
        }

    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint for your desired screen width
                settings: {
                    slidesToShow: 1, // Show only 1 slide on mobile
                    slidesToScroll: 1, // Scroll 1 slide at a time on mobile
                },
            },
        ],
    };
    return (
        <div className="slide-wrapper relative w-full"> {/* Set max height for mobile and height for desktop */}
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="custom-slide" key={index}>
                        <div
                            key={index}
                            className="relative h-40 md:h-40 xl:h-60 md:mx-1 bg-center bg-cover"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
