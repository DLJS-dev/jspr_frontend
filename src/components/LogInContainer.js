import React from "react";
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';

export default class LogInContainer extends React.Component{
  state = {
    username: "",
    password: "",
    rememberUser: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    // this.props.signInUser(this.state.username, this.state.password);
  };

  handleCheckbox = () => {
      this.setState({
        rememberUser: !this.state.rememberUser
      })
      console.log(this.state.rememberUser)
  }

  // showInput = (event) => {
  //   console.log(clicked)
  // }

  render() {
    return(
      <div>
        {this.props.errorMessage ? <div>{this.props.errorMessage}</div> : null}
        <Form onSubmit={this.handleLoginSubmit}>
          <Form.Field>
            <Input
              type="text"
              placeholder="Username: "
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="text"
              placeholder="Password: "
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type='submit'>Log In~</Button>
          <Checkbox label="Remember me" onClick={this.handleCheckbox} /><a href="">  · Forgot Password?</a>
        </Form>
      </div>
    )
  }
}
