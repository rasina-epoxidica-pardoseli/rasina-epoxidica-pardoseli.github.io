import React, { useState } from 'react';
import hala from "../static/images/home/1.jpeg"
import MultipleSlider from "../components/MultipleSlider";


export default function MarcajePage() {
    return (
        <section className="py-10 px-5">
            <div className="container  max-w-screen-lg mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    Marcaje
                </h1>
                <div className="py-8">
                    <MultipleSlider imageType='hale-industriale'/>
                </div>
                <p className="text-left md:text-xl leading-relaxed mb-4 pt-10">
                    Marcajele rutiere și industriale sunt esențiale pentru siguranță și organizare, iar noi suntem experți în trasarea lor cu rășină epoxidică. Fie că este vorba de marcaje pentru parcări, depozite, piste de biciclete sau drumuri, ne asigurăm că acestea sunt clare, durabile și rezistente la uzură și intemperii. Folosim materiale de înaltă calitate și tehnici precise pentru a crea marcaje care să îndeplinească cele mai înalte standarde de siguranță și vizibilitate.
                </p>
                <div className="text-left prose mt-12">
                    <h3 className="text-2xl font-semibold mb-4">La ce ne gândim când realizăm marcaje?</h3>
                    <ul className="list-disc list-inside ml-4 leading-relaxed space-y-4">
                        <li>
                            <span className="font-bold">Vizibilitate și siguranță:</span> Prioritatea noastră este siguranța. Alegem materiale reflectorizante și culori contrastante pentru a asigura vizibilitatea marcajelor în orice condiții de lumină, zi sau noapte.
                        </li>
                        <li>
                            <span className="font-bold">Durabilitate și rezistență:</span> Marcajele sunt supuse uzurii constante din cauza traficului și a factorilor de mediu. Folosim rășini epoxidice de înaltă calitate, rezistente la abraziune, intemperii și substanțe chimice, pentru a asigura o durată de viață cât mai lungă.
                        </li>
                        <li>
                            <span className="font-bold">Aderență și aplicare precisă:</span> Ne asigurăm că marcajele aderă perfect la suprafața de aplicare, fie că este asfalt, beton sau alt material. Utilizăm echipamente profesionale și tehnici precise pentru a obține linii drepte, curbe și simboluri clare.
                        </li>
                        <li>
                            <span className="font-bold">Conformitate cu standardele:</span> Respectăm cu strictețe toate standardele și reglementările în vigoare privind dimensiunile, culorile și simbolurile marcajelor, pentru a asigura conformitatea cu legislația și siguranța participanților la trafic. Ne asigurăm că marcajele respectă prevederile SR 1848-2:2011.
                        </li>
                        <li>
                            <span className="font-bold">Impact minim asupra mediului:</span> Suntem preocupați de protejarea mediului înconjurător. De aceea, alegem materiale ecologice și metode de aplicare care să minimizeze impactul asupra mediului.
                        </li>
                        <li>
                            <span className="font-bold">Personalizare și adaptare:</span> Fiecare proiect este unic. Colaborăm cu clienții noștri pentru a înțelege nevoile lor specifice și pentru a crea marcaje personalizate care să se integreze perfect în contextul lor.
                        </li>
                    </ul>
                </div>

            </div>
        </section>

    )
}