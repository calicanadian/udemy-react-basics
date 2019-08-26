import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.red;
  }

  const classes = [];
  if (props.persons.length <= 2) {
    classes.push(styles.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!!</p>
      <button className={btnClass} onClick={props.toggle}>Switch Name</button>
    </div>
  );
};

export default cockpit;
