import React, { Component } from 'react';
import Title from '../itemIndex/titles';
import Items from '../itemIndex/item';
import ReItems from '../itemIndex/returnItems';
import Slider from 'react-slick';

import './content.css';


class Content extends Component {
    render(){


      return (
        <div className="col-md-10" style={{background:'white'}}>

          <div className="listItemsCont">
            <Title title={'Recomendado para ti'}/>
              <ReItems/>
            <br/>
            <hr/>
          </div>

        </div>
      );
    }
}

export default Content;

/*<div>
  <div className="product-box hover-circle text-center">
      <div className="product-item">
          <figure><img src={item.img} alt={item.name}/></figure>
          <h3 className="product-title">{item.name}</h3>
          <h4 className="product-price">Pricce : ${item.price}</h4>
          <p className="product-drisc">{item.description}</p>
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
</div>*/
