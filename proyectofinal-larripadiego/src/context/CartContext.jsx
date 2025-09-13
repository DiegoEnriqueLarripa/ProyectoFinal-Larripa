import React, { useState, createContext } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                }
                return prod;
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach(prod => {
            total += prod.quantity;
        });
        return total;
    };

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach(prod => {
            total += prod.price * prod.quantity;
        });
        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalQuantity, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};