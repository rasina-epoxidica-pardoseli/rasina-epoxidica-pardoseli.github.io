import React, { useState, useEffect, useRef } from 'react';
import leroy from '../static/images/clienti/leroymerlin.png'
import fantana from '../static/images/clienti/la_fantana.png'
import metatools from '../static/images/clienti/metatools.png'
import total from '../static/images/clienti/totaltoolslogo.png'

export default function ClientiPage() {
    return (
        <section className="py-10 px-5">
            <div className="container  max-w-screen-lg mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    Clienti
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100">
                    {/* Logo Section (Left) */}
                    <div className="w-full md:w-1/3 p-8 md:p-8">
                        <img
                            src={leroy}
                            alt="Leroy Merlin"
                            className="w-full"
                        />
                    </div>

                    {/* Description Section (Right) */}
                    <div className="w-full md:w-2/3 p-8 md:p-8 text-center md:text-left">
                        <p className="text-lg md:text-xl leading-relaxed">
                            Leroy Merlin este unul din cele mai mari lanțuri de magazine cu produse de bricolaj, materiale de construcție și grădină prezente pe piața românească.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed pt-10">
                            Pentru Leroy Merlin am implementat soluții complete de pardoseli epoxidice. Acest proiect a implicat nu doar aplicarea pardoselilor, ci și consultanță specializată în alegerea celor mai potrivite materiale și finisaje, adaptate specificului spațiilor Leroy Merlin. Rezultatul final a fost un spațiu comercial modern, funcțional și estetic, care reflectă standardele înalte de calitate ale brandului Leroy Merlin.
                        </p>
                        <a
                            href="https://www.leroymerlin.ro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-100 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded inline-block mt-10"
                            role={"button"}
                        >
                            Vizitați site-ul Leroy Merlin
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 mt-20">
                    {/* Logo Section (Left) */}
                    <div className="w-full md:w-1/3 p-8 md:p-8">
                        <img
                            src={fantana}
                            alt="La Fantana"
                            className="w-full"
                        />
                    </div>

                    {/* Description Section (Right) */}
                    <div className="w-full md:w-2/3 p-8 md:p-8 text-center md:text-left">
                        <p className="text-lg md:text-xl leading-relaxed">
                            La Fântâna este o cea mai mare companie furnizoare de servicii pentru aprovizionarea cu apă în sistem watercooler pe piața din România.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed pt-10">
                            Am realizat peste 1000mp de pardoseli pentru depozitele La Fântână. Aceste pardoseli sunt special concepute pentru a face față traficului intens și cerințelor specifice ale unui mediu de depozitare, asigurând astfel o funcționare eficientă și sigură.
                        </p>
                        <a
                            href="https://lafantana.ro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-100 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded inline-block mt-10"
                            role={"button"}
                        >
                            Vizitați site-ul La Fântâna
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 mt-20">
                    {/* Logo Section (Left) */}
                    <div className="w-full md:w-1/3 p-8 md:p-8">
                        <img
                            src={metatools}
                            alt="Meta Tools"
                            className="w-full"
                        />
                    </div>

                    {/* Description Section (Right) */}
                    <div className="w-full md:w-2/3 p-8 md:p-8 text-center md:text-left">
                        <p className="text-lg md:text-xl leading-relaxed">
                            Meta Tools este o afacere românească de succes și, totodată, unul dintre cei mai importanți furnizori de echipamente și utilaje tehnologice, pentru domeniul industrial și al construcțiilor din județul Prahova.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed pt-10">
                            În acest proiect am dezvoltat soluții personalizate de pardoseli epoxidice, ținând cont de specificul activității lor. Am pus accent pe rezistența la uzură și trafic intens, protecția împotriva substanțelor chimice și a șocurilor mecanice, precum și pe proprietățile antistatice, esențiale într-un mediu cu echipamente sensibile. Rezultatul a fost o pardoseală care nu doar îndeplinește cerințele funcționale, ci și contribuie la imaginea modernă și profesională a spațiului Metatools.
                        </p>
                        <a
                            href="https://www.metatools.ro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-100 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded inline-block mt-10"
                            role={"button"}
                        >
                            Vizitați site-ul Meta Tools
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 mt-20">
                    {/* Logo Section (Left) */}
                    <div className="w-full md:w-1/3 p-8 md:p-8">
                        <img
                            src={total}
                            alt="Total Tools"
                            className="w-full"
                        />
                    </div>

                    {/* Description Section (Right) */}
                    <div className="w-full md:w-2/3 p-8 md:p-8 text-center md:text-left">
                        <p className="text-lg md:text-xl leading-relaxed">
                            Total Tools este un brand românesc în plină ascensiune care vinde scule și utilaje de mică mecanizare și mare mecanizare.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed pt-10">
                            Pentru Total Tools am creat o pardoseală epoxidică rezistentă și ușor de întreținut, perfect adaptată mediului solicitant al unui magazin de scule și utilaje. În plus, am implementat un sistem de marcaje și delimitări pentru a optimiza fluxul de lucru și a facilita organizarea spațiului.
                        </p>
                        <a
                            href="https://totaltools.ro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-100 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded inline-block mt-10"
                            role={"button"}
                        >
                            Vizitați site-ul Total Tools
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}