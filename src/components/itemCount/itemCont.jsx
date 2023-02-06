import React, { useState } from 'react';
import '../itemCount/itemCount.css'

const ItemCount = ({ initialCount = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initialCount);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
      onAdd(count + 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Adicionado ${count} itens ao carrinho`);
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
      onAdd(count - 1);
    }
  };

  return (
  <div className='buttons'>
    <button className="item-count-button"  onClick={handleRemove} disabled={count <= 1}>
      -
    </button>
    <span>{count}</span>
    <button className="item-count-button"  onClick={handleAdd} disabled={count >= stock}>
      +
    </button>
    <button className="add-to-cart-button" onClick={handleAddToCart}>Adicionar ao carrinho</button>
  </div>
  );
};


export default ItemCount;