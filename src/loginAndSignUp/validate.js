export const validate = (data, page) => {
    const errors = {};
    if (page === "signup") {
      if (!data.name.trim()) {
        errors.name = "Username is required";
      } else {
        delete errors.name;
      }
      if (!data.email) {
        errors.email = "Email is required";
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
      ) {
        errors.email = "Invalid email";
      } else {
        delete errors.email;
      }
      if (!data.password) {
        errors.password = "Password is required";
      } else if (data.password.length < 6) {
        errors.password = "Password should be more than 6 characters";
      } else {
        delete errors.password;
      }
      if (!data.confirmPass) {
        errors.confirmPass = "ConfirmPassword is required";
      } else if (data.confirmPass !== data.password) {
        errors.confirmPass = "Is not match with your password";
      } else {
        delete errors.confirmPass;
      }
      if (!data.checkbox) {
        errors.checkbox = "Please accept the privacy";
      } else {
        delete errors.checkbox;
      }
      return errors;
    }
    if (page === "login") {
      if (!data.email) {
        errors.email = "Email is required";
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
      ) {
        errors.email = "Invalid email";
      } else {
        delete errors.email;
      }
      if (!data.password) {
        errors.password = "Password is required";
      } else if (data.password.length < 6) {
        errors.password = "Password should be more than 6 characters";
      } else {
        delete errors.password;
      }
      return errors;
    }
  };
  