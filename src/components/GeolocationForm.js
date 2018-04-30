import React from "react";
import CONFIG from "../config"
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';

export default class GeolocationForm extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      streetInput: "",
      cityInput: "",
      stateInput: "",
      zipcodeInput: "",
      geocodingData: false
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    let userAddress = `${this.state.streetInput} ${this.state.cityInput} ${this.state.stateInput} ${this.state.zipcodeInput}`
    this.props.setAddress(userAddress)
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let userAddress = `${this.state.streetInput} ${this.state.cityInput} ${this.state.stateInput} ${this.state.zipcodeInput}`
  //   const BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}&key=${CONFIG.GOOG_GEO_KEY}`
  //   fetch(BASE_URL)
  //     .then(res => res.json())
  //     .then(json => this.setState({
  //       geocodingData: json.results[0].geometry.location
  //     }))
  // }

  // showInput = (event) => {
  //   console.log(event.target.value)
  // }

  showStates = () => {
    return <select name="stateInput" onChange={this.handleInput}>
      <option selected disabled hidden>Choose Your State</option>
    	<option value="AL">Alabama</option>
    	<option value="AK">Alaska</option>
    	<option value="AZ">Arizona</option>
    	<option value="AR">Arkansas</option>
    	<option value="CA">California</option>
    	<option value="CO">Colorado</option>
    	<option value="CT">Connecticut</option>
    	<option value="DE">Delaware</option>
    	<option value="DC">District Of Columbia</option>
    	<option value="FL">Florida</option>
    	<option value="GA">Georgia</option>
    	<option value="HI">Hawaii</option>
    	<option value="ID">Idaho</option>
    	<option value="IL">Illinois</option>
    	<option value="IN">Indiana</option>
    	<option value="IA">Iowa</option>
    	<option value="KS">Kansas</option>
    	<option value="KY">Kentucky</option>
    	<option value="LA">Louisiana</option>
    	<option value="ME">Maine</option>
    	<option value="MD">Maryland</option>
    	<option value="MA">Massachusetts</option>
    	<option value="MI">Michigan</option>
    	<option value="MN">Minnesota</option>
    	<option value="MS">Mississippi</option>
    	<option value="MO">Missouri</option>
    	<option value="MT">Montana</option>
    	<option value="NE">Nebraska</option>
    	<option value="NV">Nevada</option>
    	<option value="NH">New Hampshire</option>
    	<option value="NJ">New Jersey</option>
    	<option value="NM">New Mexico</option>
    	<option value="NY">New York</option>
    	<option value="NC">North Carolina</option>
    	<option value="ND">North Dakota</option>
    	<option value="OH">Ohio</option>
    	<option value="OK">Oklahoma</option>
    	<option value="OR">Oregon</option>
    	<option value="PA">Pennsylvania</option>
    	<option value="RI">Rhode Island</option>
    	<option value="SC">South Carolina</option>
    	<option value="SD">South Dakota</option>
    	<option value="TN">Tennessee</option>
    	<option value="TX">Texas</option>
    	<option value="UT">Utah</option>
    	<option value="VT">Vermont</option>
    	<option value="VA">Virginia</option>
    	<option value="WA">Washington</option>
    	<option value="WV">West Virginia</option>
    	<option value="WI">Wisconsin</option>
    	<option value="WY">Wyoming</option>
    </select>
  }

  render() {

    return(
      <div>
          <Form.Field>
            <label>Street: </label>
            <Input type="text"
              placeholder="eg., 11 Broadway"
              name="streetInput"
              onChange={this.handleInput}/>
          </Form.Field>
          <Form.Field>
            <label>City: </label>
            <Input type="text"
              placeholder="e.g., New York"
              name="cityInput"
              onChange={this.handleInput}/>
          </Form.Field>
          {this.showStates()}
          <Form.Field>
            <label> Zip Code: </label>
            <Input type="text"
              placeholder="e.g., 10004"
              name="zipcodeInput"
              onChange={this.handleInput}/>
          </Form.Field>
      </div>
    )
  }
}
