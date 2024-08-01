import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Aside from "../common/Aside/Aside";
import ErrorDiv from "../common/ErrorDiv/ErrorDiv";
import { register } from "../../services/UserService";

const Register = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [rePasswordErrorMessage, setRePasswordErrorMessage] = useState("");
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

  const onRepeatPasswordHandler = (e) => {
    const rePassword = e.target.value;

    setRePasswordErrorMessage("");
    setErrorMessage("");

    if (rePassword.length < 6) {
      setRePasswordErrorMessage("Password must be at least 6 characters long!");
    }

    if (rePassword.length < 1) {
      setRePasswordErrorMessage("Please insert password!");
    }
  };

  const onRegisterHandler = (e) => {
    e.preventDefault();
    const { email, password, rePassword } = e.target;

    if (password.value !== rePassword.value) {
      setErrorMessage("Password do not match!");
      return;
    }

    if (
      emailErrorMessage < 1 &&
      passwordErrorMessage < 1 &&
      rePasswordErrorMessage < 1
    ) {
      setErrorMessage("");

      if (emailErrorMessage < 1 &&
         passwordErrorMessage < 1 &&
         rePasswordErrorMessage < 1 &&
         email.value != ''&&
         password.value != ''&&
         rePassword.value != '') {
        register(email, password)
          .then((res) => {
            navigate("/categories/All");
          })
          .catch((err) => {
            console.log("Something is wrong");
            console.log(err);
            setErrorMessage(err);
          });
      }
    }
  };

  return (
    <main>
      <form className="form" onSubmit={onRegisterHandler}>
        <h1>Register</h1>
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
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Repeat Password"
            name="rePassword"
            autoComplete="on"
            onBlur={onRepeatPasswordHandler}
          />
          <ErrorDiv>{rePasswordErrorMessage}</ErrorDiv>
        </div>
        <button className="btn">Register</button>
        <ErrorDiv>{errorMessage}</ErrorDiv>
      </form>
    </main>
  );
};

export default Register;
