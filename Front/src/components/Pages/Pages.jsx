import axios from "axios";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styles from "./Page.module.css";

const Page = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCharacters = async (pageNumber) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}`
    );
    setCharacters(response.data.results);
    setPage(pageNumber);
  };

  const handleNextPage = () => {
    fetchCharacters(page + 1);
  };

  const handlePrevPage = () => {
    fetchCharacters(page - 1);
  };

  return (
    <div>
      <div className={styles.pages}>
        <button disabled={page === 1} onClick={handlePrevPage}>
          <AiFillCaretLeft />
        </button>
        <h3>{page}</h3>
        <button onClick={handleNextPage}>
          <AiFillCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Page;
