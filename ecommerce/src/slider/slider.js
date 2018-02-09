import React, { Component } from 'react';
import './slider.css'

class Slider extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg" alt="First slide" height="350px" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg" alt="Second slide" height="350px"/>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg" alt="Third slide" height="350px"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Slider;
