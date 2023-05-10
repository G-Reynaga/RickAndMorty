import { Link } from "react-router-dom";
import styles from "./Card.module.css";


function Card({ name, image, status, id }) {
  return (
    <div>
      <div className="animate__animated animate__fadeIn">
        <div className={styles.card}>
          <div className={styles.btn}>
            {/* <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button> */}
            {/* <button onClick={onClose}>X</button> */}
          </div>
          <Link to={`/detail/${id}`}>
            <img src={image} alt={name} />
          </Link>
          <h3>{name}</h3>
          <span
            className={
              status === "Alive"
                ? styles.alive
                : status === "Dead"
                ? styles.dead
                : styles.unknown
            }
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
