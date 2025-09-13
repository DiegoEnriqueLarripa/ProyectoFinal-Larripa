import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import CartItem from './CartItem.jsx';

const Cart = () => {
    const { cart, clearCart, getTotalQuantity, getTotalPrice } = useContext(CartContext);

    if (getTotalQuantity() === 0) {
        return (
            <div className="container text-center my-5">
                <h1 className="display-4">Tu carrito está vacío</h1>
                <p className="lead">Parece que todavía no has añadido ningún producto.</p>
                <hr className="my-4" />
                <p>¡Explora nuestra tienda para encontrar algo que te guste!</p>
                <Link to='/' className='btn btn-dark btn-lg mt-3'>
                    Ir a la Tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Tu Carrito de Compras</h1>
            <div className="row">
                <div className="col-lg-8">
                    {cart.map(p => <CartItem key={p.id} {...p} />)}
                </div>
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title text-center mb-4">Resumen del Pedido</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Subtotal
                                    <span>${getTotalPrice()}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Envío
                                    <span className="badge bg-success">GRATIS</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center fw-bold fs-5">
                                    Total
                                    <span>${getTotalPrice()}</span>
                                </li>
                            </ul>
                            <div className="d-grid gap-2 mt-4">
                                <Link to='/checkout' className="btn btn-success btn-lg">
                                    Proceder al Pago
                                </Link>
                                <button onClick={() => clearCart()} className="btn btn-outline-danger">
                                    Vaciar Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;