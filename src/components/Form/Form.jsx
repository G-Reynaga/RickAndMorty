import styles from "./Form.module.css";
import "animate.css";
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
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
  );
};

export default Form;
