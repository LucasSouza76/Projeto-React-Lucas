import React from 'react';

const ItemDetails = (props) => {
  return (
    <div className="item-details">
      <img src="https://via.placeholder.com/150x150" alt={props.name} />
      <h3>{props.name}</h3>
      <p>Descrição: {props.description}</p>
      <p>Preço: {props.price}</p>
    </div>
  );
};

export default ItemDetails;
