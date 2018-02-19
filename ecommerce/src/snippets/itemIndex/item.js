import React from 'react';
import './item.css';

const item = ({ img, name, stars, description, price }) => (
    <div>
      <div className="product-box hover-circle text-center">
          <div className="product-item">
              <figure><img src={img} alt={name}/></figure>
              <h3 className="product-title">{name}</h3>
              <h4 className="product-price">Pricce : ${price}</h4>
              <p className="product-drisc">{description}</p>
              <a href="#" className="btn btn-default buy-now">+ carrito <i className="fa fa-cart-arrow-down"></i></a>
          </div>
          <div className="hoverly-item">
              <a href="" data-toggle="tooltip" data-placement="top" title="Agregar a lista de deseos!"><i className="fa fa-heart"></i></a>
              <a href="" data-toggle="tooltip" data-placement="top" title="Agregar al carrito!"><i className="fa fa-cart-arrow-down"></i></a>
              <a href="" data-toggle="modal" data-target="#quick_view" data-toggle="tooltip" data-placement="top" title="Vista rapida!"><i className="fa fa-eye"></i></a>
              <br/>
              <a href="" className="btn btn-default view-details-btn">Ver mas</a>
          </div>
          <div className="product-cap cap-bg-black">
              20%
          </div>
      </div>
    </div>
);

export default item;
