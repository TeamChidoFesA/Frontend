import React, { Component } from 'react';
import { Button, Form, Input, FormGroup, Label } from 'reactstrap';
import Modal from './modal';

class register extends Component {
    constructor(props) {
      super(props);

    }

    render(){

      return (
        <div className="container">
          <Form>
            <FormGroup>
              <Label for="nickname">Correo</Label>
              <Input placeholder="nickname" id="nickname" />
            </FormGroup>
            <FormGroup>
              <Label for="correo">Correo</Label>
              <Input placeholder="correo@example.com" id="correo" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="******" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Re - Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="*******" />
            </FormGroup>
            <div className="row">
      				<div className="col-xs-4 col-sm-3 col-md-3">
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Acepto
                  </Label>
                </FormGroup>
      				</div>
      				<div className="col-xs-8 col-sm-9 col-md-9">
      					 <Modal/>
      				</div>
      			</div>
            <br/>
            <div className="text-center">
  						<Button>Submit</Button>
  					</div>
          </Form>
          <br/>
          <br/>
        </div>
      );
    }
}


export default register;
