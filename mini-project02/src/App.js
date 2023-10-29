import React, { useState } from 'react';
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";


const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    setUserList((prevState) => [user, ...prevState]);
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
