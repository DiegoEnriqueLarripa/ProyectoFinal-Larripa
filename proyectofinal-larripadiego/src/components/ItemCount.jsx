import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <div className="input-group mb-3" style={{ maxWidth: '150px' }}>
                <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                <span className="form-control text-center">{quantity}</span>
                <button className="btn btn-outline-secondary" onClick={increment}>+</button>
            </div>
            <button 
                className="btn btn-primary btn-lg"
                onClick={() => onAdd(quantity)} 
                disabled={!stock}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;