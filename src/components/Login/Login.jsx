import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Login.css";
import ErrorDiv from "../common/ErrorDiv/ErrorDiv";
import Aside from "../common/Aside/Aside";
import { login } from "../../services/UserService";

const Login = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onEmailHandler = (e) => {
    const email = e.target.value;

    setEmailErrorMessage("");
    setErrorMessage("");

    if (!email.includes("@")) {
      setEmailErrorMessage("Invalid email - @ missing!");
    }

    if (email.length < 6) {
      setEmailErrorMessage("Invalid email!");
    }

    if (email.length < 1) {
      setEmailErrorMessage("Please insert email!");
    }
  };

  const onPasswordHandler = (e) => {
    const password = e.target.value;

    setPasswordErrorMessage("");
    setErrorMessage("");

    if (password.length < 6) {
      setPasswordErrorMessage("Password must be at least 6 characters long!");
    }

    if (password.length < 1) {
      setPasswordErrorMessage("Please insert password!");
    }
  };

  const onLoginHandler = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const { email, password } = e.target;

    if (emailErrorMessage < 1 && 
       passwordErrorMessage < 1 && 
       email.value != '' &&
       password.value != '') {
      login(email, password)
      .then((res) => {
        navigate("/categories/All");
        console.log("Succsesfully!");
      })
      .catch((error) => {
        if(error.message == "Firebase: Error (auth/wrong-password).") {
          setErrorMessage("Wrong password! Please try again!")
        } else if(error.message == "Firebase: Error (auth/user-not-found)." ) {
          setErrorMessage("Username not found!")
        }
      });
    }

  };

  return (
    <main>
      <Aside />
      <form className="form" onSubmit={onLoginHandler}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            autoComplete="on"
            onBlur={onEmailHandler}
          />
          <ErrorDiv>{emailErrorMessage}</ErrorDiv>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            autoComplete="on"
            onBlur={onPasswordHandler}
          />
          <ErrorDiv>{passwordErrorMessage}</ErrorDiv>
        </div>
        <button className="btn">Login</button>
        <ErrorDiv>{errorMessage}</ErrorDiv>
      </form>
    </main>
  );
};

export default Login;
