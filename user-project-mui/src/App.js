import React, { useState } from "react";
import "./App.css";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";

const theme = createTheme({
  palette: {
    red: {
      main: "#5F003B",
      contrastText: 'white'
    },
  },
});

const usersArr = [
  {id: 1, name: 'Dave', age: '22'}
]

function App() {
  const [users, setUsers] = useState(usersArr);
  const submitHandler = user => {
    setUsers((prev) => {
      return [user, ...prev]
    })
  }
  
  return (
    <ThemeProvider theme={theme}>
      <AddUser onSubmit={submitHandler}/>
      <UserList users={users} />
    </ThemeProvider>
  );
}

export default App;
