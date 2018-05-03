import React from "react";
import { Button, Form, Input } from 'semantic-ui-react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {signUp} from "../actions/userActions"

class SignUpContainer extends React.Component{

  state = {
    newUser: "",
    newUsername: "",
    newPassword: "",
    confirmPassword: "",
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  };

  handleSignUpSubmit = event => {
    event.preventDefault();
    const userBody = {
      name: this.state.newUser,
      username: this.state.newUsername.toLowerCase(),
      password: this.state.newPassword,
      password_confirmation: this.state.confirmPassword
    }

    this.props.signUp(userBody)

  };//endofhandleSignUpSubmit

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSignUpSubmit}>
          <Form.Field>
            <Input
              type="text"
              placeholder="Name: "
              name="newUser"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="text"
              placeholder="Username: "
              name="newUsername"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              placeholder="Password: "
              name="newPassword"
              value={this.state.newPassword}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              placeholder="Confirm Password: "
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type='submit'>Sign Up~</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signUp: signUp
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUpContainer)
