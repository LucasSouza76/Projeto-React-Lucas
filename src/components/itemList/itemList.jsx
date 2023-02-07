import React, { useState, useEffect } from 'react';
import Item from '../item/item';

    const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
        setTimeout(() => {
        setItems([
            { name: 'item 1', description: 'description 1', price: 10.99 },
            { name: 'item 2', description: 'description 2', price: 12.99 },
            { name: 'item 3', description: 'description 3', price: 14.99 },
            { name: 'item 4', description: 'description 4', price: 16.99 },
        ]);

        setLoading(false);
        }, 2000);
    };

    fetchData();

    }, []);

    return (
        <div className="item-list">
            {loading ? (
            <p>Carregando...</p>
            ) : (
            items.map((item, index) => {
            return <Item key={index} name={item.name} description={item.description} price={item.price} />;
            })
            )}
        </div>
    );
};

export default ItemList;