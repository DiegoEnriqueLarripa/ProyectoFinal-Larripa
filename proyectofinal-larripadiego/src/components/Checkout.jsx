import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../services/firebase.js';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

    const { cart, getTotalPrice, clearCart } = useContext(CartContext);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const createOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const order = {
                buyer: { ...formData },
                items: cart,
                total: getTotalPrice(),
                date: Timestamp.fromDate(new Date())
            };

            const ordersCollection = collection(db, 'orders');
            const docRef = await addDoc(ordersCollection, order);

            setOrderId(docRef.id);
            clearCart();
            toast.success('🎉 ¡Tu orden ha sido creada con éxito!');
        } catch (error) {
            console.error("Error al crear la orden: ", error);
            toast.error('❌ Hubo un error al crear tu orden.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1 className="text-center my-5">Generando tu orden...</h1>;
    }

    if (orderId) {
        return (
            <div className="container text-center my-5">
                <h1>¡Gracias por tu compra!</h1>
                <p className="lead">El ID de tu orden es: <strong>{orderId}</strong></p>
                <Link to='/' className="btn btn-primary mt-3">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="container my-5" style={{ maxWidth: '600px' }}>
            <h1 className="text-center mb-4">Checkout</h1>
            <div className="card p-4 shadow-sm">
                <form onSubmit={createOrder}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre completo</label>
                        <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="tel" id="phone" className="form-control" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg">Crear Orden</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;