import SimpleSlider from "../components/Slider";
import {SlidingContentRight, SlidingContentLeft} from "../components/SlidingContent";
import SlidingContentRightVideo from "../components/SlidingContentVideo";
import FadingSection from "../components/BlogIntro";
import ThreeItemSection from "../components/ThreeArticles";
import React, {useState} from 'react';
import hala from "../static/images/home/1.jpeg"
import marcaje from "../static/images/blog/marcaje.jpeg"
import terase from "../static/images/terase_exterioare/1.jpeg"
import parcari from "../static/images/blog/parcari.jpeg"


export default function HomePage() {
    return (
        <div className="content-home">
            <div className="overflow-hidden">
                <SimpleSlider/>
            </div>
            <div className={"servicii-container max-w-screen-lg mx-auto"}>
                <SlidingContentRightVideo
                    url={"hale-industriale"}
                    visible={true}
                    id={"hale-industriale"}
                    imagePath={hala}
                    description="Suntem experți în transformarea halelor industriale prin pardoseli epoxidice durabile și estetice. Cu o experiență vastă și cunoștințe aprofundate, oferim soluții personalizate pentru fiecare proiect, asigurând funcționalitate și siguranță pe termen lung."
                    title="Hale industriale"
                />
                <SlidingContentLeft
                    url={"parcari-garaje"}
                    visible={false}
                    id={"parcari-garaje"}
                    imagePath={parcari}
                    description="Transformăm parcările și garajele în spații funcționale și estetice, utilizând rășină epoxidică de înaltă calitate. Pardoselile epoxidice nu doar că rezistă la trafic intens și uzură, ci și oferă o suprafață ușor de întreținut, igienică și cu un aspect modern."
                    title="Parcări și garaje"
                />
                <SlidingContentRight
                    url={"terase-exterioare"}
                    visible={false}
                    id={"terase-exterioare"}
                    imagePath={terase}
                    description="Transformăm terasele exterioare în oaze de relaxare și stil, utilizând rășină epoxidică de înaltă calitate, special concepută pentru a rezista la intemperii și uzură. Rășina epoxidică nu doar că protejează suprafața, ci oferă și un aspect modern, cu o gamă variată de culori și finisaje."
                    title="Terase exterioare"
                />
                <SlidingContentLeft
                    url={"marcaje"}
                    visible={false}
                    id={"marcaje"}
                    imagePath={marcaje}
                    description="Suntem experți în realizarea marcajelor durabile și vizibile, utilizând rășină epoxidică de înaltă calitate. Echipa noastră calificată asigură o aplicare precisă și eficientă, respectând toate normele și standardele în vigoare, pentru siguranța și buna organizare a spațiului."
                    title="Marcaje"
                />
            </div>
            <div className={"blog"}>
                <FadingSection
                    title="Află secretele noastre testate în practică"
                    description="În urma numeroaselor proiecte realizate..."
                    buttonText="Citește mai multe soluții pe blog"
                />
                <ThreeItemSection />
            </div>
        </div>
    )
}