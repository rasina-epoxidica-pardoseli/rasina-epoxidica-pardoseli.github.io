import './App.css';
import React, { useState, useEffect } from 'react';
import TopHeader from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import HaleIndustrialePage from "./pages/hale-industriale";
import TeraseExterioarePage from "./pages/terase-exterioare";
import MarcajePage from "./pages/marcaje";
import ParcariGarajePage from "./pages/parcari-garaje";
import AboutPage from "./pages/about";
import Article1 from "./blog/Article1";
import Article2 from "./blog/Article2";
import Article3 from "./blog/Article3";
import ClientiPage from "./pages/clienti";
import BackToTopButton from "./components/BackToTop"


function App() {
    const [activePage, setActivePage] = useState(window.location.hash.substring(1) || 'acasa');
    const handleNavigation = (newPage) => {
        setActivePage(newPage);
        window.location.hash = newPage;
    };

    useEffect(() => {
        setTimeout(function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100)
    }, [activePage]);

    return (
        <div className="App overflow-hidden">
            <TopHeader />
            <Menu onNavigation={handleNavigation} />
            <div className="content-container transition-opacity duration-300 ease-in-out">
                {activePage === 'acasa' && <HomePage onNavigation={handleNavigation} className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'acasa'} />}
                {activePage === 'despre' && <AboutPage className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'despre'} />}
                {activePage === 'contact' && <ContactPage className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'contact'} />}
                {activePage === 'clienti' && <ClientiPage className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'clienti'} />}
                {activePage === 'blog' && <BlogPage onNavigation={handleNavigation} className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'blog'} />}
                {activePage === 'hale-industriale' && <HaleIndustrialePage onNavigation={handleNavigation} className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'hale-industriale'} />}
                {activePage === 'terase-exterioare' && <TeraseExterioarePage onNavigation={handleNavigation} className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'terase-exterioare'} />}
                {activePage === 'marcaje' && <MarcajePage onNavigation={handleNavigation} className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'marcaje'} />}
                {activePage === 'parcari-garaje' && <ParcariGarajePage onNavigation={handleNavigation} className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'parcari-garaje'} />}
                {activePage === 'rasina-epoxidica-pentru-pardoseli-industriale' && <Article1 className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'rasina-epoxidica-pentru-pardoseli-industriale'} />}
                {activePage === 'trasarea-marcajelor-cu-rasina-epoxidica' && <Article2 className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'trasarea-marcajelor-cu-rasina-epoxidica'} />}
                {activePage === 'pardoseala-garaj-rezistenta' && <Article3 className="opacity-0 transition-opacity duration-300 ease-in-out" hidden={activePage !== 'pardoseala-garaj-rezistenta'} />}
            </div>
            <BackToTopButton />
            <Footer onNavigation={handleNavigation} />
        </div>
    );
}

export default App;
