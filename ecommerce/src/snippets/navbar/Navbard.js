import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import './navbar.css';

class Navbard extends Component{

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><Logo/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Search/>
              </NavItem>
              <NavItem>
                <NavLink href="/"><Wish/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><Shop/></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Login
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    <div class="row">
                      <div class="col-md-12">
                        Login via
                        <div class="social-buttons">
                          <a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
                          <a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
                        </div>
                                        or
                         <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                            <div class="form-group">
                               <label class="sr-only" for="exampleInputEmail2">Email address</label>
                               <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
                            </div>
                            <div class="form-group">
                               <label class="sr-only" for="exampleInputPassword2">Password</label>
                               <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                                                     <div class="help-block text-right"><a href="">Forget the password ?</a></div>
                            </div>
                            <div class="form-group">
                               <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                            </div>
                            <div class="checkbox">
                               <label>
                               <input type="checkbox"/> keep me logged-in
                               </label>
                            </div>
                         </form>
                      </div>
                      <div class="bottom text-center">
                        New here ? <a href="#"><b>Join Us</b></a>
                      </div>
                   </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      );
    }
}

class Logo extends Component{
    render(){
      return(
         <a className="navbar-brand" href="#"><img className="logo" src={require('../../logo.svg')} width="180" height="50" alt="" /></a>
      );
    }
}

/*<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Logo/>
  <Search/>
  <Links/>
</nav>*/

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
      <li><a href="#"><span><i className="fa fa-user"></i></span></a></li>
    );
  }
}

export default Navbard;
