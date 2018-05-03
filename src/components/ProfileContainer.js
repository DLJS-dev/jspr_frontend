import React from "react";
import { Radio, Segment } from 'semantic-ui-react'

export default class ProfileContainer extends React.Component{
  render() {
    return(
      <div>
        <Segment compact>
          <Radio toggle
            label='Down to Chill'
          />
        </Segment>
        
      </div>
    )
  }
}
