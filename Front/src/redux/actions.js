import axios from "axios";
import {
  GET_CHARACTER,
  GET_CHARACTER_ID,
  SEARCH_BY_NAME,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  ORDER,
} from "./action-types";

export const getChar = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/rickandmorty");
      const chars = response.data;
      dispatch({ type: GET_CHARACTER, payload: chars });
    } catch (error) {
      return "Something went wrong. Please try again." + error.message;
    }
  };
};

export const getCharByID = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty${id}`
      );
      const char = response.data;
      dispatch({ type: GET_CHARACTER_ID, payload: char });
    } catch (error) {
      return "Something went wrong. Please try again." + error.message;
    }
  };
};

export const addFavorite = (character) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      character
    );
    const data = response.data;
    return dispatch({ type: ADD_FAVORITE, payload: data });
  };
};

export const deleteFavorite = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(
      `http://localhost:3001/rickandmorty/fav/${id}`
    );
    const data = response.data;
    return dispatch({ type: DELETE_FAVORITE, payload: data });
  };
};

export const searchByName = (name) => {
  return { type: SEARCH_BY_NAME, payload: name };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
