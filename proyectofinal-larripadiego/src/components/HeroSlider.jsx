import React from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <div id="heroCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="https://www.start.com.ar/Content/banner-editorial/2023-10-18_tecnoilogico/banner.jpg" className="d-block w-100" alt="Ofertas en laptops" />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="fw-bold">Bienvenido a Tech Store</h2>
            <p>Los mejores precios en laptops de última generación</p>
            <Link to="/category/notebooks" className="btn btn-primary">Ver laptops</Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="https://www.start.com.ar/Content/banner-editorial/2023-10-18_tecnoilogico/banner.jpg" className="d-block w-100" alt="Ofertas en smartphones" />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="fw-bold">Smartphones al mejor precio</h2>
            <p>Descubrí lo último en celulares</p>
            <Link to="/category/smartphones" className="btn btn-success">Ver celulares</Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src="https://www.start.com.ar/Content/banner-editorial/2023-10-18_tecnoilogico/banner.jpg" className="d-block w-100" alt="Ofertas en tablets" />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="fw-bold">Tablets de última generación</h2>
            <p>Ideales para estudio y trabajo</p>
            <Link to="/category/tablets" className="btn btn-warning">Ver tablets</Link>
          </div>
        </div>

      </div>

      {/* Controles */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default HeroSlider;
