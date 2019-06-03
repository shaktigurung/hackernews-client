import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const AddPerson = gql `
  mutation addingPerson($first: String!, $last: String!){
    createPerson(first: $first, last: $last){
    first
    last
  }
}
`

class CreatePerson extends Component {
  state = {
    first: '',
    last: '',
  }

  render() {
    const { first, last } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={first}
            onChange={e => this.setState({ first: e.target.value })}
            type="text"
            placeholder="A first name for the person"
          />
          <input
            className="mb2"
            value={last}
            onChange={e => this.setState({ last: e.target.value })}
            type="text"
            placeholder="The last name for the person"
          />
        </div>
        <Mutation mutation={AddPerson} variables={{ first, last }} onCompleted={() => this.props.history.push('/')}>
            {/* {() => (
                <button onClick={`... you'll implement this 🔜`}>
                Submit
                </button>
            )} */}
            {createPerson => <button onClick={createPerson}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreatePerson;