import './App.css';
import Header from './Header';
import AddUser from './AddUser';
import React , {useState , useEffect} from 'react';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid'; 



function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);
    setUsers([...users, {id: uuidv4(), ...user }]); 
    console.log(users);
   } 

   const removeContactHandler = (id) => {
    const newContactList = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newContactList);
  };

  useEffect(() => {
    console.log(users);
  }
  ,[users]);

  return (
    <div className="App">
      <Header/>
      {/* Pass the addUserHandler function to AddUser */}
      <AddUser addUserHandler={addUserHandler}/>
      <ContactList users={users} getContactId={removeContactHandler}/>

    </div>
  );
}

export default App;
