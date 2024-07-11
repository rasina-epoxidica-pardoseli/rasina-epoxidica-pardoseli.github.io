import React from 'react';

export default function BlogArticle({ title, intro, imageUrl, content }) {
    return (
        <article className="container mx-auto py-12 px-4 md:px-8 lg:px-16 max-w-screen-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">{title}</h1>
            <p className="text-gray-700 mb-10 leading-relaxed text-left">{intro}</p>

            <img src={imageUrl} alt={title} className="w-full rounded-lg mb-10" />

            <div className="prose lg:prose-xl prose-slate max-w-none text-left">
                {content.map((section, index) => (
                    <React.Fragment key={index}>
                        <h2 className="text-3xl font-semibold mt-12 mb-4">{section.subtitle}</h2>
                        <p className="mb-8">{section.paragraph}</p>
                    </React.Fragment>
                ))}
            </div>
        </article>
    );
}