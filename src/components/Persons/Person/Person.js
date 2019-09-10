import React, { Component } from 'react';
import styles from './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    // JSX syntax with encapsulating div
    // return (
    //   <div className={styles.Person}>
    //     <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
    //     <p>{this.props.children}</p>
    //     <input type='text' onChange={this.props.changed} value={this.props.name} />
    //   </div>
    // );
    // Same result, but with Higher Order Component rendering
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
};

export default Person;
