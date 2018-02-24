import React from 'react';
import Galeria from './galeria';
import Articles from './articles';
import './portafolio.css';

const Portafolio = ({array}) => (
  <div className="w3-twothird">

    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Acerca de...</h2>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>Se unio a artesan </b></h5>
        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{array.date} - <span className="w3-tag w3-teal w3-round">Current</span></h6>
        <br/>
        <p>{array.description}</p>
        <hr/>
      </div>
      <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Mi Galeria</h2>
      <Galeria galeria={array.galeria} />
    </div>

    <Articles/>

  </div>
);

export default Portafolio;
