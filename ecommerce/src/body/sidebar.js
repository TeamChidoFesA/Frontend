import React, { Component } from 'react';
import './sidebar.css';

const items = [
  {
    text: 'Ceramica',
    link: '#'
  },
  {
    text: 'Madera',
    link: '#'
  },
  {
    text: 'Fibras Vegetales',
    link: '#'
  },
  {
    text: 'Marmol, Piedra y Vidrio',
    link: '#'
  },
  {
    text: 'Metal',
    link: '#'
  },
  {
    text: 'Piel y Cuero',
    link: '#'
  },
  {
    text: 'Textil',
    link: '#'
  },
  {
    text: 'Joyeria',
    link: '#'
  },
  {
    text: 'Instruento Musicales',
    link: '#'
  },
  {
    text: 'Varios',
    link: '#'
  }
];

class Sidebar extends Component {
  render() {

    const links = items.map((item) => {
      return (
          <a href={item.link}><li>{item.text}</li></a>
      );
    });


    return (
      <div className="col-md-3">
          <div className="sidebar-wrap">
              <div className="sidebar-box">
                 <ul className="list-links">
                    {links}
                 </ul>
              </div>
         </div>
      </div>
    );
  }
}

export default Sidebar;
