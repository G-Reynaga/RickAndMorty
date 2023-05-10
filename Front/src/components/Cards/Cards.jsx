import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getChar } from "../../redux/actions";

function Cards() {
  const chars = useSelector((state) => state.characters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChar());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.container}>
        {chars.map((char, index) => {
          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              image={char.image}
              species={char.species}
              gender={char.gender}
              status={char.status}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
