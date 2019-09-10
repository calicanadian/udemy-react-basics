import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // you can set state here if you're working with an older
    // project that doesn't support init of state outside of
    // the constructor
  }

  state = {
    persons: [
      { id: 'qwe', name: "Ryan", age: 36 },
      { id: 'asd', name: "Manu", age: 30 },
      { id: 'zxc', name: "Stephanie", age: 28 }
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // Vanilla JS
    const persons = [...this.state.persons]; // ES6 Spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    });

    // ES6 spread operator
    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative Vanilla JS approach
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  };

  togglePersonsHandler = () => {
    // ES6 syntax creates a method on the class
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }



    return (
      <WithClass classes={styles.App}>
      <button onClick={() => {
        this.setState({ showCockpit: !this.state.showCockpit });
      }} > Toggle Cockpit </button>
      {
        this.state.showCockpit ? (
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          toggle={this.togglePersonsHandler} />
        ) : null
      }
      {persons}
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, "Does this work now?"));
  }
}

export default App;
