import React from "react";
import { Button, Form, Input } from 'semantic-ui-react';

export default class SignUpContainer extends React.Component{

  state = {
    newUsername: "",
    newPassword: "",
    confirmPassword: "",
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUpSubmit = event => {
    event.preventDefault();
    // this.props.signUpUser(this.state.newUsername, this.state.newPassword);
  };

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSignUpSubmit}>
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
              type="text"
              placeholder="Password: "
              name="newPassword"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="text"
              placeholder="Confirm Password: "
              name="confirmPassword"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type='submit'>Sign Up~</Button>
        </Form>
      </div>
    )
  }
}
