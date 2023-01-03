import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App(props) {
  const [newUserOnList, setNewUserOnList] = useState([]);

  const newUserHandler = (uName, uAge) => {
    setNewUserOnList((prevList) => {
      return [
        ...prevList,
        { userName: uName, userAge: uAge, userId: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <div>
        {
          <h2>
            React - The Complete Guide - Section 9, Academind by Maximilian
            Schwarzmüller
          </h2>
        }
      </div>
      <AddUser onNewUserAddList={newUserHandler} />
      <UserList users={newUserOnList} />
    </>
  );
}

export default App;
