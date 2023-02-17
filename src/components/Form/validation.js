const validation = (userData) => {
  let errors = {};

  // validacion para email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
    errors.username = "El email es invalido";
  }
  if (!userData.username) {
    errors.username = "Este campo no puede estar vacio";
  }
  if (userData.username.length > 20) {
    errors.username = "El email no puede superar los 20 caracteres";
  }
  // validacion para password
  if (!userData.password) {
    errors.password = "Este campo no puede estar vacio";
  } else if (!userData.password.match(/\d/)) {
    errors.password = "La contraseña debe contener al menos un numero";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
