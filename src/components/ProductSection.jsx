import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ title, items, id }) => {
    return (
        <section id={id} className="section category-section">
            <div className="container">
                <h2 className="section-title">
                    <span>{title}</span>
                </h2>
                <div className="products-grid">
                    {items.map(item => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
            </div>

            <style>{`
        .category-section {
          padding: 4rem 1rem;
        }
        .container {
           max-width: 1200px;
           margin: 0 auto;
        }
        .section-title {
           font-size: 2rem;
           margin-bottom: 2rem;
           border-bottom: 2px solid var(--border-color);
           padding-bottom: 1rem;
        }
        .section-title span {
           border-bottom: 4px solid var(--primary-color);
           padding-bottom: 1rem;
        }
        .products-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
           gap: 2rem;
        }
      `}</style>
        </section>
    );
};

export default ProductSection;
