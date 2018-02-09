import React, { Component } from 'react';

class Navbard extends Component{
    render(){
      return(
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Logo/>
          <Search/>
          <Links/>
        </nav>

      );
    }
}

class Logo extends Component{
    render(){
      return(
         <a className="navbar-brand" href="#"><img className="logo" src={require('../logo.svg')} width="180" height="50" alt="" /></a>
      );
    }
}

class Search extends Component{
    render(){
      return(
        <form className="form-inline">
          <input className="form-control" type="text" placeholder="Buscar..." id="searchNav"/>
          <button className="btn btn-outline-success" type="submit"><i className="fa fa-search fa-fw"></i></button>
        </form>
      );
    }
}

class Links extends Component{
    render(){
      return(

          <ul className="nav navbar-nav navbar-right rightmenu ml-auto">
            <Wish/>
            <Shop/>
            <User/>
          </ul>

      );
    }
}

class Wish extends Component{
  render(){
    return(
      <li><a href="#"><span><i className="fa fa-heart"></i></span><span className="cart-count" id="cart_count">3</span></a></li>
    );
  }
}

class Shop extends Component{
  render(){
    return(
      <li><a href="#"><span><i className="fa fa-shopping-cart"></i></span><span className="cart-count" id="cart_count">0</span></a></li>
    );
  }
}

class User extends Component{
  render(){
    return(
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" type="button" data-toggle="dropdown"><span><i className="fa fa-user"></i></span></a>
        <ul className="dropdown-menu">
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </li>
    );
  }
}

export default Navbard;
