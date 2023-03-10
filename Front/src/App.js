import "./App.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Details/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "";
  const password = "";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (character) => {
    // hacer busqueda
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          // Verificar si el personaje ya está en la lista
          const index = characters.findIndex((c) => c.id === data.id);
          if (index === -1) {
            setCharacters((oldcharacter) => [...oldcharacter, data]);
          } else {
            Swal.fire({
              icon: "info",
              iconColor: "#2DCDDF",
              title: "El ID que busca ya esta en la lista",
              color: "black",
              confirmButtonColor: "#703bd8",
            });
          }
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Por favor colocar un ID existente",
          color: "black",
          confirmButtonColor: "#703bd8",
        });
        console.error(error);
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
      {location.pathname === "/home" ? <Nav onSearch={onSearch} /> : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
