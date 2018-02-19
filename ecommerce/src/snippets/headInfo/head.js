import React from 'react';
import './head.css';

const head = () => {
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

export default head;
