import React, { useState } from 'react';
import hala from "../static/images/home/1.jpeg"
import MultipleSlider from "../components/MultipleSlider";


export default function ParcariGarajePage() {
    return (
        <section className="py-10 px-5">
            <div className="container  max-w-screen-lg mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    Parcări și Garaje
                </h1>
                <div className="py-8">
                    <MultipleSlider imageType='parcari-garaje'/>
                </div>
                <p className="text-left md:text-xl leading-relaxed mb-4 pt-10">
                    Când vine vorba de pardoseli pentru parcări și garaje, știm că durabilitatea și funcționalitatea sunt esențiale. De aceea, utilizăm rășini epoxidice special concepute pentru a rezista la trafic intens, scurgeri de ulei și substanțe chimice, oferind în același timp un aspect estetic și ușor de întreținut. Experiența noastră vastă în acest domeniu ne permite să creăm soluții personalizate, adaptate specificului fiecărui proiect, fie că este vorba de o parcare subterană, un garaj rezidențial sau o parcare comercială.
                </p>
                <div className="text-left prose mt-12">
                    <h3 className="text-2xl font-semibold mb-4">La ce ne gândim când realizăm parcări și garaje?</h3>
                    <ul className="list-disc list-inside ml-4 leading-relaxed space-y-4">
                        <li>
                            <span className="font-bold">Rezistența la trafic intens:</span> Știm că parcările și garajele sunt supuse unui trafic intens, de la mașini mici până la camioane grele. De aceea, alegem rășini epoxidice special formulate pentru a rezista la abraziune, impact și greutate, asigurând o pardoseală durabilă și fără fisuri.
                        </li>
                        <li>
                            <span className="font-bold">Rezistența la substanțe chimice:</span> Scurgerile de ulei, benzină sau alte lichide auto sunt inevitabile într-o parcare sau garaj. Pardoselile noastre epoxidice sunt rezistente la aceste substanțe, prevenind deteriorarea și pătarea pe termen lung.
                        </li>
                        <li>
                            <span className="font-bold">Siguranța și vizibilitate:</span> Ne asigurăm că pardoselile sunt antiderapante pentru a preveni accidentele, mai ales în condiții de umezeală. De asemenea, putem integra marcaje clare și elemente reflectorizante pentru a ghida traficul și a spori vizibilitatea.
                        </li>
                        <li>
                            <span className="font-bold">Ușurință în întreținere:</span> Știm că o parcare sau un garaj curat este esențial pentru imaginea oricărei afaceri sau proprietăți. De aceea, alegem rășini epoxidice ușor de curățat și întreținut, care nu necesită soluții speciale sau echipamente costisitoare.
                        </li>
                        <li>
                            <span className="font-bold">Durabilitate și costuri reduse pe termen lung:</span> O pardoseală epoxidică poate fi o investiție inițială mai mare, dar durabilitatea sa superioară și costurile reduse de întreținere o fac o alegere economică pe termen lung.
                        </li>
                        <li>
                            <span className="font-bold">Design și estetică:</span> O parcare sau un garaj nu trebuie să fie doar funcționale, ci și plăcute din punct de vedere estetic. Oferim o gamă variată de culori și finisaje pentru a crea un spațiu modern și primitor.
                        </li>
                        <li>
                            <span className="font-bold">Soluții personalizate:</span> Fiecare proiect este unic, iar noi înțelegem acest lucru. Colaborăm strâns cu clienții noștri pentru a înțelege nevoile și așteptările lor, oferind soluții personalizate care să răspundă perfect cerințelor lor specifice.
                        </li>
                    </ul>
                </div>

            </div>
        </section>

    )
}