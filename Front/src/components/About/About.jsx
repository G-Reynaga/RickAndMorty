import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";
import foto from "../../img/FB_IMG_1618945132327.jpg";

function About() {
  const navigate = useNavigate();
  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.container}>
        <div className={styles.datos}>
          <div className={styles.btn}>
            <button onClick={() => navigate("/home")}>Back to</button>
          </div>
          <div className={styles.detalles}>
            <h1>Hola soy Gerson Reynaga</h1>
            <p>
              Soy un programador Full Stack con aprendizaje constante y pasión
              por la programación.
            </p>
          </div>
          <div>
            <div className={styles.img}>
              <img src={foto} alt={foto} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
