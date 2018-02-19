import React, { Component } from 'react';
import Title from '../itemIndex/titles';
import Items from '../itemIndex/item';
import ReItems from '../itemIndex/returnItems';
import Slider from 'react-slick';

import './content.css';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block',  background: 'green'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'green'}}
      onClick={onClick}
    ></div>
  );
}

const items = [
  {
    img: 'https://s12.postimg.org/655583bx9/item_1_180x200.png',
    name: 'Camisa Bat',
    stars: 4,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 58.21
  },
  {
    img: 'https://s12.postimg.org/655583bx9/item_1_180x200.png',
    name: 'Camisa Bat',
    stars: 4,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 58.21
  },
  {
    img: 'https://s12.postimg.org/655583bx9/item_1_180x200.png',
    name: 'Camisa Bat',
    stars: 4,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 58.21
  },
  {
    img: 'https://s12.postimg.org/655583bx9/item_1_180x200.png',
    name: 'Camisa Bat',
    stars: 4,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 58.21
  },
  {
    img: 'https://s12.postimg.org/655583bx9/item_1_180x200.png',
    name: 'Camisa Bat',
    stars: 4,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 58.21
  },
  {
    img: 'https://s12.postimg.org/655583bx9/item_1_180x200.png',
    name: 'Camisa Bat',
    stars: 4,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 58.21
  },
  {
    img: 'https://s12.postimg.org/655583bx9/item_1_180x200.png',
    name: 'Camisa Bat',
    stars: 4,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 58.21
  },
  {
    img: 'https://s12.postimg.org/655583bx9/item_1_180x200.png',
    name: 'Camisa Bat',
    stars: 4,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 58.21
  }

];


class Content extends Component {
    render(){

      const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        responsive: [{breakpoint: 768, settings: { slidesToShow: 2 } }, { breakpoint:  508, settings: { slidesToShow: 1 }}, {breakpoint:  1280, settings: { slidesToShow: 3 }}, {breakpoint:  2180, settings: { slidesToShow: 4 } }],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };



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
