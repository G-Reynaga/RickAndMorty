import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={styles.select}>
        <select onChange={handlerOrder}>
          <option value="order" disabled>
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="filter" disabled>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      {myFavorites.map((character) => {
        return (
          <div className={styles.container}>
            <div className={styles.card}>
              <Link to={`/detail/${character.id}`}>
                <img src={character.image} alt={character.name} />
              </Link>
              <h2>{character.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
