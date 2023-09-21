import React from "react";

import { Card, CardContent } from "@mui/material";

const User = ({name, age}) => {
    return (
        <Card sx={{ maxWidth: 300, marginTop: 3, ml: "auto", mr: "auto" }}>
          <CardContent>
            <div>{name}</div>
            <div>{age} years old</div>
          </CardContent>
        </Card>
    )
}

export default User;