import React, { Component } from 'react';
import Navbard from '../snippets/navbar/Navbard.js';
import Slider from '../snippets/slider/slider.js';
import Sidebar from '../snippets/sidebar/sidebar.js';
import Content from '../snippets/body/content.js';
import Footer from '../snippets/footer/footer.js';
import Headerinfo from '../snippets/headInfo/head.js';

class Home extends Component {
  render() {
    return (
      <div id="wrapper">
        <header className="header navbar-top">
          <Headerinfo/>
        </header>
        <Navbard/>
        <Slider/>
        <div className="cuerpo" style={{padding: "20px 60px 20px 60px"}}>
          <div className="row">
            <Sidebar/>
            <Content/>
          </div>
        </div>
        <div className="pie">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;
