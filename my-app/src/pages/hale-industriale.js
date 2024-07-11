import React, { useState } from 'react';
import MultipleSlider from "../components/MultipleSlider";


export default function HaleIndustrialePage() {
    return (
        <section className="py-10 px-5">
            <div className="container max-w-screen-lg mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    Hale industriale
                </h1>
                <div className="py-8">
                    <MultipleSlider imageType='hale-industriale'/>
                </div>
                <p className="text-left md:text-xl leading-relaxed mb-4 pt-10">
                    Înțelegem că pardoselile halelor industriale sunt supuse unor solicitări extreme. De aceea, oferim soluții epoxidice robuste, rezistente la trafic greu, substanțe chimice și uzură intensă. Experiența noastră în proiecte industriale complexe ne permite să creăm pardoseli durabile și sigure, care să optimizeze funcționalitatea și productivitatea spațiului dumneavoastră.
                </p>
                <div className="text-left prose mt-12">
                    <h3 className="text-2xl font-semibold mb-4">La ce ne gândim când realizăm pardoseli industriale?</h3>
                    <ul className="list-disc list-inside ml-4 leading-relaxed space-y-4">
                        <li>
                            <span className="font-bold">Rezistența la trafic greu:</span> Utilizăm rășini epoxidice special formulate pentru a rezista la traficul intens al stivuitoarelor, camioanelor și altor utilaje industriale.
                        </li>
                        <li>
                            <span className="font-bold">Rezistența chimică:</span> Pardoselile noastre sunt concepute să facă față scurgerilor accidentale de uleiuri, solvenți și alte substanțe chimice comune în mediile industriale.
                        </li>
                        <li>
                            <span className="font-bold">Durabilitate și longevitate:</span> Investim în materiale de cea mai înaltă calitate și tehnici de aplicare riguroase pentru a asigura o durată de viață extinsă a pardoselilor, reducând nevoia de reparații costisitoare.
                        </li>
                        <li>
                            <span className="font-bold">Siguranța angajaților:</span> Oferim opțiuni de finisare antiderapante și antistatice pentru a preveni accidentele și a crea un mediu de lucru mai sigur.
                        </li>
                        <li>
                            <span className="font-bold">Ușurința în întreținere:</span> Suprafețele netede și non-poroase ale pardoselilor epoxidice sunt ușor de curățat și întreținut, reducând timpul și costurile asociate cu igienizarea.
                        </li>
                        <li>
                            <span className="font-bold">Estetică și branding:</span> Oferim o gamă largă de culori și finisaje, permițând personalizarea pardoselii pentru a se potrivi cu identitatea vizuală a companiei dumneavoastră.
                        </li>
                        <li>
                            <span className="font-bold">Respectarea normelor și reglementărilor:</span> Ne asigurăm că toate pardoselile noastre respectă standardele de siguranță și igienă specifice industriei dumneavoastră. Utilizăm numai materiale certificate și conforme cu standardele relevante (de exemplu, EN 13813 pentru șape pe bază de rășini sintetice).
                        </li>
                        <li>
                            <span className="font-bold">Soluții personalizate:</span> Colaborăm strâns cu fiecare client pentru a înțelege cerințele specifice ale activității sale și pentru a crea o pardoseală epoxidică perfect adaptată nevoilor sale.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}