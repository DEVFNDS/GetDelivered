import React from 'react';

const ProductCards = ({ products }) => {
    console.log(products)
  return (
    <>
        <h3 className="product-header">Often bought by you</h3>
        <div className="product-container">
            
            {products && products.data && products.data.map((product) => (
                <div key={product.name} className="card">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.product_description}</p>
                    <p className="card-text">{product.price}</p>
                </div>
                </div>
            ))}
        </div>
    </>
    
  );
};

export default ProductCards;