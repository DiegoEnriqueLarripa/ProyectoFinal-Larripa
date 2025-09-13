import React, { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore'; 
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase.js';
import ItemDetail from './ItemDetail.jsx';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, 'products', itemId);
        getDoc(docRef)
            .then(response => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProduct(productAdapted);
                } else {
                    console.log('El producto no existe');
                    setProduct(null);
                }
            })
            .catch(error => {
                console.error("Error obteniendo el producto:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return <h2 className="text-center my-5">Cargando detalle del producto...</h2>;
    }

    return (
        <div className="container my-5">
            {
              product 
                ? <ItemDetail {...product} /> 
                : <h1 className="text-center">El producto solicitado no existe.</h1>
            }
        </div>
    );
};

export default ItemDetailContainer;