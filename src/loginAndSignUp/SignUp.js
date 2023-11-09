import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "./toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./validate";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    password: false,
    confirmPass: false,
    checkbox: false,
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    checkbox: false,
  });

  const ChangeHandler = (event) => {
    if (data.name === "checkbox") {
      setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.checked,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const focusHandler = (event) => {
    setFocus((prevstate) => ({
      ...prevstate,
      [event.target.name]: true,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      notify("success", "You Signed Up Successfully");
    } else {
      setFocus({
        name: true,
        email: true,
        password: true,
        confirmPass: true,
        checkbox: true,
      });
      notify("error", "Invalid");
    }
  };

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data]);

  return (
    <div className={styles.total}>
      <div className={styles.container}>
        <h1 className={styles.header}>SignUp</h1>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.items}>
          <label>Name</label>
            <input className={`${errors.name && focus.name  ? styles.redBorder : styles.inputs }`}
              type="text"
              name="name"
              value={data.name}
              onChange={ChangeHandler}
              onFocus={focusHandler}
            />
            <span className={styles.showError}>
              {errors.name && focus.name && errors.name}
            </span>
          </div>
          <div className={styles.items}>
            <label>Email</label>
            <input
              className={`${
                errors.email && focus.email ? styles.redBorder : styles.inputs
              }`}
              type="text"
              name="email"
              value={data.email}
              onChange={ChangeHandler}
              onFocus={focusHandler}
            />
            <span className={styles.showError}>
              {errors.email && focus.email && errors.email}
            </span>
          </div>
          <div className={styles.items}>
            <label>Password</label>
            <input
              className={`${
                errors.password && focus.password
                  ? styles.redBorder
                  : styles.inputs
              }`}
              type="password"
              name="password"
              value={data.password}
              onChange={ChangeHandler}
              onFocus={focusHandler}
            />
            <span className={styles.showError}>
              {errors.password && focus.password && errors.password}
            </span>
          </div>
          <div className={styles.items}>
            <label>ConfirmPassword</label>
            <input
              className={`${
                errors.confirmPass && focus.confirmPass
                  ? styles.redBorder
                  : styles.inputs
              }`}
              type="password"
              name="confirmPass"
              value={data.confirmPass}
              onChange={ChangeHandler}
              onFocus={focusHandler}
            />
            <span className={styles.showError}>
              {errors.confirmPass && focus.confirmPass && errors.confirmPass}
            </span>
          </div>
          <div className={styles.items}>
            <label>Accept privacy policy</label>
            <input className={styles.checkbox}
              type="checkbox"
              name="checkbox"
              value={data.checkbox}
              onChange={ChangeHandler}
              onFocus={focusHandler}
            />
            <span className={styles.showError}>
              {errors.checkbox && focus.checkbox && errors.checkbox}
            </span>
          </div>
          <div className={styles.linkAndbutton}>
            <Link to="/login">Login</Link>
            <button type="submit" className={styles.subbut}>Submit</button>
            <Link to="/"><button className={styles.subbut}>Back</button></Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
export default SignUp;
