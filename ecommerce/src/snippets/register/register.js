import React, { Component } from 'react';
import Container from './container';

import './register.css';

class Register extends Component {
    render(){

      return (
        <div className="fullscreen_bg">
          <div className="container">
            <div className="row" style={{paddingTop: "150px"}}>
              <div className="col-md-3"></div>
              <div className="col-md-6"><Container /></div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      );
    }
}

export default Register;
