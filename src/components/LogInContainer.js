import React from "react";
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { logIn } from "../actions/userActions"

class LogInContainer extends React.Component{
  state = {
    username: "",
    password: "",
    rememberUser: false,
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = event => {
    event.preventDefault();

    const userBody = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.logIn(userBody)

  };

  handleCheckbox = () => {
      this.setState({
        rememberUser: !this.state.rememberUser
      })
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
              name="username"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              placeholder="Password: "
              name="password"
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


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logIn: logIn
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(LogInContainer)
