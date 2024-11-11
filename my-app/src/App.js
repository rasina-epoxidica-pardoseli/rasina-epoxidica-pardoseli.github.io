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
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';


function App() {
    const location = useLocation();
    const activePage = location.pathname.substring(1) || '/';

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 10);
    }, [location]);

    return (
        <div className="App overflow-hidden">
            <TopHeader />
            <Menu activePage={activePage} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/despre" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/clienti" element={<ClientiPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/hale-industriale" element={<HaleIndustrialePage />} />
                <Route path="/terase-exterioare" element={<TeraseExterioarePage />} />
                <Route path="/marcaje" element={<MarcajePage />} />
                <Route path="/parcari-garaje" element={<ParcariGarajePage />} />
                <Route path="/rasina-epoxidica-pentru-pardoseli-industriale" element={<Article1 />} />
                <Route path="/trasarea-marcajelor-cu-rasina-epoxidica" element={<Article2 />} />
                <Route path="/pardoseala-garaj-rezistenta" element={<Article3 />} />
            </Routes>
            <BackToTopButton />
            <Footer />
        </div>
    );
}

export default function AppWrapper() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    )
}