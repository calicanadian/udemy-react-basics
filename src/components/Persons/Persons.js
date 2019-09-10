import React, { Component } from 'react';
import Person from './Person/Person';

// If you want to compare ALL props agains nextProps, extend PureComponent
class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // You should use shouldComponentUpdate if you are comparing the state of certain props to nextProps (extends Component)
  // If you want to compare ALL props agains nextProps (extends PureComponent)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    // return true if you want to continue updating, false if it should stop.
    if (nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked
      ) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map( (person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
      />
    })
  }
};

export default Persons;
