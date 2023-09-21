import React from "react";

import User from "./User";

const UserList = ({users}) => {
    return (
        <div>
            {
                users.map(el => <User key={el.id} name={el.name} age={el.age}/>)
            }
        </div>
    )
}

export default UserList;