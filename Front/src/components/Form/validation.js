const validation = (userData) => {
  let errors = {};

  // validacion para email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
    errors.username = "The email is invalid";
  }
  if (!userData.username) {
    errors.username = "This field cannot be empty";
  }
  if (userData.username.length > 30) {
    errors.username = "The email must be no longer than 30 characters";
  }
  // validacion para password
  if (!userData.password) {
    errors.password = "This field cannot be empty";
  } else if (!userData.password.match(/\d/)) {
    errors.password = "The password must contain at least one number";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "The password must contain between 6 and 10 characters";
  }
  return errors;
};

export default validation;
