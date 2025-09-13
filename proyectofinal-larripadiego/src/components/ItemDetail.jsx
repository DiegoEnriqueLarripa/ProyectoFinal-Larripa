import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';
import { CartContext } from '../context/CartContext.jsx';
import { toast } from 'react-toastify';

const ItemDetail = ({ id, title, image, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, title, price, image };
        addItem(item, quantity);

        toast.success(`¡${quantity} ${title} añadido(s) al carrito!`, {
            position: "bottom-right",
            autoClose: 3000,
            theme: "colored",
        });
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 text-center">
                    <img src={image} alt={title} className="img-fluid rounded shadow"/>
                </div>
                <div className="col-md-7">
                    <h2 className="display-5">{title}</h2>
                    <p className="lead text-muted">{category}</p>
                    <p className="fs-4">{description}</p>
                    <p className="display-6 fw-bold mb-4">${price}</p>
                    
                    <footer className="mt-4">
                        <p>Stock disponible: {stock} unidades</p>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className="btn btn-success btn-lg">
                                    Terminar Compra
                                </Link>
                            ) : (
                                stock > 0
                                    ? <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                                    : <p className="text-danger fw-bold">¡Producto sin stock!</p>
                            )
                        }
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;