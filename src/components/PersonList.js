import React, { Component } from 'react';
import Person from './Person';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    Greeting
    People{
        first
        last
    }
  }
`

export default class PersonList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
          {({loading, error, data}) => {
              if(loading) return <div> Loading... </div>
              if(error) return <div> Error </div>
              const listOfPerson = data.People;
       
            return (
             <div>
                { listOfPerson.map(list => <Person key={list.id} list={list} />)}
             </div>
            )
          }}
      </Query>
    )
  }
}
