import React, { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase.js'; 
import ItemList from './ItemList.jsx';
import Hero from './Hero.jsx';
import HeroSlider from './HeroSlider.jsx';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState({ title: '', subtitle: '' });
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    if (categoryId) {
        const capitalizedCategory = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
        setHeroData({
            title: `Nuestros ${capitalizedCategory}`,
            subtitle: `Descubre la mejor selección de ${categoryId} del mercado.`
        });
    } else {
        setHeroData({
            title: '¡Bienvenido a Tech Store!',
            subtitle: 'La tecnología que buscas, a un clic de distancia.'
        });
    }

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch(error => {
        console.error("Error al obtener los productos: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h2 className="text-center my-5">Cargando...</h2>;
  }

  return (
    <>
      <Hero title={heroData.title} subtitle={heroData.subtitle} />
      {
        !categoryId && (
          <div className="mb-5"> 
            <HeroSlider />
          </div>
        )
      }
      
      
      <main className="container">
        <h2 className="text-center mb-4">
            {categoryId ? 'Catálogo' : 'Nuestros Productos Destacados'}
        </h2>
        <ItemList products={products} />
      </main>
    </>
  );
};

export default ItemListContainer;