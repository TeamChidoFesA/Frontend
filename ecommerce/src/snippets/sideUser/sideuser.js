import React, { Component } from 'react';
import Skills from './skills';
import './sideuser.css';

const Sideuser = ({array}) => (
  <div className="w3-third">

    <div className="w3-white w3-text-grey w3-card-4">
      <div className="w3-display-container">
        <img src={array.img} style={{width:"100%", height: "300px"}} alt="Avatar"/>
        <div className="w3-display-bottomleft w3-container w3-text-black">
          <h2>{array.name}</h2>
        </div>
      </div>
      <div className="w3-container">
        <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{array.nick}</p>
        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{array.city},  {array.country}</p>
        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{array.mail}</p>
        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{array.phone}</p>
        <hr/>

        <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Habilidades</b></p>
          <Skills array={array.skills}/>
        <br/>
      </div>
    </div>
    <br/>

  </div>
);
export default Sideuser;
