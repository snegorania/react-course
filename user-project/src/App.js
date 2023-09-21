import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prev) => {
      return [user, ...prev];
    })
  } 
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
