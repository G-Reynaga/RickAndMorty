import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";
import Swal from "sweetalert2";
import "animate.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors((prevState) => ({
      ...prevState,
      [event.target.name]: validation({
        ...userData,
        [event.target.name]: event.target.value,
      })[event.target.name],
    }));
  };

  // const handleSumbit = (event) => {
  //   event.preventDefault();
  //   login(userData);
  // };

  const handleSumbit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      // Si hay errores, mostrar alerta
      Swal.fire({
        icon: "error",
        text: "Please complete all fields correctly",
      });
    } else {
      // Si no hay errores, continuar con el proceso
      Swal.fire({
        icon: "success",
        title: "Welcome",
      });
      login(userData);
    }
  };

  return (
    <div className={styles.container}>
      <div className="animate__animated animate__zoomIn">
        <div className={styles.box}>
          <form className={styles.form} onSubmit={handleSumbit}>
            <h2>SIGN IN</h2>
            <div className={styles.inputBox}>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                // required
              />
              <span>User Name</span>
              <i></i>
            </div>
            {errors.username && <p>{errors.username}</p>}
            <div className={styles.inputBox}>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                // required
              />
              <span>Password</span>
              <i></i>
            </div>
            {errors.password && <p>{errors.password}</p>}
            <input type="submit" value="LOGIN " />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
