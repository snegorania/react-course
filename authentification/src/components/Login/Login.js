import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const initialEmailState = {
  value: "",
  isValid: false,
};

const initialPasswordState = {
  value: "",
  isValid: false,
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return state;
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return state;
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    initialEmailState
  );
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialPasswordState
  );

  const ctx = useContext(AuthContext);

  const { isValid: emailValid } = emailState;
  const { isValid: passwordValid } = passwordState;

  useEffect(() => {
    const indentifire = setTimeout(() => {
      setFormIsValid(emailValid && passwordValid);
    }, 500);
    return () => {
      clearTimeout(indentifire);
    };
  }, [emailValid, passwordValid]);

  const emailChangeHandler = ({ target: { value } }) => {
    dispatchEmail({ type: "USER_INPUT", payload: value });
  };

  const passwordChangeHandler = ({ target: { value } }) => {
    dispatchPassword({ type: "USER_INPUT", payload: value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid) {
      ctx.logIn(emailState.value, passwordState.value);
    } else if (!emailValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          id={"email"}
          type={"email"}
          value={emailState.value}
          label={"E-Mail"}
          isValid={emailValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordRef}
          id={"password"}
          type={"password"}
          value={passwordState.value}
          label={"Password"}
          isValid={passwordValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
