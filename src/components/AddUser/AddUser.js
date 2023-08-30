import classes from "./AddUser.module.css";

import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import { useState } from "react";

export default function AddUser(props) {
  const [isError, setIsError] = useState();
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(username + " and " + age);
    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsError({
        title: "Invalid input",
        message: "please enter a valid name and age",
      });
      console.log("invalid input");
      return;
    }
    if (+age < 1) {
      setIsError({
        title: "Invalid age",
        message: "please enter a number greater than 0",
      });
      console.log("invalid age");
      return;
    }
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setIsError(null);
  };

  return (
    <div>
      {isError && (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Usesrname</label>
          <input
            type="text"
            id="username"
            onChange={usernameHandler}
            value={username}
          ></input>
          <label htmlFor="username">Age (Years)</label>
          <input type="text" id="age" onChange={ageHandler} value={age}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
