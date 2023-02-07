import React from 'react';

    const Item = ({ name, description, price }) => {
        return (
            <div className="product">
                <h2 className="product-name">{name}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">Preço: R${price}</p>
            </div>
            );
        };

export default Item;