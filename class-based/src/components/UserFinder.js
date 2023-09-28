import React from "react";
import styles from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: ''
        }
    }

    componentDidMount() {
        this.setState({users: DUMMY_USERS});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState.search) {
            this.setState({users: DUMMY_USERS.filter((user) => user.name.includes(this.state.search))});
        }
        return;
    }

    searchChangeHandler({target: {value}}) {
        this.setState({search: value});
    }

  render() {
    return (
      <React.Fragment>
        <div className={styles.finder}>
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default UserFinder;
