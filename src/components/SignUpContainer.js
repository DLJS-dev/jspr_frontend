import React from "react";
import { Button, Form, Input } from 'semantic-ui-react';

const BASE_URL = "http://localhost:3000/api/v1/users"

export default class SignUpContainer extends React.Component{

  state = {
    newUser: "",
    newUsername: "",
    newPassword: "",
    confirmPassword: "",
    allUsernames: []
  }

  componentDidMount = () => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(json => json.forEach(user => {
        this.setState({
          allUsernames: [...this.state.allUsernames, user.username]
        })

      }))
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
      userPassword: this.state.newPassword
    }
    if (this.state.allUsernames.includes(this.state.newUsername.toLowerCase() )) {
      alert('This username is already taken');
    } else if(this.state.newPassword !== this.state.confirmPassword) {
      alert('Your passwords do not match');
      this.setState({
        newPassword: "",
        confirmPassword: "",
      })
    } else {
      fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userBody)
      })
      .then(res => res.json())
      .then(json => console.log(json))
    }
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
