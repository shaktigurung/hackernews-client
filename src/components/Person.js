import React, { Component } from 'react';

class Person extends Component {
    render(){
        return(
            <div>
            <p> {this.props.list.first } {this.props.list.last }</p>
            </div>
        );
    }
}

export default Person;