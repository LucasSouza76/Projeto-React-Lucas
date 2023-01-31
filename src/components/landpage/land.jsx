import React from 'react';
import './land.css';

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.image} alt={props.title} className="product-image" />
      <h2 className="product-title">{props.title}</h2>
      <p className="product-description">{props.description}</p>
      <p className="product-price">{props.price}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="land">
      <Product
        image="https://via.placeholder.com/150x150"
        title="Produto 1"
        description="Uma descrição curta do produto 1"
        price="R$ 50,00"
      />
      <Product
        image="https://via.placeholder.com/150x150"
        title="Produto 2"
        description="Uma descrição curta do produto 2"
        price="R$ 100,00"
      />
      <Product
        image="https://via.placeholder.com/150x150"
        title="Produto 3"
        description="Uma descrição curta do produto 3"
        price="R$ 150,00"
      />
    </div>
  );
};

export default App;
