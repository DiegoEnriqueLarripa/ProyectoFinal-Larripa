import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);
    const totalQuantity = getTotalQuantity();

    return (
        <Link to='/cart' className="btn btn-outline-light position-relative">
            🛒
            {totalQuantity > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                </span>
            )}
        </Link>
    );
};

export default CartWidget;
