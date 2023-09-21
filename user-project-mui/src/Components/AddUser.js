import React, { useState } from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { nanoid } from "nanoid";
import ErrorModal from "./ErrorModal";

const AddUser = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameHandler = ({ target: { value } }) => setName(value);
  const ageHandler = ({ target: { value } }) => setAge(value);
  const formHandler = () => {
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "All fiellds are required",
        message: "Fill all fields of form",
      });
      setOpen(true);
      return;
    }

    if (+age < 1) {
      setError({
        title: "Wrong age",
        message: "Age should be greater then 1",
      });
      setOpen(true);
      return;
    }

    const user = {
      id: nanoid(),
      name: name,
      age: age,
    };
    onSubmit(user);
    setName("");
    setAge("");
  };

  return (
    <Card sx={{ maxWidth: 300, marginTop: 5, ml: "auto", mr: "auto" }}>
      <ErrorModal
        title={error.title}
        message={error.message}
        open={open}
        onClose={handleClose}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <TextField
            sx={{ mt: 2 }}
            required
            id="name"
            label="Name"
            variant="outlined"
            onChange={nameHandler}
            value={name}
          />
        </div>
        <div>
          <TextField
            sx={{ mt: 2 }}
            required
            id="age"
            label="Age"
            variant="outlined"
            onChange={ageHandler}
            value={age}
          />
        </div>
      </CardContent>
      <CardActions>
        <Button
          sx={{ ml: 25 }}
          variant="contained"
          color="red"
          onClick={formHandler}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddUser;
