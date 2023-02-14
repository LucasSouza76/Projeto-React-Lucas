import React, { useState, useEffect } from 'react';
import ItemDetails from '../itemDetails';

const ItemDetailContainer = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
    
        return (
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {props.items.map((item, index) => (
                            <div key={index}>
                                <p>{item.name}</p>
                                <ItemDetails
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    
    };
        
export default ItemDetailContainer;
