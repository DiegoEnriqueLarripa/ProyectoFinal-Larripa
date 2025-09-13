import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const CartItem = ({ id, title, price, quantity, image }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="card mb-3 shadow-sm">
            <div className="row g-0 align-items-center">
                <div className="col-md-2 text-center">
                    <img src={image} className="img-fluid rounded-start" alt={title} style={{ maxWidth: '100px', padding: '10px' }} />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text mb-1">Cantidad: {quantity}</p>
                        <p className="card-text"><small className="text-muted">Precio unitario: ${price}</small></p>
                        <p className="card-text fw-bold">Subtotal: ${price * quantity}</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <button onClick={() => removeItem(id)} className="btn btn-outline-danger">Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;