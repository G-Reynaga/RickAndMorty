import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Details/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const username = "gerson@gmail.com";
  const password = "123456";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {location.pathname === "/home" ? <Nav /> : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {/* permite que solo se vea Home y en las demas pag no se visualice */}
      {location.pathname === "/home" ? <Footer /> : null}
    </div>
  );
}

export default App;
