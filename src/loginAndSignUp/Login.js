import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "./toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./validate";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const ChangeHandler = (event) => {

      setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
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
      notify("success", "You Loged in Successfully");
    } else {
      setFocus({
        email: true,
        password: true,
      });
      notify("error", "Invalid");
    }
  };
  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data]);
  return (
    <div className={styles.total}>
      <div className={styles.container}>
      <h1 className={styles.header}>Login</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.items}>
          <label>Email</label>
          <input className={`${errors.email && focus.email  ? styles.redBorder : styles.inputs }`}
            type="text"
            name="email"
            value={data.email}
            onChange={ChangeHandler}
            onFocus={focusHandler}
          />
         <span className={styles.showError}>{errors.email && focus.email && errors.email}</span>
        </div>
        <div className={styles.items}>
          <label>Password</label>
          <input className={`${
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
         <span className={styles.showError}>{errors.password && focus.password && errors.password}</span>
        </div>
        <div className={styles.linkAndbutton}>
        <Link to="/signup">SignUp</Link>
        <button className={styles.subbut} type="submit">Login</button>
        <Link to="/"><button className={styles.subbut}>Back</button></Link>
        </div>
      </form>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Login;