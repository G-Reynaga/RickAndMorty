import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          // window.alert("No hay personajes con ese ID");
          Swal.fire({
            icon: "question",
            title: "No se encontraron los detalles del ID",
            confirmButtonColor: "rgb(92, 119, 131)",
          });
        }
      })
      .catch((err) => {
        // window.alert("No hay personajes con ese ID");
        Swal.fire({
          icon: "error",
          title: "Ups.. Algo Salio Mal",
          confirmButtonColor: "rgb(92, 119, 131)",
        });
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.container}>
        <div className={styles.datos}>
          <div className={styles.detalles}>
            <h1>{character.name}</h1>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character?.origin}</h2>
            <h2
              className={
                character.status === "Alive"
                  ? styles.alive
                  : character.status === "Dead"
                  ? styles.dead
                  : styles.unknown
              }
            >
              {character.status}
            </h2>
          </div>
          <div className={styles.img}>
            <div>
              <div className={styles.btn}>
                <button onClick={() => navigate("/home")}>Back to</button>
              </div>
              <img src={character.image} alt={character.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
