import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./Detail.module.css";

function Detail() {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
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
  }, [detailId]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.container}>
        <div className={styles.datos}>
          <div className={styles.detalles}>
            <h1>Nombre: {character.name}</h1>
            <h2>Estado: {character.status}</h2>
            <h2>Especie: {character.species}</h2>
            <h2>Genero: {character.gender}</h2>
            <h2>Origen: {character?.origin}</h2>
          </div>
          <div>
            <div className={styles.btn}>
              <button onClick={() => navigate("/home")}>Regresar</button>
            </div>
            <div className={styles.img}>
              <img src={character.image} alt={character.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
