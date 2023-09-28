import React from 'react';
import styles from './User.module.css';


class User extends React.Component {
    render() {
        return(
            <li className={styles.user}>{this.props.name}</li>
        )
    }
}

export default User;