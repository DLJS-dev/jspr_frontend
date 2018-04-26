import React from "react";
import { Button, Form, Input } from 'semantic-ui-react';

export default class SignUpContainer extends React.Component{
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
          <Form.Field>
            <Input type="text" placeholder="Confirm Password: "/>
          </Form.Field>
          <Button type='submit'>Sign Up~</Button>
        </Form>
      </div>
    )
  }
}
