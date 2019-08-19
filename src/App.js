import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'qwe', name: "Ryan", age: 36 },
      { id: 'asd', name: "Manu", age: 30 },
      { id: 'zxc', name: "Stephanie", age: 28 }
    ],
    showPersons: false
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
    // const person = Objec.assign({}, this.state.persons[personIndex]);

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      fontSize: '14px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                      />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        <p>This is really working!!</p>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, "Does this work now?"));
  }
}

export default App;
