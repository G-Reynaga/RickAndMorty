import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fechtFav = async () => {
      const response = await axios.get(
        "http://localhost:3001/rickandmorty/fav"
      );
      setFavorites(response.data);
    };
    fechtFav();
  }, []);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={styles.botones}>
        <button className={styles.back} onClick={() => navigate("/home")}>
          Regresar
        </button>
        <div className={styles.select}>
          <select defaultValue="order" onChange={handlerOrder}>
            <option value="order" disabled>
              Order By
            </option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select defaultValue="filter" onChange={handlerFilter}>
            <option value="filter" disabled>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">unknown</option>
            <option value="Genderless">Genderless</option>
          </select>
        </div>
      </div>
      <div className={styles.container}>
        {Favorites.map((character) => {
          return (
            <div className="animate__animated animate__fadeIn" key={character.id}>
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
    </div>
  );
};

export default Favorites;
