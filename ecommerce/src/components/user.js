import React, { Component } from 'react';
import User from '../snippets/profile/profile.js';
import Navbard from '../snippets/navbar/Navbard.js';
import Footer from '../snippets/footer/footer.js';
import Headerinfo from '../snippets/headInfo/head.js';

class Register extends Component {
  render() {
    return (
      <div id="wrapper">
        <header className="header navbar-top">
          <Headerinfo/>
        </header>
        <Navbard/>
        <User/>
        <div className="pie">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Register;
