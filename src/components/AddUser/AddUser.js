import classes from "./AddUser.module.css";

import Card from "../Card/Card";
import Button from "../Button/Button";
import { useState } from "react";

export default function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(username + " and " + age);
    if (username.trim().length === 0 || age.trim().length === 0) {
      console.log("invalid input");
      return;
    }
    if (+age < 1) {
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

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Usesrname</label>
        <input
          type="text"
          id="username"
          onChange={usernameHandler}
          value={age}
        ></input>
        <label htmlFor="username">Age (Years)</label>
        <input
          type="text"
          id="age"
          onChange={ageHandler}
          value={username}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
