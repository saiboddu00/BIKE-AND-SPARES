import React from 'react';

const ProductCard = ({ product }) => {
   return (
      <div className="product-card">
         <div className="image-container">
            {/* Using a placeholder for now, will replace with generated images relative path */}
            <img src={`/assets/${product.image}.png`} alt={product.name} />
         </div>
         <div className="product-info">
            <h3>{product.name}</h3>
            <p className="price">₹{product.price.toLocaleString()}</p>
            <p className="usage">{product.usage}</p>
            <button className="buy-btn">Buy Now</button>
         </div>

         <style>{`
        .product-card {
           background-color: var(--bg-card);
           border-radius: 8px;
           overflow: hidden;
           transition: transform 0.3s, box-shadow 0.3s;
           border: 1px solid var(--border-color);
           display: flex;
           flex-direction: column;
        }
        .product-card:hover {
           transform: translateY(-5px);
           box-shadow: 0 10px 20px rgba(0,0,0,0.4);
           border-color: var(--primary-color);
        }
        .image-container {
           width: 100%;
           height: 200px;
           background-color: #000;
           overflow: hidden;
        }
        .image-container img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 0.5s;
        }
        .product-card:hover .image-container img {
           transform: scale(1.1);
        }
        .product-info {
           padding: 1.5rem;
           display: flex;
           flex-direction: column;
           flex-grow: 1;
        }
        .product-info h3 {
           margin: 0 0 0.5rem 0;
           font-size: 1.1rem;
           color: var(--text-white);
        }
        .price {
           font-size: 1.25rem;
           color: var(--primary-color);
           font-weight: 700;
           margin: 0.5rem 0;
        }
        .usage {
           font-size: 0.9rem;
           color: var(--text-gray);
           margin-bottom: 1.5rem;
           flex-grow: 1;
           line-height: 1.4;
        }
        .buy-btn {
           width: 100%;
           padding: 0.8rem;
           background-color: transparent;
           border: 2px solid var(--primary-color);
           color: var(--primary-color);
           font-weight: 600;
           cursor: pointer;
           transition: all 0.3s;
           border-radius: 4px;
        }
        .buy-btn:hover {
           background-color: var(--primary-color);
           color: white;
        }
      `}</style>
      </div>
   );
};

export default ProductCard;
