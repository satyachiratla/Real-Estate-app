import React from 'react';
import classes from '../StartingPage/ContactList.module.css';

function ContactList(props) {
  return (
    <div className={classes.contactList}>
        <h3>Name: {props.name}</h3>
        <h3>Number: {props.number}</h3>
        <h3>Email: {props.email}</h3>
    </div>
  )
}

export default ContactList