import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import Header from "./Header";

import ContactList from "./ContactList";

const App = () => {
  const Local_Storage_key = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  useEffect(() => {
    const retrive = JSON.parse(localStorage.getItem(Local_Storage_key));
    if (retrive) setContacts(retrive);
  }, []);
  useEffect(() => {
    localStorage.setItem(Local_Storage_key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
};

export default App;
