import React from "react";
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';

export default class LogInContainer extends React.Component{
  render() {
    return(
      <div>
        <Form>
          <Form.Field>
            <Input type="text" placeholder="Username: "/>
          </Form.Field>
          <Form.Field>
            <Input type="text" placeholder="Password: "/>
          </Form.Field>
          <Button type='submit'>Log In~</Button>
          <Checkbox label="Remember me" /><a href="">  · Forgot Password?</a>
        </Form>
      </div>
    )
  }
}
