import React, { useState } from 'react';
import hala from "../static/images/home/1.jpeg"


export default function AboutPage() {
    return (
        <section className="py-10  max-w-screen-lg mx-auto px-5">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    Despre noi
                </h1>
                <img
                    src={hala}
                    alt="Pardoseală epoxidică"
                    className="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-lg mb-8"
                />
                <p className="text-left md:text-xl leading-relaxed mb-4">
                    Cu o pasiune pentru inovație și o dedicare față de calitate, suntem pionieri în domeniul pardoselilor din rășină epoxidică.
                    Muncim mult și ne place să aducem la realitate visele clienților.
                </p>
                <p className="text-left md:text-xl  leading-relaxed mb-4">
                    Suntem o echipă mică, dar ambițioasă, cu rădăcini în satul Runcu din Dâmbovița.
                    Munca noastră ne-a purtat în întreaga țară, de la proiecte rezidențiale si hale în București, până la spații comerciale
                    în Brașov și Suceava.
                    Fiecare proiect, indiferent de dimensiune sau complexitate, este abordat cu aceeași pasiune și atenție la detalii.
                </p>
                <p className=" text-left md:text-xl  leading-relaxed">
                    Contactează-ne pentru o consultație gratuită și descoperă cum îți putem transforma viziunea în realitate.
                </p>
            </div>
        </section>
    )
}