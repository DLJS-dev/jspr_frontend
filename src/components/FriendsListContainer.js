import React from "react";
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

export default class FriendsListContainer extends React.Component{
  render() {
    return(
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Toggle to Chill</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Down to Chill?</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>John L.</Table.Cell>
            <Table.Cell>@Home</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jamie H.</Table.Cell>
            <Table.Cell>@work</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jill L.</Table.Cell>
            <Table.Cell>@Joes Shanghai </Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>

            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

    )
  }
}
