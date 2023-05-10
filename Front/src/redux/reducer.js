import {
  GET_CHARACTER,
  SEARCH_BY_NAME,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  ORDER,
} from "./action-types";

const initialState = {
  allCharacater: [],
  characters: [],
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        characters: action.payload,
        allCharacater: action.payload
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        characters: state.allCharacater.filter(
          (char) =>
            char.name &&
            char.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.characters, action.payload],
        characters: [...state.characters, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        // myFavorites: 
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.characters.sort((a, b) => a.id - b.id)
            : state.characters.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
