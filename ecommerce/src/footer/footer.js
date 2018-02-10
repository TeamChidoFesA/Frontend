import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    return (
      <footer className="myfooter">
  		<div className="container">
  			<div className="row">
  				<div className="col-sm-4">
  					<h4 className="title-widget">Artesan</h4>
  					<p>Artesan es una marca registrada y bla blab bla bla elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>

  					<ul className="social social-circle">
  						<li> <a href="#" className="icoFacebook"><i className="fa fa-facebook"></i></a></li>
  						<li> <a href="#" className="icoTwitter"> <i className="fa fa-twitter"></i> </a> </li>
  						<li> <a href="#" className="icoGoogle"> <i className="fa fa-google-plus"></i> </a> </li>
  						<li> <a href="#" className="icoRss"> <i className="fa fa-youtube"></i> </a> </li>
  					</ul>
  				</div>
  				<div className="col-sm-4">
  					<h4 className="title-widget">Mi cuenta</h4>
  					<span className="acount-icon">
  						<a href="#"><i className="fa fa-heart" aria-hidden="true"></i> Lista de Deseos</a>
  						<a href="#"><i className="fa fa-cart-plus" aria-hidden="true"></i> Carrito</a>
  						<a href="#"><i className="fa fa-user" aria-hidden="true"></i> Perfil</a>
  					</span>
  				</div>
  				<div className="col-sm-4">
  					<h4 className="title">Metodos de Pago</h4>
  					<p></p>
  					<ul className="payment">
  						<li><a href="#"><i className="fa fa-cc-amex zoom" aria-hidden="true"></i></a></li>
  						<li><a href="#"><i className="fa fa-credit-card zoom" aria-hidden="true"></i></a></li>
  						<li><a href="#"><i className="fa fa-paypal zoom" aria-hidden="true"></i></a></li>
  						<li><a href="#"><i className="fa fa-cc-visa zoom" aria-hidden="true"></i></a></li>
  					</ul>
  				</div>
  			</div>
  			<hr style={{color:'white'}}/>

  			<div className="row text-center"> © 2018. Artesa.com</div>
  		</div>
    </footer>

    );
  }
}

export default Footer;
