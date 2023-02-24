import "./App.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Card/Cards";
import About from "./components/About/About";
import Detail from "./components/Details/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "1";
  const password = "1";

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
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters(oldcharacter => [...oldcharacter, data]);
        } else {
          // window.alert("No hay personajes con ese ID");
          Swal.fire({
            icon: "question",
            iconColor: "#2DCDDF",
            title: "El ID que busca no existe",
            color: "black",
            confirmButtonColor: "#703bd8",
          });
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}
      <Routes>
        <Route path="/" element />
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
