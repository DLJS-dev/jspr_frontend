import React from "react";
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';
import GeolocationForm from "./GeolocationForm";

const BASE_URL = "http://localhost:3000/api/v1/users/"

export default class ProfileSetUp extends React.Component{
  state = {
    homeAddress: "",
    phoneNumber: null,
    wifiName: "",
    wifiPassword: "",
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      home_address: this.state.homeAddress,
      phone_number: this.state.phoneNumber,
      wifi_name: this.state.wifiName,
      wifi_password: this.state.wifiPassword
    }
    debugger
    console.log(this.props.store.userID);
    console.log(BASE_URL+this.props.store.userID)
    fetch(BASE_URL+this.props.store.userID, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then(json => console.log(json))
  }//endofHandleSubmit

  inputAddress = (address) => {
    this.setState({
      homeAddress: address
    })
  }

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label>Home Address: </label>
          <GeolocationForm setAddress={this.inputAddress}/>
          <Form.Field>
            <label>Phone Number: </label>
            <Input type="number"
              name="phoneNumber"
              placeholder="e.g., 7181234567"
              onChange={this.handleInput}/>
          </Form.Field>
          <Form.Field>
            <label>Wifi: </label>
            <Input type="text"
              name="wifiName"
              onChange={this.handleInput}/>
          </Form.Field>
          <Form.Field>
            <label>Wifi Password: </label>
            <Input type="password"
              name="wifiPassword"
              onChange={this.handleInput}/>
          </Form.Field>

          <Button type='submit'>Submit Profile~</Button>
        </Form>

      </div>
    )
  }
}
