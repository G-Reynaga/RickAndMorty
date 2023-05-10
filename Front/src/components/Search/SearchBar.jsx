import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [character, setCharacter] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchByName(character));
  };

  useEffect(() => {
    if (character !== "") {
      const timeoutId = setTimeout(() => {
        dispatch(searchByName(character));
      }, 200);
      // Resetea el timeout si pkSearch cambia antes de que se cumpla
      return () => clearTimeout(timeoutId);
    } else {
      dispatch(searchByName(character));
    }
  }, [character, dispatch]);

  return (
    <form onSubmit={handleSearch}>
      <div className={styles.search}>
        <input
          type="search"
          placeholder="Search..."
          onChange={handleChange}
          value={character}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
