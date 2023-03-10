import SearchBar from "../Search/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div>
      <nav className={styles.navigation}>
        <div>
          <Link to="/home" className={styles.link}>
            Home
          </Link>
          <Link to="/favorites" className={styles.link}>
            Favorites
          </Link>
          <Link to="/about" className={styles.link}>
            About
          </Link>
          <Link to="/" className={styles.link}>
            Log Out
          </Link>
        </div>
        <div className={styles.search}>
          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
