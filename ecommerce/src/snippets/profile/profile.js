import React, { Component } from 'react';
import Sideuser from '../sideUser/sideuser';
import Portafolio from '../portafolio/portafolio';

import './profile.css';

const array = {
    img: 'https://www.w3schools.com/w3images/avatar_hat.jpg',
    name: 'Mauricio Ortiz',
    nick: "Superdicko",
    city: "Ecatepec",
    country: "Mexico",
    mail: "mail@example.com",
    phone: "5550692841",
    skills: [
      {
        skill: 'Madera',
        value: '70'
      },
      {
        skill: 'Fibras Vegetales',
        value: '70'
      },
      {
        skill: 'Marmol, Piedra y Vidrio',
        value: '25'
      },
      {
        skill: 'Metal',
        value: '80'
      }]
};

const array1 = {
    date: 'abril 1994',
    description: 'Mauricio Ortiz es un excelente programador que todos se la maman, y mas el venona que es rehuevon jajajaja pero tenemos que darle chance para que no chille, pero vacas que no dan leche... a chingar a su madre jajajaja like y te comento',
    galeria: [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Artesan%C3%ADas_de_Puebla.JPG/250px-Artesan%C3%ADas_de_Puebla.JPG'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Artesan%C3%ADas_de_Puebla.JPG/250px-Artesan%C3%ADas_de_Puebla.JPG'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Artesan%C3%ADas_de_Puebla.JPG/250px-Artesan%C3%ADas_de_Puebla.JPG'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Artesan%C3%ADas_de_Puebla.JPG/250px-Artesan%C3%ADas_de_Puebla.JPG'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Artesan%C3%ADas_de_Puebla.JPG/250px-Artesan%C3%ADas_de_Puebla.JPG'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Artesan%C3%ADas_de_Puebla.JPG/250px-Artesan%C3%ADas_de_Puebla.JPG'
      },
    ]
};


class Profile extends Component {
  render() {
    return (
      <body className="w3-light-grey">
        <div className="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
          <div className="w3-row-padding">
            <Sideuser array={array}/>
            <Portafolio array={array1}/>
          </div>
        </div>
      </body>
    );
  }
}

export default Profile;
