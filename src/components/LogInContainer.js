import React from "react";
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';

const BASE_URL = "http://localhost:3000/api/v1/users"

export default class LogInContainer extends React.Component{
  state = {
    username: "",
    password: "",
    rememberUser: false,
    usersData: [],
  }

  componentDidMount = () => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(json => this.setState({
        usersData: json
      }))
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    let foundUser = this.state.usersData.find(users => {
      return this.state.username === users.username
    })
    if(!foundUser) {
      alert("User was not found!")
    } else if(foundUser.userPassword !== this.state.password) {
      alert("Password does not match account!")
    } else {
      this.props.store.dispatch({type: "USERID_ADD", id: foundUser.id})
    }
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
    console.log(this.state.usersData)
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
