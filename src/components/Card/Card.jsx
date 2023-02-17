import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

function Card({ name, image, gender, onClose, id }) {
  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, image, gender, onClose, id }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites,id]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.btn}>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          <button onClick={onClose}>X</button>
        </div>
        <Link to={`/detail/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Card;
