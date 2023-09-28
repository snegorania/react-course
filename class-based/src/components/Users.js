import React from "react";
import User from "./User";
import styles from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: false,
    };
  }

  toggleUsers() {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((el) => (
          <User key={el.id} name={el.name} />
        ))}
      </ul>
    );
    return (
      <div className={styles.users}>
        <button onClick={this.toggleUsers.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
