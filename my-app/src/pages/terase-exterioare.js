import React, { useState } from 'react';
import MultipleSlider from "../components/MultipleSlider";


export default function TeraseExterioarePage() {
    return (
        <section className="py-10 px-5">
            <div className="container  max-w-screen-lg mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    Terase exterioare
                </h1>
                <div className="py-8">
                    <MultipleSlider imageType='terase-exterioare'/>
                </div>
                <p className="text-left md:text-xl leading-relaxed mb-4 pt-10">
                    Terasele exterioare sunt cartea de vizită a oricărei locații, iar noi înțelegem perfect acest lucru. De aceea, abordăm fiecare proiect cu atenție și pasiune, folosind rășina epoxidică pentru a crea suprafețe rezistente la intemperii, ușor de întreținut și cu un aspect deosebit. Indiferent dacă este vorba de o terasă rezidențială intimă sau de un spațiu comercial extins, suntem dedicați transformării viziunii dumneavoastră în realitate.
                </p>
                <div className="text-left prose mt-12">
                    <h3 className="text-2xl font-semibold mb-4">La ce ne gândim când realizăm terase exterioare?</h3>
                    <ul className="list-disc list-inside ml-4 leading-relaxed space-y-4">
                        <li>
                            <span className="font-bold">Rezistența la intemperii:</span> Terasele sunt expuse la soare, ploaie, îngheț și dezgheț. Alegem rășini epoxidice și finisaje speciale care rezistă la radiații UV, apă și variații de temperatură, astfel încât terasa dumneavoastră să arate impecabil ani la rând.
                        </li>
                        <li>
                            <span className="font-bold">Durabilitate și trafic intens:</span> Indiferent dacă terasa este destinată uzului rezidențial sau comercial, ne asigurăm că pardoseala poate face față traficului intens și uzurii zilnice, fără să-și piardă din aspect sau funcționalitate.
                        </li>
                        <li>
                            <span className="font-bold">Siguranță și aderență:</span> Alegem finisaje antiderapante pentru a preveni accidentele cauzate de suprafețe alunecoase, mai ales în condiții de umezeală.
                        </li>
                        <li>
                            <span className="font-bold">Estetică și design personalizat:</span> Terasa este o extensie a spațiului interior și trebuie să se integreze armonios. Oferim o gamă largă de culori, texturi și modele pentru a crea o terasă care să reflecte stilul și personalitatea dumneavoastră.
                        </li>
                        <li>
                            <span className="font-bold">Ușurință în întreținere:</span> Știm că timpul dumneavoastră este prețios. De aceea, alegem materiale care se curăță ușor și nu necesită întreținere specială, astfel încât să vă puteți bucura de terasa dumneavoastră fără griji.
                        </li>
                        <li>
                            <span className="font-bold">Funcționalitate și confort:</span> Luăm în considerare modul în care veți utiliza terasa. Vă putem ajuta să alegeți finisaje care să ofere o temperatură confortabilă la atingere, chiar și în zilele însorite, sau să integrăm sisteme de drenaj pentru a preveni acumularea apei.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}