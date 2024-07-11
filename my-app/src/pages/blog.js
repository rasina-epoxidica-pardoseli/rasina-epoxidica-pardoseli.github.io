import ThreeItemSection from "../components/ThreeArticles";
import React, { useState, useEffect, useRef } from 'react';


export default function BlogPage({ onNavigation }) {
    return (
        <section className="py-10">
            <div className="container  max-w-screen-lg mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    Blog
                </h1>
                <ThreeItemSection onNavigation={onNavigation}/>
            </div>
        </section>
    )
}
