import React from "react";
import Card from "../../UI/Card/Card";
import styles from './UsersList.module.css'

const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((el) => (
          <li key={el.id}>
            {el.name} ({el.age} ysears old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList
