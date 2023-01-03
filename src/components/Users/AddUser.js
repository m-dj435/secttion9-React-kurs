import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();

  // const [nameValue, setNameValue] = useState("");
  // const [ageValue, setAgeValue] = useState("");
  const [errrorr, setErrrorr] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;

    if (enteredName.trim().length === 0) {
      setErrrorr({
        title: "Invalid input",
        message: "Correct name",
      });
      return;
    }

    if (enteredAge.trim().length === 0 || enteredAge < 0) {
      setErrrorr({
        title: "Invalid age",
        message: "Correct age (>0)",
      });
      return;
    }

    props.onNewUserAddList(enteredName, enteredAge);
    // props.onNewUserAddList(nameValue, ageValue);
    // setNameValue("");
    // setAgeValue("");
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  // const nameInputHandler = (event) => {
  //   setNameValue(event.target.value);
  // };

  // const ageInputHandler = (event) => {
  //   setAgeValue(event.target.value);
  // };

  const errorOffHandler = () => {
    setErrrorr(null);
  };

  return (
    <Wrapper>
      {errrorr && (
        <ErrorModal
          onClick={errorOffHandler}
          title={errrorr.title}
          message={errrorr.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={nameInputHandler}
            // value={nameValue}
            ref={nameRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageInputHandler}
            // value={ageValue}
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
