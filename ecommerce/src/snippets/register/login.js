import React, { Component } from 'react';
import { Button, Form, Input, FormGroup, Label } from 'reactstrap';

class Login extends Component {
    constructor(props) {
      super(props);

    }

    render(){

      return (
        <div className="container">
          <Form>
            <FormGroup>
              <Label for="correo">Correo</Label>
              <Input placeholder="correo@example.com" id="correo" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <div className="text-center">
  						<Button>Submit</Button>
  					</div>

            <br/>
            <hr/>
            <div className="text-center">
  						<a href="#" tabindex="5" className="forgot-password">Olvidaste el Password?</a>
  					</div>
          </Form>
        </div>
      );
    }
}


export default Login;
