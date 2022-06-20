
import { useState } from 'react';
import './App.css';
import contactsData from "./contacts.json";
import Contact from "./components/Contact";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const handleAdd = () => {
    const contactsCopy = [...contacts];
    const newContact = contactsData[Math.floor(Math.random() * contactsData.length)];
    if (contacts.indexOf(newContact) === -1) {
      contactsCopy.push(newContact);
    }
    setContacts(contactsCopy);
  }

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const displayContacts = () => {
    return (
      contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            {...contact}
            handleDelete={handleDelete}
          />
        )
      })
    )
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="display">
        <p>Picture</p>
        <p>Name</p>
        <p>Popularity</p>
        <p>Won Oscar</p>
        <p>Won Emmy</p>
      </div>
      <div>
        {
          displayContacts()
        }
      </div>
      <button onClick={() => handleAdd()}>Add contact</button>
    </div>
  );
}

export default App;
