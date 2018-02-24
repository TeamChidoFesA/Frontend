import React, {Component} from 'react';
import Slider from 'react-slick';

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

class Galeria extends Component {
  render() {

    const settings = {
      lazyLoad: true,
      centerMode: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    const {galeria} = this.props;

    const items=galeria.map((item) => {
      return (
        <div>
          <img src={item.img} style={{height: "300px"}} alt="Avatar"/>
        </div>
      )
    })

    return (
      <Slider {...settings}>
          {items}
      </Slider>
    );
  }
}

export default Galeria;
