import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './form.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class hotspotForm extends Component{
  constructor(props){
    super(props);
    this.state = {

    }

  }
  onFormSubmit = (e)=>{
    e.preventDefault();
    //if (this.state.isValidName) this.props.addCampus(this.state);
    //route component
    
  };

  render(){
    return(
      <div>
      <Form className='hotspot-form' onSubmit={onFormSubmit}>
        <h1 className='text-center'>Add New Hotspot</h1>
        <FormGroup>
          <Label >Hotspot Name</Label>
          <Input type="text" name="text" id="hotspotName"/>
        </FormGroup>
        <FormGroup>
          <Label >Address</Label>
          <Input type="text" name="text" id="location" />
        </FormGroup>
        <FormGroup>
          <Label >City</Label>
          <Input type="text" name="text" id="city" />
        </FormGroup>
        <FormGroup>
          <Label >Zip Code</Label>
          <Input type="text" name="text" id="zipCode" />
        </FormGroup>
        <FormGroup>
          <Label >Select Wifi session</Label>
          <Input type="select" name="select" id="Type">
            <option>Free</option>
            <option>Limit Free</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Location-Type</Label>
          <Input type="textarea" name="text" id="locationType" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      </div>
    )
  }  
}   

// SSID: TransitWirelessWiFi
// Provider: Transit Wireless
// Borough: Brooklyn
// Wifi-Session: Free
// Location-Type: Subway Station