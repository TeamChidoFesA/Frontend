import React, { Component } from 'react';
import Navbard from './navbar/Navbard.js';
import Slider from './slider/slider.js';
import Sidebar from './body/sidebar.js';
import Content from './body/content.js';
import Footer from './footer/footer.js';

import './App.css';

class Headerinfo extends Component {
  render() {
    return (
      <div className="container">
          <ul>
              <li className="active"><a href='#'><i className="fa fa-facebook fa-fw"></i></a></li>
              <li className="active"><a href='#'><i className="fa fa-twitter fa-fw"></i></a></li>
              <li className="active"><a href='#'><i className="fa fa-google-plus fa-fw"></i></a></li>
              <li className="dactive"><a href="callto:5550692841"><i className="fa fa-phone fa-fw"></i> +55 50692811</a></li>
              <li className="dactive"><a href="#"><i className="fa fa-envelope fa-fw"></i> artesano@hotmail.com</a></li>
          </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <header className="header navbar-top">
          <Headerinfo/>
        </header>
        <Navbard/>
        <Slider/>
         <div className="container">
          <div className="row">
            <Sidebar/>
            <Content/>
          </div>
         </div>
         <Footer/>
      </div>
    );
  }
}

export default App;
