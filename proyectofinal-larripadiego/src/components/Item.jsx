import React from 'react';
import { Link } from 'react-router-dom';
const Item = ({ id, title, price, image }) => { 
  return (
    <div className="card m-2 shadow-sm" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt={title} style={{ height: '220px', objectFit: 'contain', paddingTop: '10px' }} />
        <div className="card-body text-center d-flex flex-column justify-content-between">
            <div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text fs-5 fw-bold">${price}</p>
            </div>
            <Link to={`/item/${id}`} className="btn btn-dark mt-auto">
                Ver Detalle
            </Link>
        </div>
    </div>
  );
};

export default Item;