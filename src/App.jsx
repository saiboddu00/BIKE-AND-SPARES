import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
    // Helper to filter products by category for specific sections
    // Helper to filter products by category for specific sections
    const getProductsByCategory = (catName) => {
        const category = products.find(p => p.category === catName);
        return category ? category.items : [];
    };

    // Categories map to section structure
    const sections = [
        { title: "Bike Repair Tools", id: "repair-tools" },
        { title: "Engine Parts", id: "engine-parts" },
        { title: "Electrical Parts", id: "electrical" },
        { title: "Brake & Suspension", id: "brakes" },
        { title: "Tyres & Chains", id: "tyres" },
        { title: "Oils & Lubricants", id: "oils" },
        { title: "Safety & Accessories", id: "accessories" }
    ];

    return (
        <div className="app">
            <Header />
            <Hero />

            <main className="main-content">
                {sections.map((section, index) => (
                    <ProductSection
                        key={index}
                        id={section.id}
                        title={section.title}
                        items={getProductsByCategory(section.title)}
                    />
                ))}

                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
