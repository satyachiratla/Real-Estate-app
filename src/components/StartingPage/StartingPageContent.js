import classes from "./StartingPageContent.module.css";
import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import ContactList from "./ContactList";
import { useEffect } from "react";

const StartingPageContent = (props) => {
  const [contactList, setContactList] = useState([]);

  const nameRef = useRef("");
  const numberRef = useRef("");
  const emailRef = useRef("");

  const fetchContactsHandler = async () => {
    const response = await fetch('https://contacts-46f9e-default-rtdb.firebaseio.com/contacts.json')
    const data = await response.json();

    let loadedContacts = [];

    for (const key in data) {
      loadedContacts.push({
        id: key,
        name: data[key].name,
        number: data[key].number,
        email: data[key].email
      })
    }

    setContactList(loadedContacts)
  }

  useEffect(() => {
    fetchContactsHandler()
  }, [])

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredData = {
      id: Math.random().toString(),
      name: nameRef.current.value,
      number: numberRef.current.value,
      email: emailRef.current.value,
    };

    const formIsValid = enteredData.name.trim().length > 0 && enteredData.number.length > 0 && enteredData.email.includes('@')

    if (formIsValid) {
      setContactList((prevData) => {
        return [enteredData, ...prevData];
      });
    }


    const response = await fetch('https://contacts-46f9e-default-rtdb.firebaseio.com/contacts.json',
    {
      method: 'POST',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    console.log(data)

    nameRef.current.value = "";
    numberRef.current.value = "";
    emailRef.current.value = "";
  };

  let list = <p>No Contacts Saved! May be add One.</p>;

  if (contactList.length > 0) {
    list = (
      <ul className={classes.list}>
        {contactList.map((list) => {
          return (
            <ContactList
              key={list.id}
              name={list.name}
              number={list.number}
              email={list.email}
            />
          );
        })}
      </ul>
    );
  }

  console.log(contactList);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>
        Contact Form and Contact List Page
      </h1>
      <form onSubmit={submitHandler}>
        <h2 style={{ textAlign: "center" }}>Add Contacts</h2>
        <div className={classes.starting}>
          <label htmlFor="name">Contact Name</label>
          <input type="text" id="name" ref={nameRef} />
          <label htmlFor="contact-number">Contact Number</label>
          <input type="number" id="number" ref={numberRef} />
          <label htmlFor="email">Contact Email</label>
          <input type="email" id="number" ref={emailRef} />
          <div className={classes.actions}>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
      <Card>{list}</Card>
    </React.Fragment>
  );
};

export default StartingPageContent;
