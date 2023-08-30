import Card from "../Card/Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
}