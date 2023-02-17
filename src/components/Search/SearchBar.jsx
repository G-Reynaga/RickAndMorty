import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="search"
        value={character}
        onChange={handleChange}
        placeholder="Buscar"
      />
      <button onClick={() => onSearch(character)}>Buscar</button>
    </div>
  );
}

export default SearchBar;
